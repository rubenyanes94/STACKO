import React, { useContext } from 'react';
import { Container, Row, Col, Badge, Button, Card } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faExternalLinkAlt, faCode, faChartPie } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  const { isDevMode } = useContext(ThemeContext);

  // DATOS DE TUS PROYECTOS
  // Puedes cambiar el texto y las URLs de las imágenes aquí
  const allProjects = [
    {
      id: 1,
      title: "E-Commerce Microservices",
      category: "Full Stack",
      img: "https://placehold.co/600x400/111/FFF?text=Architecture+Diagram", // FOTO
      desc: "Plataforma de ventas distribuida con pasarela de pagos.",
      // Aquí definimos qué texto mostrar en cada modo
      details: isDevMode 
        ? "Arquitectura de microservicios en Docker. Backend Flask manejando pedidos y Node.js para notificaciones. Base de datos PostgreSQL con replicación."
        : "Solución robusta para comercio online que soporta 10k usuarios simultáneos. Redujo los tiempos de carga en un 40% aumentando la retención de clientes.",
      stack: ["Python", "Flask", "Docker", "AWS"],
      link: "#", // Link a la demo
      repo: "#"  // Link al código
    },
    {
      id: 2,
      title: "Financial Growth Dashboard",
      category: "Data Science",
      img: "https://placehold.co/600x400/eee/333?text=PowerBI+Report", // FOTO
      desc: "Análisis predictivo de tendencias financieras.",
      details: isDevMode
        ? "ETL pipeline automatizado con Pandas limpiando 5GB de data cruda. Modelado de datos en Star Schema y visualización en Power BI con medidas DAX avanzadas."
        : "Tablero ejecutivo que permite visualizar el flujo de caja en tiempo real. Identificó fugas de capital ahorrando $15k trimestrales a la empresa.",
      stack: ["Power BI", "Python", "SQL", "Excel"],
      link: "#",
      repo: "#"
    },
    {
      id: 3,
      title: "Healthcare Appointment App",
      category: "Frontend / UX",
      img: "https://placehold.co/600x400/222/FFF?text=React+Interface", // FOTO
      desc: "Sistema de gestión de citas médicas.",
      details: isDevMode
        ? "SPA construida con React y Redux Toolkit. Integración con Google Calendar API y sistema de autenticación Auth0. Testing unitario con Jest."
        : "Interfaz intuitiva para pacientes y doctores. Digitalizó el proceso de agendamiento reduciendo el ausentismo en un 25%.",
      stack: ["React", "Redux", "Firebase", "Jest"],
      link: "#",
      repo: "#"
    }
  ];

  return (
    <div className="min-vh-100 pt-5" 
         style={{ 
           backgroundColor: isDevMode ? '#0a0a0a' : '#f8f9fa',
           color: isDevMode ? '#fff' : '#333',
           transition: 'background-color 0.5s ease'
         }}>
      
      <Container className="py-5">
        {/* HEADER: Botón Volver y Títulos */}
        <div className="d-flex align-items-center mb-5">
          <Link to="/" className="text-decoration-none me-4">
            <Button 
                variant={isDevMode ? "outline-light" : "outline-secondary"} 
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: 50, height: 50 }}
            >
                <FontAwesomeIcon icon={faArrowLeft} />
            </Button>
          </Link>
          <div>
             <h6 className="text-uppercase mb-0 fw-bold" 
                 style={{ color: isDevMode ? '#00f2ff' : '#6366f1', letterSpacing: '2px' }}>
                {isDevMode ? 'cd /var/www/projects' : 'Portfolio Gallery'}
             </h6>
             <h1 className="display-4 fw-bold">
                {isDevMode ? './All_Repositories' : 'Detailed Case Studies'}
             </h1>
          </div>
        </div>

        {/* LISTA DE TARJETAS */}
        <div className="d-flex flex-column gap-5">
          {allProjects.map((project) => (
            <Card key={project.id} className="border-0 shadow overflow-hidden" 
                  style={{ backgroundColor: isDevMode ? '#161616' : '#fff' }}>
              <Row className="g-0">
                
                {/* COLUMNA IZQUIERDA: IMAGEN */}
                <Col lg={5}>
                  <div className="h-100 position-relative" style={{ minHeight: '300px' }}>
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-100 h-100 object-fit-cover"
                      style={{ filter: isDevMode ? 'grayscale(40%) contrast(1.2)' : 'none' }}
                    />
                    {/* Badge de Categoría sobre la imagen */}
                    <div className="position-absolute top-0 start-0 p-3">
                        <Badge bg={isDevMode ? "dark" : "light"} text={isDevMode ? "info" : "dark"} className="border">
                            {project.category}
                        </Badge>
                    </div>
                  </div>
                </Col>
                
                {/* COLUMNA DERECHA: INFORMACIÓN */}
                <Col lg={7}>
                  <Card.Body className="p-4 p-lg-5 d-flex flex-column h-100">
                    <div className="mb-auto">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h2 className="fw-bold mb-0" style={{ fontFamily: isDevMode ? 'Courier Prime, monospace' : 'Roboto, sans-serif', color: isDevMode ? '#fff' : '#222' }}>
                                {project.title}
                            </h2>
                            <FontAwesomeIcon icon={isDevMode ? faCode : faChartPie} className="text-muted fs-3" />
                        </div>
                        
                        <p className="lead mb-4" style={{ color: isDevMode ? '#aaa' : '#555' }}>
                            {project.desc}
                        </p>
                        
                        {/* Caja de Detalles (Técnicos vs Negocio) */}
                        <div className={`p-3 rounded mb-4 ${isDevMode ? 'border border-secondary' : 'bg-light border-start border-4 border-primary'}`}>
                            <small className="text-uppercase fw-bold text-muted d-block mb-2">
                                {isDevMode ? '// Technical implementation' : 'Business Impact'}
                            </small>
                            <p className="mb-0 small" style={{ fontFamily: isDevMode ? 'Courier Prime, monospace' : 'sans-serif', color: isDevMode ? '#ccc' : '#444' }}>
                                {project.details}
                            </p>
                        </div>

                        {/* Tecnologías (Badges) */}
                        <div className="mb-4">
                            {project.stack.map((tech, i) => (
                                <Badge key={i} bg="transparent" className="me-2 mb-2 border text-secondary p-2">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* Botones de Acción */}
                    <div className="d-flex gap-3 mt-3">
                        {isDevMode && (
                            <Button variant="outline-light" href={project.repo} target="_blank">
                                <FontAwesomeIcon icon={faGithub} className="me-2" /> Repo
                            </Button>
                        )}
                        <Button 
                            style={{ 
                                backgroundColor: isDevMode ? '#00f2ff' : '#6366f1', 
                                color: isDevMode ? '#000' : '#fff',
                                border: 'none'
                            }} 
                            className="fw-bold px-4 shadow-sm"
                            href={project.link}
                        >
                             View Live <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-2" />
                        </Button>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Projects;