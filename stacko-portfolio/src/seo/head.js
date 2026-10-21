import { translate } from '../context/language';
import { LANGUAGES, DEFAULT_LANG, matchPath, pathFor, serviceSlugs } from '../i18n/routes';
import { projects, getProjectBySlug } from '../data/projects';
import { site } from '../data/site';

/**
 * Metadatos SEO de cualquier URL del sitio. Se usa en el build (prerender → HTML estático que lee Google)
 * y en el navegador al navegar entre páginas (HeadManager).
 *
 * VITE_SITE_URL (.env) es el dominio de producción, p. ej. https://stacko.com.ve — sin él no se pueden
 * generar URLs absolutas para canonical, hreflang, Open Graph y sitemap.
 */
export const SITE_URL = (import.meta.env.VITE_SITE_URL || '').replace(/\/+$/, '');

const DEFAULT_IMAGE = 'https://ik.imagekit.io/n9udqzkqr/Aks.png';
const OG_LOCALES = { es: 'es_VE', en: 'en_US' };

const absolute = (path) => (SITE_URL ? `${SITE_URL}${path}` : path);

const organization = (lang) => ({
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: site.name,
  url: absolute('/'),
  logo: absolute('/favicon.svg'),
  description: translate(lang, 'seo.organization'),
  founder: { '@type': 'Person', name: site.founder },
  email: site.email,
  telephone: site.phone,
  address: { '@type': 'PostalAddress', addressCountry: 'VE' },
  areaServed: ['VE', 'Latin America', 'Worldwide'],
  knowsAbout: [
    'Inteligencia artificial',
    'Agentes de IA',
    'Automatización de ventas',
    'Automatización de procesos',
    'Desarrollo de software',
    'Artificial intelligence',
    'AI agents',
    'Sales automation',
    'Software development',
  ],
  sameAs: site.socials.map((social) => social.url),
});

const breadcrumbs = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: item.name,
    item: absolute(item.path),
  })),
});

const faqPage = (faqs) => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
});

const serviceSchema = (name, description, lang) => ({
  '@type': 'Service',
  name,
  description,
  serviceType: name,
  provider: { '@id': `${SITE_URL}/#organization` },
  areaServed: ['VE', 'Latin America'],
  availableLanguage: lang === 'es' ? ['es', 'en'] : ['en', 'es'],
});

export const getHead = (pathname) => {
  const { name, lang, params } = matchPath(pathname);
  const t = (key, vars) => translate(lang, key, vars);
  const crumbHome = { name: t('seo.breadcrumbs.home'), path: pathFor('home', lang) };

  let title = t('seo.notFound.title');
  let description = t('seo.home.description');
  let image = DEFAULT_IMAGE;
  let schemas = [organization(lang)];
  let found = true;

  if (name === 'home') {
    title = t('seo.home.title');
    description = t('seo.home.description');
    schemas.push({
      '@type': 'WebSite',
      name: site.name,
      url: absolute(pathFor('home', lang)),
      inLanguage: lang,
      publisher: { '@id': `${SITE_URL}/#organization` },
    });
  } else if (name === 'projects') {
    title = t('seo.projects.title');
    description = t('seo.projects.description');
    schemas.push(breadcrumbs([crumbHome, { name: t('seo.breadcrumbs.projects'), path: pathFor('projects', lang) }]));
  } else if (name === 'project' && getProjectBySlug(params.slug, lang)) {
    const project = getProjectBySlug(params.slug, lang);
    title = t('seo.project.title', { title: project.title });
    description = project.business.summary;
    image = project.media.cover;
    schemas.push(
      {
        '@type': 'CreativeWork',
        name: project.title,
        description: project.business.summary,
        image: project.media.cover,
        dateCreated: String(project.year),
        creator: { '@id': `${SITE_URL}/#organization` },
        ...(project.links.live && { url: project.links.live }),
      },
      breadcrumbs([
        crumbHome,
        { name: t('seo.breadcrumbs.projects'), path: pathFor('projects', lang) },
        { name: project.title, path: pathFor('project', lang, params) },
      ])
    );
  } else if (name === 'agents') {
    title = t('seo.agents.title');
    description = t('seo.agents.description');
    schemas.push(
      serviceSchema(t('agents.eyebrow.business'), description, lang),
      faqPage(t('agents.faqs')),
      breadcrumbs([crumbHome, { name: t('seo.breadcrumbs.agents'), path: pathFor('agents', lang) }])
    );
  } else if (name === 'service' && params.service) {
    title = t(`seo.services.${params.service}.title`);
    description = t(`seo.services.${params.service}.description`);
    const serviceName = t(`services.items.${params.service}.title`);
    schemas.push(
      serviceSchema(serviceName, description, lang),
      faqPage(t(`servicePages.${params.service}.faqs`)),
      breadcrumbs([
        crumbHome,
        { name: t('seo.breadcrumbs.services'), path: `${pathFor('home', lang)}#services` },
        { name: serviceName, path: pathFor('service', lang, params) },
      ])
    );
  } else {
    found = false;
  }

  const alternates = found
    ? Object.fromEntries(LANGUAGES.map((code) => [code, absolute(pathFor(name, code, params))]))
    : {};

  return {
    lang,
    title,
    description,
    image,
    found,
    canonical: found ? absolute(pathFor(name, lang, params)) : null,
    alternates,
    jsonLd: { '@context': 'https://schema.org', '@graph': schemas },
  };
};

// Tags del <head> como lista de { tag, attrs } (o { tag: 'title' | 'script', text }).
export const headTags = (head) => {
  const tags = [
    { tag: 'title', text: head.title },
    { tag: 'meta', attrs: { name: 'description', content: head.description } },
    { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
    { tag: 'meta', attrs: { property: 'og:site_name', content: site.name } },
    { tag: 'meta', attrs: { property: 'og:title', content: head.title } },
    { tag: 'meta', attrs: { property: 'og:description', content: head.description } },
    { tag: 'meta', attrs: { property: 'og:image', content: head.image } },
    { tag: 'meta', attrs: { property: 'og:locale', content: OG_LOCALES[head.lang] } },
    { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
  ];

  if (!head.found) {
    tags.push({ tag: 'meta', attrs: { name: 'robots', content: 'noindex' } });
  } else if (head.canonical) {
    tags.push({ tag: 'link', attrs: { rel: 'canonical', href: head.canonical } });
    tags.push({ tag: 'meta', attrs: { property: 'og:url', content: head.canonical } });
    if (SITE_URL) {
      for (const [code, href] of Object.entries(head.alternates)) {
        tags.push({ tag: 'link', attrs: { rel: 'alternate', hreflang: code, href } });
      }
      tags.push({ tag: 'link', attrs: { rel: 'alternate', hreflang: 'x-default', href: head.alternates[DEFAULT_LANG] } });
    }
  }

  tags.push({ tag: 'script', attrs: { type: 'application/ld+json' }, text: JSON.stringify(head.jsonLd) });
  return tags;
};

// Todas las URLs públicas del sitio, en ambos idiomas (para prerender y sitemap).
export const allPaths = () =>
  LANGUAGES.flatMap((lang) => [
    pathFor('home', lang),
    pathFor('projects', lang),
    pathFor('agents', lang),
    ...Object.keys(serviceSlugs).map((service) => pathFor('service', lang, { service })),
    ...projects.map((project) => pathFor('project', lang, { slug: project.slug })),
  ]);
