/**
 * Fuente única de verdad del portafolio.
 *
 * Para añadir un proyecto nuevo, agrega un objeto al array `projects`:
 *
 * {
 *   slug: 'mi-proyecto',              // URL: /projects/mi-proyecto (único, sin espacios)
 *   title: 'Mi Proyecto',
 *   client: 'Nombre del cliente',
 *   year: 2026,
 *   category: 'ai',                   // una de `categoryKeys` (los nombres están en i18n/translations.js)
 *   featured: true,                   // aparece en la home (el primero destacado se muestra en grande)
 *   accent: '#2563eb',                // color de marca del proyecto: fondo de la portada de la card
 *   stack: ['React', 'Python'],       // tecnologías (no se traducen)
 *   media: {
 *     cover: 'https://.../cover.png',  // captura principal (se muestra dentro de un navegador)
 *     hover: 'https://...',            // opcional: pantalla que aparece al pasar el mouse
 *     mobile: 'https://...',           // opcional: captura móvil (se muestra en un teléfono)
 *     preview: 'https://.../clip.mp4', // opcional: clip corto sin sonido que se reproduce en hover
 *     gallery: ['https://...'],        // capturas del caso de estudio
 *     video: {                         // opcional: demo completa, se muestra antes de la galería
 *       type: 'youtube',               // 'youtube' | 'vimeo' | 'file'
 *       src: 'dQw4w9WgXcQ',            // youtube/vimeo: ID del video. file: URL a .mp4/.webm
 *       poster: 'https://...',         // opcional (recomendado para 'file')
 *     },
 *   },
 *   links: { live: 'https://...', repo: 'https://github.com/...' },  // ambos opcionales
 *   // links.label: texto opcional para la barra del navegador de la portada (si la URL no es presentable)
 *   content: {                         // textos por idioma
 *     en: { tech: { summary, highlights: [] }, business: { summary, challenge, solution, outcomes: [], tags: [] } },
 *     es: { ...misma estructura... },
 *   },
 * }
 *
 * Los videos tipo 'file' y los clips `preview` pueden vivir en ImageKit (igual que las imágenes) o en /public/videos.
 */

export const categoryKeys = ['ai', 'saas', 'ecommerce', 'web'];

