import React, { useContext, useEffect } from 'react';
import { Container, Row, Col, Card, Badge, Stack } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';

const projectsData = [
  {
    id: 3,
    title: "AI Language Academy Engine",
    dev: {
      imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1000&auto=format&fit=crop", 
      description: "Plataforma educativa con generación de ejercicios mediante LLMs. Arquitectura de microservicios y streaming de respuestas.",
      tags: ["React", "Node.js", "OpenAI API", "Redis"],
      highlight: "stream_processor.ts",
      repo: "https://github.com/rubenyanes94/ai-academy",
      url: "https://academy-demo.com", 
      actionLabel: "Visitar Sitio Web" 
    }
  },
  {
    id: 4,
    title: "HIDOC Medical Platform",
    dev: {
      imageUrl: "https://ik.imagekit.io/n9udqzkqr/hero%20-%20HIDOC.png",
      description: "Sistema de gestión de citas médicas con encriptación de datos sensibles y panel administrativo complejo.",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      highlight: "auth_middleware.py",
      repo: "https://github.com/rubenyanes94/hidoc-platform",
      url: "https://hidoc.vercel.app", 
      actionLabel: "Abrir App"
    }
  },
  {
    id: 5,
    title: "CLEVAC E-commerce API",
    dev: {
      imageUrl:"https://ik.imagekit.io/n9udqzkqr/hero%20-%20clevac.png",
      description: "Backend robusto para tienda de ropa. Pasarela de pagos integrada, gestión de webhooks y optimización de consultas SQL.",
      tags: ["Python", "Django", "Stripe API", "AWS S3"],
      highlight: "payment_webhook.py",
      repo: "https://github.com/rubenyanes94/clevac-shop",
      url: "https://clevac.store",
      actionLabel: "Ver Tienda"
    }
  },
  {
    id: 6,
    title: "La Tienda de Los Muebles - Optimized landing page",
    dev: {
      imageUrl: "https://ik.imagekit.io/n9udqzkqr/crads%20-%20TDLM.png",
      description: "High-performance landing page focused on Core Web Vitals and conversion optimization.",
      tags: ["Socket.io", "Express", "MongoDB", "Bootstrap"],
      highlight: "match_socket_hub.js",
      repo: "https://github.com/rubenyanes94/padel-tracker",
      url: "https://www.latiendadelosmuebles.com/",
      actionLabel: "Ver Marcador"
    }
  },
  {
    id: 1,
    title: "Inventory Intelligence",
    analyst: {
      description: "Dashboard estratégico para reducción de merma y optimización de stock. Análisis de rotación de inventario.",
      tags: ["Power BI", "DAX", "Supply Chain", "SQL"],
      highlight: "↓ 15% Stock Cost",
      url: "https://powerbi.com/...", 
      actionLabel: "Ver Reporte"
    }
  },
  {
    id: 2,
    title: "Customer 360 Platform",
    analyst: {
      description: "Segmentación de clientes basada en comportamiento de compra (RFM Analysis) para campañas dirigidas.",
      tags: ["Tableau", "Customer Segmentation", "Python Pandas"],
      highlight: "+20% Retention Rate",
      url: "https://tableau.com/...",
      actionLabel: "Ver Dashboard"
    }
  }
];

