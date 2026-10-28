/**
 * Fuente única de verdad del portafolio.
 *
 * Para añadir un proyecto nuevo, agrega un objeto al array `projects`:
 *
 * {
 *   slug: 'mi-proyecto',              // URL: /projects/mi-proyecto (único, sin espacios)
 *   title: 'Mi Proyecto',
 *   client: 'Nombre del cliente',     // texto, o { en: '…', es: '…' } si debe traducirse
 *   year: 2026,
 *   category: 'ai',                   // una de `categoryKeys` (los nombres están en i18n/translations.js)
 *   featured: true,                   // aparece en la home (el primero destacado se muestra en grande)
 *   accent: '#2563eb',                // color de marca del proyecto: fondo de la portada de la card
 *   stack: ['React', 'Python'],       // tecnologías (no se traducen)
 *   media: {
 *     cover: 'https://.../cover.png',  // captura principal (dentro de un navegador). Vacío '' = portada con marcador de marca
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
  // ── Proyectos principales (los más complejos): van primero para que protagonicen la home ──────────────────
  // Mientras `media.cover` esté vacío la portada muestra un marcador con la marca del proyecto (ProjectCover.jsx).
  // Capturas pendientes: usa siempre datos de demo, nunca cuentas ni conversaciones reales.
  {
    slug: 'espikin',
    title: 'Espikin',
    client: { en: 'In-house product', es: 'Producto propio' },
    year: 2026,
    category: 'ai',
    featured: true,
    accent: '#6d3be6', // morado de marca (frontend/src/index.css del repo)
    stack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'FastAPI',
      'PostgreSQL + pgvector',
      'Redis',
      'LangGraph',
      'LangChain',
      'NVIDIA NIM / Ollama',
      'Docker',
    ],
    media: {
      // Capturas sugeridas: cover "/" (landing) · hover "/chat" (tutor corrigiendo un error) ·
      // gallery "/classroom", "/progress", "/gerencia/ingresos", "/gerencia/retencion", "/suscripcion" ·
      // mobile "/dashboard" a 390×844 (la app es PWA). Datos demo: `python -m app.scripts.seed_demo_analytics`.
      cover: '', // TODO ImageKit
      hover: '', // TODO ImageKit
      gallery: [], // TODO ImageKit
      video: null,
    },
    links: {
      // TODO: URL pública de producción (no aparece en el repo).
      repo: 'https://github.com/rubenyanes94/ENGLIA-',
      label: 'espikin · plataforma',
    },
    content: {
      en: {
        tech: {
          summary:
            'AI-tutored English academy aligned to the CEFR (A1–C2), with a real billing stack for the Venezuelan market and a full management console.',
          highlights: [
            'AI tutor built with LangGraph and LangChain over an OpenAI-compatible endpoint (Ollama in dev, NVIDIA NIM or vLLM in production), with short-term memory in Redis, permanent history in PostgreSQL and summary embeddings in pgvector',
            'Full CEFR curriculum: narrated lessons (Piper and Magpie TTS), exercises and module exams, placement test, pronunciation practice, sentence game and flash-course library',
            'Local-market payments: Pago Móvil priced from the official BCV exchange rate, scraped and stored automatically, plus card, PayPal and Binance Pay integrations and a manual payment-review queue',
            'Management console with revenue, retention, engagement, user journey and customer views, lifecycle email campaigns via Resend, and per-call LLM monitoring (latency, tokens, errors)',
          ],
        },
        business: {
          summary:
            'An English academy that teaches Spanish speakers with an AI tutor available at any hour, and that charges the way Venezuelans actually pay.',
          challenge:
            'Spanish speakers repeat the same predictable mistakes, human tutoring is expensive, and most learning platforms only charge by international card, leaving out a large part of the local market.',
          solution:
            'We built a tutor that corrects errors in order of impact, a structured path from A1 to C2 that ends in a certificate, and a billing system that accepts Pago Móvil in bolívares at the official BCV rate alongside international methods.',
          outcomes: [
            'A personal tutor available 24/7 at the price of a monthly subscription',
            'A clear A1–C2 path with placement test, exams and evidence-based progress',
            'Local payments in bolívares with automatic exchange rate and manual verification',
            'A management console that shows revenue, retention and system health in one place',
          ],
          tags: ['EdTech', 'Conversational AI', 'Subscriptions', 'Local Payments'],
        },
      },
      es: {
        tech: {
          summary:
            'Academia de inglés con tutores de IA alineada al MCER (A1–C2), con facturación pensada para el mercado venezolano y una consola de gerencia completa.',
          highlights: [
            'Tutor de IA con LangGraph y LangChain sobre un endpoint compatible con OpenAI (Ollama en desarrollo, NVIDIA NIM o vLLM en producción), con memoria de corto plazo en Redis, historial permanente en PostgreSQL y embeddings de resúmenes en pgvector',
            'Currículo MCER completo: lecciones narradas (TTS Piper y Magpie), ejercicios y exámenes por módulo, test de nivel, práctica de pronunciación, juego de oraciones y biblioteca de cursos flash',
            'Pagos para el mercado local: Pago Móvil calculado con la tasa oficial del BCV (leída y guardada automáticamente), más integraciones de tarjeta, PayPal y Binance Pay y una cola de revisión manual de pagos',
            'Consola de gerencia con ingresos, retención, consumo, recorrido del usuario y clientes, campañas de correo por ciclo de vida con Resend y monitoreo de cada llamada al LLM (latencia, tokens y errores)',
          ],
        },
        business: {
          summary:
            'Una academia de inglés que enseña a hispanohablantes con un tutor de IA disponible a cualquier hora y que cobra como realmente paga el venezolano.',
          challenge:
            'Los hispanohablantes cometen los mismos errores previsibles, un tutor humano es caro y la mayoría de las plataformas solo cobran con tarjeta internacional, dejando fuera a gran parte del mercado local.',
          solution:
            'Construimos un tutor que corrige los errores por orden de impacto, una ruta estructurada de A1 a C2 que termina en certificado y un sistema de cobro que acepta Pago Móvil en bolívares a la tasa oficial del BCV junto a métodos internacionales.',
          outcomes: [
            'Un tutor personal disponible 24/7 al precio de una suscripción mensual',
            'Una ruta clara de A1 a C2 con test de nivel, exámenes y progreso basado en evidencia',
            'Pagos locales en bolívares con tasa de cambio automática y verificación manual',
            'Una consola de gerencia que muestra ingresos, retención y salud del sistema en un solo lugar',
          ],
          tags: ['EdTech', 'IA conversacional', 'Suscripciones', 'Pagos locales'],
        },
      },
    },
  },
  {
    // Veracidad: el README del repo dice "multi-tenant", pero el código de tenant está desactivado
    // (migración `eliminated_tenants`), por eso aquí NO se afirma multi-tenant. Si lo reactivas, añádelo.
    slug: 'gymsaas',
    title: 'GYMSAAS', // TODO: nombre comercial si lo tendrá
    client: { en: 'In-house product', es: 'Producto propio' },
    year: 2026,
    category: 'saas',
    featured: true,
    accent: '#dc2626', // rojo dominante en los componentes del frontend (red-600)
    stack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'FastAPI',
      'SQLAlchemy (async)',
      'PostgreSQL',
      'Alembic',
      'JWT',
      'Resend',
    ],
    media: {
      // Capturas sugeridas: cover "/admin/horarios" (calendario de clases) · hover "/admin/finanzas" ·
      // gallery "/admin/programacion", "/admin/caja", "/admin/cold-plunge", "/client/prs" ·
      // mobile "/client/reservas" a 390×844.
      cover: '', // TODO ImageKit
      hover: '', // TODO ImageKit
      gallery: [], // TODO ImageKit
      video: null,
    },
    links: {
      repo: 'https://github.com/rubenyanes94/GYMSAAS',
      label: 'gymsaas · plataforma',
    },
    content: {
      en: {
        tech: {
          summary:
            'Management platform for gyms and CrossFit boxes: class scheduling, bookings, workout programming, amenities and finances in one system.',
          highlights: [
            'Role-based access (owner, staff, coach, athlete, guest) with granular staff permissions, JWT authentication and temporary-password onboarding by email',
            'Class engine with daily, weekly and monthly calendar views, recurring classes, bookings and cancellations, roster, check-in and class closing, all on Caracas time',
            'Workout programming by track (CrossFit, weightlifting, gymnastics, endurance, HYROX) and format (For Time, AMRAP, EMOM, Tabata), with RX/Scaled results and personal records per movement',
            'Bookable amenities (cold plunge, sauna, workspace) with generated time slots, membership-validated gym access, a cash register and a finance dashboard with PDF reports',
          ],
        },
        business: {
          summary:
            'One platform that replaces spreadsheets and chat groups to run the daily operation of a gym.',
          challenge:
            'Boxes managed class spots, memberships and payments across chats and spreadsheets, which caused overbooking, unclear access control and no visibility into income.',
          solution:
            'We built a single system where athletes book classes and amenities, coaches program the workout of the day, and owners control access, payments and cash from one dashboard.',
          outcomes: [
            'Online class and amenity booking with automatic availability',
            'Daily workout programming and personal-record tracking for athletes',
            'Membership-based access control at the door',
            'Cash and finance tracking with local payment methods (Pago Móvil, Zelle, cash)',
          ],
          tags: ['Fitness', 'SaaS', 'Bookings', 'Operations'],
        },
      },
      es: {
        tech: {
          summary:
            'Plataforma de gestión para gimnasios y boxes de CrossFit: horarios de clases, reservas, programación de entrenamientos, amenidades y finanzas en un solo sistema.',
          highlights: [
            'Acceso por roles (dueño, staff, coach, atleta, invitado) con permisos granulares para el staff, autenticación JWT y alta con contraseña temporal enviada por correo',
            'Motor de clases con calendario en vistas diaria, semanal y mensual, clases recurrentes, reservas y cancelaciones, lista de asistentes, check-in y cierre de clase, todo en hora de Caracas',
            'Programación de entrenamientos por pista (CrossFit, halterofilia, gimnásticos, resistencia, HYROX) y formato (For Time, AMRAP, EMOM, Tabata), con resultados RX/Scaled y récords personales por movimiento',
            'Amenidades reservables (cold plunge, sauna, workspace) con horarios generados, acceso al gimnasio validado por membresía, caja y panel de finanzas con reportes en PDF',
          ],
        },
        business: {
          summary:
            'Una sola plataforma que reemplaza hojas de cálculo y grupos de chat para operar el día a día de un gimnasio.',
          challenge:
            'Los boxes gestionaban cupos, membresías y pagos entre chats y hojas de cálculo, lo que provocaba sobrecupo, un control de acceso poco claro y cero visibilidad de los ingresos.',
          solution:
            'Construimos un sistema donde los atletas reservan clases y amenidades, los coaches programan el entrenamiento del día y los dueños controlan acceso, pagos y caja desde un solo panel.',
          outcomes: [
            'Reserva en línea de clases y amenidades con disponibilidad automática',
            'Programación diaria del entrenamiento y seguimiento de récords personales para los atletas',
            'Control de acceso en la puerta según la membresía',
            'Control de caja y finanzas con métodos de pago locales (Pago Móvil, Zelle, efectivo)',
          ],
          tags: ['Fitness', 'SaaS', 'Reservas', 'Operaciones'],
        },
      },
    },
  },
  {
    // ⚠️ Cliente real y datos de salud: el cliente va anonimizado y NO se enlaza el repo (público, nombra al centro).
    // No nombres al centro médico sin autorización escrita. Capturas solo con `python -m scripts.demo_data`.
    // El proyecto está en fases 0–3, por eso el texto no afirma resultados en producción.
    slug: 'atencion-al-paciente',
    title: 'Atención al Paciente',
    client: { en: 'Private medical center', es: 'Centro médico privado' },
    year: 2026,
    category: 'saas',
    featured: true,
    accent: '#0e7490', // el producto es monocromo (#09090b); este es el color de la portada en STACKO
    stack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'TanStack Query',
      'FastAPI',
      'SQLAlchemy',
      'PostgreSQL',
      'WhatsApp Cloud API',
      'Google Gemini',
      'Vercel',
    ],
    media: {
      // Capturas sugeridas: cover "/conversaciones" (bandeja) · hover "/paneles" (KPIs) ·
      // gallery "/casos/:id", diálogo de cierre con encuesta, "/informes", simulador, copiloto.
      cover: '', // TODO ImageKit
      hover: '', // TODO ImageKit
      gallery: [], // TODO ImageKit
      video: null,
    },
    links: {
      label: 'atención al paciente · consola',
    },
    content: {
      en: {
        tech: {
          summary:
            'Patient-care console for a medical center: a WhatsApp inbox with case tracking, a first-line bot with urgency detection, and KPI dashboards computed from an immutable event log.',
          highlights: [
            'WhatsApp Cloud API integration with signature-verified webhook, idempotent message handling, 24-hour window rules and approved templates',
            'Rule-based urgency classifier tuned to Venezuelan Spanish that stops the bot, flags the case and moves it to the top of the queue',
            'Every case state change is recorded in an event log; response time, SLA, first-contact resolution, CSAT, NPS, abandonment and bot containment are all derived from it in business minutes',
            'Gemini copilot (summary, suggested reply, rewrite) that pseudonymizes names, ID numbers, phones and emails before any text leaves the server',
            'Engineering discipline: 60+ automated backend tests, GitHub Actions CI that applies and reverts migrations, and API types generated from the OpenAPI schema',
          ],
        },
        business: {
          summary:
            'Turns patient WhatsApp conversations into managed cases with measurable response times and satisfaction.',
          challenge:
            'Patient messages arrived through WhatsApp with no queue, no priority for emergencies and no way to measure how fast the team answered or how patients felt about it.',
          solution:
            'We built a shared inbox where every conversation becomes a tracked case, urgent messages jump the queue automatically, and supervisors see service levels and satisfaction in live dashboards.',
          outcomes: [
            'A shared inbox with queue, assignment and transfer between areas',
            'Emergency keywords detected automatically and escalated to a human first',
            'Dashboards for response time, SLA, CSAT and NPS defined in an auditable KPI dictionary',
            'Agents assisted by an AI copilot without exposing patient data',
          ],
          tags: ['HealthTech', 'Customer Care', 'WhatsApp', 'Data Privacy'],
        },
      },
      es: {
        tech: {
          summary:
            'Consola de atención al paciente para un centro médico: bandeja de WhatsApp con seguimiento de casos, bot de primera línea con detección de urgencias e indicadores calculados desde un registro de eventos inmutable.',
          highlights: [
            'Integración con la WhatsApp Cloud API con webhook de firma verificada, manejo idempotente de mensajes, regla de ventana de 24 horas y plantillas aprobadas',
            'Clasificador de urgencias por reglas, ajustado al español venezolano, que detiene el bot, marca el caso y lo sube al primer lugar de la cola',
            'Cada cambio de estado de un caso queda en un registro de eventos; de ahí salen tiempo de respuesta, SLA, resolución al primer contacto, CSAT, NPS, abandono y contención del bot, medidos en minutos hábiles',
            'Copiloto con Gemini (resumen, sugerencia de respuesta y mejora de redacción) que seudonimiza nombres, cédulas, teléfonos y correos antes de que cualquier texto salga del servidor',
            'Disciplina de ingeniería: más de 60 pruebas automáticas en el backend, CI en GitHub Actions que aplica y revierte las migraciones, y tipos de la API generados desde el esquema OpenAPI',
          ],
        },
        business: {
          summary:
            'Convierte las conversaciones de WhatsApp de los pacientes en casos gestionados, con tiempos de respuesta y satisfacción medibles.',
          challenge:
            'Los mensajes de los pacientes llegaban por WhatsApp sin cola, sin prioridad para emergencias y sin forma de medir qué tan rápido respondía el equipo ni cómo se sentían los pacientes.',
          solution:
            'Construimos una bandeja compartida donde cada conversación es un caso con seguimiento, los mensajes urgentes saltan la cola automáticamente y los supervisores ven niveles de servicio y satisfacción en paneles en vivo.',
          outcomes: [
            'Bandeja compartida con cola, asignación y transferencia entre áreas',
            'Palabras de emergencia detectadas automáticamente y escaladas primero a una persona',
            'Paneles de tiempo de respuesta, SLA, CSAT y NPS con definiciones auditables en un diccionario de indicadores',
            'Agentes asistidos por un copiloto de IA sin exponer datos del paciente',
          ],
          tags: ['HealthTech', 'Atención al cliente', 'WhatsApp', 'Privacidad de datos'],
        },
      },
    },
  },
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
    client: typeof project.client === 'object' ? (project.client[lang] ?? project.client.en) : project.client,
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
