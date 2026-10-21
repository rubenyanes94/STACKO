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
 *   category: 'ai',                   // una de las claves de `categories`
 *   featured: true,                   // aparece en la home
 *   media: {
 *     cover: 'https://.../cover.png',  // imagen de la tarjeta
 *     gallery: ['https://...'],        // capturas del caso de estudio
 *     video: {                         // opcional, se muestra antes de la galería
 *       type: 'youtube',               // 'youtube' | 'vimeo' | 'file'
 *       src: 'dQw4w9WgXcQ',            // youtube/vimeo: ID del video. file: URL a .mp4/.webm
 *       poster: 'https://...',         // opcional (obligatorio recomendado para 'file')
 *     },
 *   },
 *   links: { live: 'https://...', repo: 'https://github.com/...' },  // ambos opcionales
 *   tech: { summary, highlights: [], stack: [] },                     // vista DEV
 *   business: { summary, challenge, solution, outcomes: [], tags: [] }, // vista BUSINESS
 * }
 *
 * Los videos tipo 'file' pueden vivir en ImageKit (igual que las imágenes) o en /public/videos.
 */

export const categories = {
  ai: 'AI & Automation',
  saas: 'SaaS Platform',
  ecommerce: 'E-commerce',
  web: 'Web Performance',
};

export const projects = [
  {
    slug: 'aks-academy',
    title: 'AKS Academy',
    client: 'AKS Academia',
    year: 2025,
    category: 'ai',
    featured: true,
    media: {
      cover: 'https://ik.imagekit.io/n9udqzkqr/Aks.png',
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
    tech: {
      summary: 'High-conversion landing page with a custom AI Sales Assistant that qualifies leads automatically.',
      highlights: [
        'LLM-powered sales assistant integrated with the OpenAI API',
        'Custom prompt engineering for lead nurturing and FAQ handling',
        'Instant responses, available 24/7 without human operators',
      ],
      stack: ['React', 'OpenAI API', 'Prompt Engineering', 'Node.js', 'Tailwind CSS'],
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
  {
    slug: 'hidoc',
    title: 'HIDOC Medical Booking',
    client: 'HIDOC',
    year: 2025,
    category: 'saas',
    featured: true,
    media: {
      cover: 'https://ik.imagekit.io/n9udqzkqr/hero%20-%20HIDOC.png',
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
    },
    tech: {
      summary: 'Full-stack medical booking platform with role-based access control and secure data handling.',
      highlights: [
        'RESTful API in Python (Flask) with JWT authentication',
        'Relational data model on PostgreSQL via SQLAlchemy',
        'Role-based dashboards for patients, doctors and admins',
      ],
      stack: ['Python', 'Flask', 'React', 'PostgreSQL', 'SQLAlchemy', 'JWT'],
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
  {
    slug: 'clevac-store',
    title: 'CLEVAC Store',
    client: 'CLEVAC',
    year: 2024,
    category: 'ecommerce',
    featured: true,
    media: {
      cover: 'https://ik.imagekit.io/n9udqzkqr/hero%20-%20clevac.png',
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
    tech: {
      summary: 'Feature-rich fashion e-commerce built with React and global state management.',
      highlights: [
        'Redux store for cart and user sessions',
        'Dynamic product filtering and persistent cart',
        'Streamlined checkout flow with API integration',
      ],
      stack: ['React', 'Redux', 'Node.js', 'REST API', 'Tailwind CSS'],
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
  {
    slug: 'la-tienda-de-los-muebles',
    title: 'La Tienda de los Muebles',
    client: 'La Tienda de los Muebles',
    year: 2024,
    category: 'web',
    featured: true,
    media: {
      cover: 'https://ik.imagekit.io/n9udqzkqr/hero%20-TDLM.png',
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
    tech: {
      summary: 'High-performance landing page engineered around Core Web Vitals and conversion.',
      highlights: [
        'Semantic HTML5, modern CSS3 and lean vanilla JavaScript',
        'Lazy loading, WebP compression and asset minification',
        '95+ Lighthouse performance score',
      ],
      stack: ['JavaScript', 'HTML5', 'CSS3', 'Performance', 'SEO'],
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
];

export const featuredProjects = projects.filter((project) => project.featured);

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug);