const ProjectCard = ({ project, isDevMode }) => {
  const content = isDevMode ? project.dev : project.analyst;
  if (!content) return null;

  return (
    <Card className={`h-100 border-0 project-card shadow-hover ${isDevMode ? 'bg-dark-card text-light' : 'bg-white text-dark shadow-sm'}`}>
      
      {isDevMode && content.imageUrl && (
        <div className="img-container">
          <Card.Img variant="top" src={content.imageUrl} className="project-card-img" />
          <div className="img-overlay"></div>
        </div>
      )}

      <Card.Body className="d-flex flex-column p-4">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <h3 className={`h5 fw-bold mb-0 ${isDevMode ? 'font-monospace text-brand' : 'text-indigo'}`}>
            {project.title}
          </h3>
          <Badge pill className={isDevMode ? 'bg-outline-brand font-monospace' : 'bg-indigo-light text-indigo'} style={{fontSize: '0.7rem'}}>
            {content.highlight}
          </Badge>
        </div>

        <Card.Text className={`small mb-4 ${isDevMode ? 'font-monospace opacity-75' : 'text-muted'}`}>
          {content.description}
        </Card.Text>

        <Stack direction="horizontal" gap={2} className="flex-wrap mb-4">
          {content.tags.map((tag, idx) => (
            <Badge key={idx} bg="none" className={`px-2 py-1 border ${isDevMode ? 'border-secondary text-secondary font-monospace' : 'border-light-subtle text-muted'}`} style={{ fontSize: '0.65rem' }}>
              {tag}
            </Badge>
          ))}
        </Stack>

        <div className="mt-auto d-flex align-items-center justify-content-between">
          <a href={content.url} target="_blank" rel="noreferrer" className={`btn btn-sm px-4 fw-bold shadow-sm ${isDevMode ? 'btn-brand-terminal' : 'btn-indigo'}`}>
            {content.actionLabel}
          </a>
          
          {isDevMode && content.repo && (
            <a href={content.repo} target="_blank" rel="noreferrer" className="github-link" title="Ver código en GitHub">
              <i className="fab fa-github fa-lg"></i>
              <span className="ms-2 font-monospace small">{`{ code }`}</span>
            </a>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

const ProjectsList = () => {
  const { isDevMode } = useContext(ThemeContext);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <section id="projects" className={`py-5 transition-all ${isDevMode ? 'bg-dark-obsidian' : 'bg-light-gray'}`}>
      <style>{`
        .text-brand { color: #00d4ff; } 
        .bg-dark-obsidian { background-color: #0d1117; }
        .bg-dark-card { background-color: #161b22; border: 1px solid #30363d !important; }
        .bg-outline-brand { border: 1px solid #00d4ff; color: #00d4ff; background: transparent; }
        
        .btn-brand-terminal { background: #00d4ff; color: #0d1117; border: none; transition: 0.3s; }
        .btn-brand-terminal:hover { background: #00b8e6; transform: scale(1.05); }
        
        .text-indigo { color: #4f46e5; }
        .bg-indigo-light { background-color: #eef2ff; }
        .btn-indigo { background-color: #4f46e5; color: white; border: none; }
        .bg-light-gray { background-color: #f8fafc; }

        .project-card { overflow: hidden; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .img-container { position: relative; overflow: hidden; height: 160px; }
        .project-card-img { height: 100%; object-fit: cover; transition: 0.5s ease; }
        .project-card:hover .project-card-img { transform: scale(1.1); }
        .img-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to bottom, transparent, rgba(22, 27, 34, 0.4)); }

        .github-link { color: #8b949e; text-decoration: none; transition: color 0.3s; display: flex; align-items: center; }
        .github-link:hover { color: #00d4ff; }

        .blinking-cursor { border-left: 2px solid #00d4ff; margin-left: 5px; animation: blink 1s step-end infinite; }
        @keyframes blink { 50% { opacity: 0; } }
        .transition-all { transition: all 0.5s ease; }
      `}</style>

      <Container>
        <div className="mb-5">
          <h6 className={`fw-bold mb-2 ${isDevMode ? 'text-brand font-monospace' : 'text-indigo'}`}>
            {isDevMode ? '~/projects' : 'Portfolio'}
          </h6>
          <h2 className={`display-5 fw-bold ${isDevMode ? 'text-white font-monospace' : 'text-dark'}`}>
            {isDevMode ? 'ls -la ./featured' : 'Proyectos Destacados'}
            {isDevMode && <span className="blinking-cursor"></span>}
          </h2>
        </div>

        <Row className="g-4">
          {projectsData.map((project) => (
            <Col key={project.id} md={6} lg={4}>
              <ProjectCard project={project} isDevMode={isDevMode} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProjectsList;