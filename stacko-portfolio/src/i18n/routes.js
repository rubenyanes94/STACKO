/**
 * Mapa de URLs por idioma. El español es el mercado principal y vive en la raíz; el inglés bajo /en.
 * Cada página tiene un nombre (`home`, `projects`…) y una URL por idioma con slugs traducidos (mejor SEO).
 */
export const LANGUAGES = ['es', 'en'];
export const DEFAULT_LANG = 'es';

export const routes = {
  home: { es: '/', en: '/en' },
  projects: { es: '/proyectos', en: '/en/projects' },
  project: { es: '/proyectos/:slug', en: '/en/projects/:slug' },
  agents: { es: '/agentes-ia', en: '/en/ai-agents' },
  service: { es: '/servicios/:service', en: '/en/services/:service' },
};

// Slug de cada servicio por idioma (el id interno es el de data/services.js)
export const serviceSlugs = {
  automation: { es: 'automatizacion-de-procesos', en: 'process-automation' },
  sales: { es: 'automatizacion-de-ventas', en: 'sales-automation' },
  software: { es: 'desarrollo-de-software', en: 'software-development' },
  data: { es: 'inteligencia-de-negocios', en: 'business-intelligence' },
};

export const langFromPath = (pathname) => (pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'es');

const fill = (pattern, params = {}) => pattern.replace(/:(\w+)/g, (_, key) => params[key] ?? '');

// Para servicios se pasa el id interno ({ service: 'automation' }) y se traduce al slug del idioma.
export const pathFor = (name, lang, params = {}) => {
  const localized = params.service ? { ...params, service: serviceSlugs[params.service]?.[lang] } : params;
  return fill(routes[name][lang], localized);
};

export const serviceIdFromSlug = (slug, lang) =>
  Object.keys(serviceSlugs).find((id) => serviceSlugs[id][lang] === slug);

// Identifica qué página es una URL, para poder cambiar de idioma manteniendo la página.
export const matchPath = (pathname) => {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  const lang = langFromPath(clean);
  for (const [name, patterns] of Object.entries(routes)) {
    const regex = new RegExp(`^${patterns[lang].replace(/:(\w+)/g, '(?<$1>[^/]+)')}$`);
    const match = clean.match(regex);
    if (match) {
      const params = { ...match.groups };
      if (params.service) params.service = serviceIdFromSlug(params.service, lang);
      return { name, lang, params };
    }
  }
  return { name: null, lang, params: {} };
};
