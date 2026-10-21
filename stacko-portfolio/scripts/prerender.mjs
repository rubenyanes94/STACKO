/**
 * Prerender (SSG): genera un HTML estático por cada URL del sitio con su contenido y SEO ya incluidos,
 * para que Google lo indexe sin depender de JavaScript. También genera sitemap.xml, robots.txt y 404.html.
 *
 * Se ejecuta en `npm run build`, después de:
 *   vite build                                   → dist/ (app del navegador)
 *   vite build --ssr src/entry-server.jsx        → dist-server/ (render en Node)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const { render, getHead, headTags, allPaths, SITE_URL } = await import(
  pathToFileURL(path.join(root, 'dist-server/entry-server.js')).href
);

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');

const escapeHtml = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const renderTag = ({ tag, attrs = {}, text }) => {
  const attributes = Object.entries(attrs)
    .map(([key, value]) => ` ${key}="${escapeHtml(value)}"`)
    .join('');
  if (tag === 'meta' || tag === 'link') return `<${tag}${attributes} data-head>`;
  // JSON-LD: se escapa "<" para que nunca pueda cerrar el <script>
  const body = tag === 'script' ? text.replace(/</g, '\\u003c') : escapeHtml(text);
  return `<${tag}${attributes} data-head>${body}</${tag}>`;
};

const buildPage = (url) => {
  const head = getHead(url);
  const tags = headTags(head).map(renderTag).join('\n    ');
  return template
    .replace(/<html lang="[^"]*">/, `<html lang="${head.lang}">`)
    .replace(/<!--head-tags-->[\s\S]*?<!--\/head-tags-->/, tags)
    .replace('<div id="root"></div>', `<div id="root">${render(url)}</div>`);
};

const outputFile = (url) => (url === '/' ? path.join(dist, 'index.html') : path.join(dist, url, 'index.html'));

const paths = allPaths();
for (const url of paths) {
  const file = outputFile(url);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, buildPage(url));
}
fs.writeFileSync(path.join(dist, '404.html'), buildPage('/404'));
console.log(`✓ prerendered ${paths.length} pages + 404.html`);

// sitemap.xml y robots.txt necesitan el dominio real (VITE_SITE_URL)
if (SITE_URL) {
  const today = new Date().toISOString().slice(0, 10);
  const entries = paths.map((url) => {
    const { alternates } = getHead(url);
    const links = Object.entries(alternates)
      .map(([code, href]) => `    <xhtml:link rel="alternate" hreflang="${code}" href="${href}"/>`)
      .join('\n');
    return `  <url>\n    <loc>${SITE_URL}${url}</loc>\n    <lastmod>${today}</lastmod>\n${links}\n  </url>`;
  });
  fs.writeFileSync(
    path.join(dist, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join('\n')}\n</urlset>\n`
  );
  fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
  console.log(`✓ sitemap.xml (${paths.length} URLs) and robots.txt for ${SITE_URL}`);
} else {
  fs.writeFileSync(path.join(dist, 'robots.txt'), 'User-agent: *\nAllow: /\n');
  console.warn('⚠ VITE_SITE_URL is not set: skipped sitemap.xml and absolute canonical/hreflang URLs. Set it in .env before deploying.');
}

fs.rmSync(path.join(root, 'dist-server'), { recursive: true, force: true });