export const projects = [
  {
    slug: 'aks-academy',
    title: 'AKS Academy',
    client: 'AKS Academia',
    year: 2025,
    category: 'ai',
    featured: true,
    accent: '#f97316',
    stack: ['React', 'OpenAI API', 'Prompt Engineering', 'Node.js', 'Tailwind CSS'],
    media: {
      cover: 'https://ik.imagekit.io/n9udqzkqr/Aks.png',
      hover: 'https://ik.imagekit.io/n9udqzkqr/akssss.png',
      gallery: [
        'https://ik.imagekit.io/n9udqzkqr/Aks.png',
        'https://ik.imagekit.io/n9udqzkqr/akssss.png',
        'https://ik.imagekit.io/n9udqzkqr/aksssssss.png',
        'https://ik.imagekit.io/n9udqzkqr/akss.png',
      ],
      video: null,
    },
    links: {
      live: 'https://www.aksakademia.com/',
      repo: 'https://github.com/rubenyanes94/AKS-ACADEMY',
    },
    content: {
      en: {
        tech: {
          summary: 'High-conversion landing page with a custom AI Sales Assistant that qualifies leads automatically.',
          highlights: [
            'LLM-powered sales assistant integrated with the OpenAI API',
            'Custom prompt engineering for lead nurturing and FAQ handling',
            'Instant responses, available 24/7 without human operators',
          ],
        },
        business: {
          summary: 'An education brand that sells around the clock thanks to an AI assistant that answers, qualifies and recommends.',
          challenge: 'Prospective students asked the same questions at all hours, and leads went cold before the sales team could reply.',
          solution: 'We designed a sales funnel with a conversational AI assistant that identifies each visitor’s goals in real time and recommends the right course instantly.',
          outcomes: [
            '24/7 automated first response to every lead',
            'Personalized course recommendations in seconds',
            'Sales team focused only on qualified prospects',
          ],
          tags: ['Conversational AI', 'Sales Funnel', 'EdTech', 'Lead Qualification'],
        },
      },
      es: {
        tech: {
          summary: 'Landing de alta conversión con un asistente de ventas con IA que califica leads de forma automática.',
          highlights: [
            'Asistente de ventas basado en LLM integrado con la API de OpenAI',
            'Prompt engineering a la medida para nutrir leads y responder preguntas frecuentes',
            'Respuestas instantáneas 24/7 sin operadores humanos',
          ],
        },
        business: {
          summary: 'Una marca educativa que vende a toda hora gracias a un asistente de IA que responde, califica y recomienda.',
          challenge: 'Los futuros alumnos hacían las mismas preguntas a cualquier hora y los leads se enfriaban antes de que el equipo de ventas pudiera responder.',
          solution: 'Diseñamos un embudo de ventas con un asistente conversacional de IA que identifica en tiempo real el objetivo de cada visitante y le recomienda el curso ideal al instante.',
          outcomes: [
            'Primera respuesta automática 24/7 a cada lead',
            'Recomendaciones de cursos personalizadas en segundos',
            'Equipo de ventas enfocado solo en prospectos calificados',
          ],
          tags: ['IA conversacional', 'Embudo de ventas', 'EdTech', 'Calificación de leads'],
        },
      },
    },
  },
  {
    slug: 'hidoc',
    title: 'HIDOC Medical Booking',
    client: 'HIDOC',
    year: 2025,
    category: 'saas',
    featured: true,
    accent: '#2563eb',
    stack: ['Python', 'Flask', 'React', 'PostgreSQL', 'SQLAlchemy', 'JWT'],
    media: {
      cover: 'https://ik.imagekit.io/n9udqzkqr/hero%20-%20HIDOC.png',
      hover: 'https://ik.imagekit.io/n9udqzkqr/Dashboard%20-%20HIDOC.png',
      gallery: [
        'https://ik.imagekit.io/n9udqzkqr/hero%20-%20HIDOC.png',
        'https://ik.imagekit.io/n9udqzkqr/Dashboard%20-%20HIDOC.png',
        'https://ik.imagekit.io/n9udqzkqr/docprofile%20-%20HIDOC.png',
        'https://ik.imagekit.io/n9udqzkqr/cita-mapa.png',
      ],
      video: null,
    },
    links: {
      live: 'https://sample-service-name-zo7b.onrender.com/',
      repo: 'https://github.com/rubenyanes94/HIDOC',
      label: 'hidoc · live demo',
    },
    content: {
      en: {
        tech: {
          summary: 'Full-stack medical booking platform with role-based access control and secure data handling.',
          highlights: [
            'RESTful API in Python (Flask) with JWT authentication',
            'Relational data model on PostgreSQL via SQLAlchemy',
            'Role-based dashboards for patients, doctors and admins',
          ],
        },
        business: {
          summary: 'A digital health platform that replaces phone calls and paperwork with online scheduling and centralized records.',
          challenge: 'Clinics managed appointments by phone and paper, causing double bookings, lost records and overloaded staff.',
          solution: 'We built a booking system where patients find doctors, book on a map-based flow and clinics manage everything from one dashboard.',
          outcomes: [
            'Self-service online booking for patients',
            'Centralized patient history for doctors',
            'Less administrative work for clinic staff',
          ],
          tags: ['HealthTech', 'SaaS', 'Workflow Automation', 'Data Security'],
        },
      },
      es: {
        tech: {
          summary: 'Plataforma full-stack de citas médicas con control de acceso por roles y manejo seguro de datos.',
          highlights: [
            'API REST en Python (Flask) con autenticación JWT',
            'Modelo de datos relacional en PostgreSQL con SQLAlchemy',
            'Paneles por rol para pacientes, médicos y administradores',
          ],
        },
        business: {
          summary: 'Una plataforma de salud digital que reemplaza llamadas y papeleo con agendamiento en línea e historias centralizadas.',
          challenge: 'Las clínicas gestionaban las citas por teléfono y en papel, lo que causaba citas duplicadas, historias perdidas y personal saturado.',
          solution: 'Construimos un sistema donde los pacientes encuentran médicos, reservan con un flujo basado en mapa y la clínica gestiona todo desde un solo panel.',
          outcomes: [
            'Reserva de citas en línea, sin intermediarios',
            'Historia del paciente centralizada para los médicos',
            'Menos trabajo administrativo para el personal',
          ],
          tags: ['HealthTech', 'SaaS', 'Automatización', 'Seguridad de datos'],
        },
      },
    },
  },
  {
    slug: 'clevac-store',
    title: 'CLEVAC Store',
    client: 'CLEVAC',
    year: 2024,
    category: 'ecommerce',
    featured: true,
    accent: '#9f1239',
    stack: ['React', 'Redux', 'Node.js', 'REST API', 'Tailwind CSS'],
    media: {
      cover: 'https://ik.imagekit.io/n9udqzkqr/hero%20-%20clevac.png',
      hover: 'https://ik.imagekit.io/n9udqzkqr/cards%20-%20clevac.png',
      gallery: [
        'https://ik.imagekit.io/n9udqzkqr/hero%20-%20clevac.png',
        'https://ik.imagekit.io/n9udqzkqr/modal%20-%20clevac.png',
        'https://ik.imagekit.io/n9udqzkqr/cards%20-%20clevac.png',
        'https://ik.imagekit.io/n9udqzkqr/clevac.png',
      ],
      video: null,
    },
    links: {
      live: 'https://www.clevac.store/',
      repo: 'https://github.com/rubenyanes94/CLEVAC-STORE',
    },
    content: {
      en: {
        tech: {
          summary: 'Feature-rich fashion e-commerce built with React and global state management.',
          highlights: [
            'Redux store for cart and user sessions',
            'Dynamic product filtering and persistent cart',
            'Streamlined checkout flow with API integration',
          ],
        },
        business: {
          summary: 'A modern online store for a fashion brand, designed to turn visitors into buyers on mobile.',
          challenge: 'The brand sold mainly through social media DMs, which didn’t scale and lost sales outside business hours.',
          solution: 'We launched a mobile-first store with an intuitive catalog, quick add-to-cart and a frictionless checkout.',
          outcomes: [
            'Catalog available 24/7 with a branded experience',
            'Faster path from product to purchase on mobile',
            'Foundation to scale sales beyond social media',
          ],
          tags: ['E-commerce UX', 'Mobile-first', 'Digital Branding', 'Conversion'],
        },
      },
      es: {
        tech: {
          summary: 'E-commerce de moda con React y manejo de estado global, lleno de funcionalidades.',
          highlights: [
            'Store de Redux para el carrito y las sesiones de usuario',
            'Filtrado dinámico de productos y carrito persistente',
            'Checkout simplificado con integración de API',
          ],
        },
        business: {
          summary: 'Una tienda online moderna para una marca de moda, diseñada para convertir visitantes en compradores desde el móvil.',
          challenge: 'La marca vendía sobre todo por mensajes directos en redes sociales, lo que no escalaba y hacía perder ventas fuera del horario laboral.',
          solution: 'Lanzamos una tienda mobile-first con un catálogo intuitivo, agregar al carrito en un toque y un checkout sin fricción.',
          outcomes: [
            'Catálogo disponible 24/7 con la experiencia de la marca',
            'Camino más corto del producto a la compra en el móvil',
            'Base para escalar las ventas más allá de las redes sociales',
          ],
          tags: ['UX e-commerce', 'Mobile-first', 'Branding digital', 'Conversión'],
        },
      },
    },
  },
  {
    slug: 'la-tienda-de-los-muebles',
    title: 'La Tienda de los Muebles',
    client: 'La Tienda de los Muebles',
    year: 2024,
    category: 'web',
    featured: true,
    accent: '#4d7c0f',
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Performance', 'SEO'],
    media: {
      cover: 'https://ik.imagekit.io/n9udqzkqr/hero%20-TDLM.png',
      hover: 'https://ik.imagekit.io/n9udqzkqr/carrousel%20-%20TDLM.png',
      mobile: 'https://ik.imagekit.io/n9udqzkqr/Mobile%20-%20TDLM.png',
      gallery: [
        'https://ik.imagekit.io/n9udqzkqr/hero%20-TDLM.png',
        'https://ik.imagekit.io/n9udqzkqr/carrousel%20-%20TDLM.png',
        'https://ik.imagekit.io/n9udqzkqr/form%20-%20TDLM.png',
        'https://ik.imagekit.io/n9udqzkqr/Mobile%20-%20TDLM.png',
      ],
      video: null,
    },
    links: {
      live: 'https://www.latiendadelosmuebles.com/',
      repo: 'https://github.com/rubenyanes94/Furniture-Store-Landing-Page-Optimized-for-Performance',
    },
    content: {
      en: {
        tech: {
          summary: 'High-performance landing page engineered around Core Web Vitals and conversion.',
          highlights: [
            'Semantic HTML5, modern CSS3 and lean vanilla JavaScript',
            'Lazy loading, WebP compression and asset minification',
            '95+ Lighthouse performance score',
          ],
        },
        business: {
          summary: 'A fast digital showroom that puts a furniture catalog in front of local buyers and captures leads.',
          challenge: 'The store depended on foot traffic and had no way to show its catalog or get found on Google.',
          solution: 'We built a lightning-fast, locally SEO-optimized site with clear category navigation and a lead capture form.',
          outcomes: [
            'Catalog visible online with near-instant load times',
            'Structure optimized for regional furniture searches',
            'Direct lead capture from the website',
          ],
          tags: ['Local SEO', 'UX Design', 'Lead Generation', 'Retail'],
        },
      },
      es: {
        tech: {
          summary: 'Landing de alto rendimiento diseñada en torno a los Core Web Vitals y la conversión.',
          highlights: [
            'HTML5 semántico, CSS3 moderno y JavaScript vanilla ligero',
            'Lazy loading, compresión WebP y minificación de recursos',
            'Puntuación de rendimiento en Lighthouse superior a 95',
          ],
        },
        business: {
          summary: 'Un showroom digital rápido que pone el catálogo de muebles frente a compradores locales y captura clientes potenciales.',
          challenge: 'La tienda dependía de las visitas en persona y no tenía cómo mostrar su catálogo ni aparecer en Google.',
          solution: 'Construimos un sitio ultrarrápido, optimizado para SEO local, con navegación clara por categorías y un formulario de captación.',
          outcomes: [
            'Catálogo visible en internet con carga casi instantánea',
            'Estructura optimizada para búsquedas regionales de muebles',
            'Captación directa de clientes desde la web',
          ],
          tags: ['SEO local', 'Diseño UX', 'Generación de leads', 'Retail'],
        },
      },
    },
  },
];

// Devuelve el proyecto con los textos del idioma activo (cae a inglés si falta la traducción).
export const localizeProject = (project, lang) => {
  const content = project.content[lang] ?? project.content.en;
  return {
    ...project,
    tech: { ...content.tech, stack: project.stack },
    business: content.business,
  };
};

export const getProjects = (lang) => projects.map((project) => localizeProject(project, lang));

export const getProjectBySlug = (slug, lang) => {
  const project = projects.find((item) => item.slug === slug);
  return project ? localizeProject(project, lang) : undefined;
};

export const projectDomain = (project) => {
  if (project.links.label) return project.links.label;
  try {
    return new URL(project.links.live).hostname.replace(/^www\./, '');
  } catch {
    return project.slug;
  }
};
