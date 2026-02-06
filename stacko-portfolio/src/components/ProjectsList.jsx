import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';
import ProjectCard from './ProjectCard';

// SIMULACIÓN DE DATA (Esto luego vendrá de tu Flask Backend)
const projectsData = [
  {
    id: 1,
    title: "Inventory Intelligence",
    dev: {
      description: "Sistema de gestión de inventario con predicción de stock. Backend en Flask con SQLAlchemy y tareas asíncronas con Celery.",
      tags: ["Python", "Flask", "PostgreSQL", "Docker"],
      highlight: "prediction_engine.py",
      link: "https://github.com/rubenyanes94/tu-repo",
      demo: "https://tu-demo.com"
    },
    analyst: {
      description: "Dashboard estratégico para reducción de merma y optimización de stock. Identificación de productos 'hueso' y rotación.",
      tags: ["Power BI", "DAX", "Supply Chain", "SQL"],
      highlight: "↓ 15% Stock Cost",
      link: "https://powerbi.com/...", // Link a tu dashboard
    }
  },
  {
    id: 2,
    title: "Customer 360 Platform",
    dev: {
      description: "SPA desarrollada en React consumiendo API REST. Implementación de JWT Auth y manejo de estado global con Context API.",
      tags: ["React", "Bootstrap", "JWT", "Axios"],
      highlight: "UserContext.jsx",
      link: "https://github.com/rubenyanes94/tu-repo-2",
    },
    analyst: {
      description: "Segmentación de clientes basada en comportamiento de compra (RFM Analysis) para campañas de marketing dirigidas.",
      tags: ["Tableau", "Customer Segmentation", "Python Pandas"],
      highlight: "+20% Retention Rate",
      link: "https://tableau.com/...",
    }
  },
  // Añade más proyectos aquí
];

const ProjectsList = () => {
  const { isDevMode } = useContext(ThemeContext);

  return (
    <section 
      id="projects" 
      className={` justify-content-center py-5 transition-colors ${isDevMode ? 'bg-dark' : 'bg-light'}`}
      style={{ minHeight: '50vh', transition: 'background-color 0.5s ease' }}
    >
    <container>
        <div className="mb-5">
            <h6 className={`fw-bold ${isDevMode ? 'text-brand font-monospace' : 'text-indigo text-uppercase spacing-2'}`}>
                {isDevMode ? 'root/projects/' : 'Portfolio'}
            </h6>
            <h2 className={`display-5 fw-bold ${isDevMode ? 'text-white font-monospace' : 'text-dark'}`}>
                {isDevMode ? 'ls -la ./repos' : 'Featured Case Studies'}
                <span className={isDevMode ? 'text-brand blinking-cursor' : 'text-indigo'}>.</span>
            </h2>
        </div>

        <Row className="g-4">
          {projectsData.map((project) => (
            <Col key={project.id} md={6} lg={4}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
    </container>
    </section>
  );
};

export default ProjectsList;