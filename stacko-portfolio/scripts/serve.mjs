/**
 * Servidor estático para probar el build como en producción (Vercel con cleanUrls):
 *   /proyectos → dist/proyectos/index.html ; rutas inexistentes → dist/404.html con estado 404.
 * `vite preview` no sirve así: devuelve la home para cualquier ruta y rompe la hidratación.
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist');
const port = Number(process.env.PORT) || 4173;

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.json': 'application/json',
  '.png': 'image/png',
  '.woff2': 'font/woff2',
};

const resolveFile = (urlPath) => {
  const clean = path.normalize(decodeURIComponent(urlPath)).replace(/^(\.\.[/\\])+/, '');
  const candidates = [path.join(dist, clean), path.join(dist, clean, 'index.html'), path.join(dist, `${clean}.html`)];
  return candidates.find((file) => file.startsWith(dist) && fs.existsSync(file) && fs.statSync(file).isFile());
};

http
  .createServer((req, res) => {
    const { pathname } = new URL(req.url, 'http://localhost');
    const file = resolveFile(pathname);
    const target = file || path.join(dist, '404.html');
    res.writeHead(file ? 200 : 404, { 'Content-Type': types[path.extname(target)] || 'application/octet-stream' });
    fs.createReadStream(target).pipe(res);
  })
  .listen(port, () => console.log(`Serving dist/ like production at http://localhost:${port}`));
