import React, { useContext } from 'react';
import { Container, Row, Col, Badge, Button, Card, Carousel } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faExternalLinkAlt, faCode, faChartPie } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  const { isDevMode } = useContext(ThemeContext);

  const devProjects = [
    {
      id: "furniture-store-01",
      title: "La Tienda de los Muebles",
      category: isDevMode ? "Performance Optimized Landing" : "Retail Digital Strategy",
      images: [
        "https://raw.githubusercontent.com/rubenyanes94/Furniture-Store-Landing-Page-Optimized-for-Performance/main/public/preview-hero.png",
        "https://raw.githubusercontent.com/rubenyanes94/Furniture-Store-Landing-Page-Optimized-for-Performance/main/public/preview-catalog.png",
        "https://raw.githubusercontent.com/rubenyanes94/Furniture-Store-Landing-Page-Optimized-for-Performance/main/public/preview-mobile.png",
        "https://raw.githubusercontent.com/rubenyanes94/Furniture-Store-Landing-Page-Optimized-for-Performance/main/public/preview-performance.png"
      ],
      desc: isDevMode
        ? "High-performance landing page focused on Core Web Vitals and conversion optimization."
        : "Digital showcase platform designed to maximize furniture catalog visibility and lead generation.",
      details: isDevMode
        ? "Developed with semantic HTML5, modern CSS3, and optimized Vanilla JS. Implemented Lazy Loading, WebP image compression, and resource minification to achieve a 95+ Lighthouse performance score."
        : "User-centered design (UX) focused on seamless category navigation. Local SEO-optimized structure, helping the store scale Google rankings for regional furniture searches.",
      stack: isDevMode
        ? ["JavaScript", "Performance", "HTML5", "CSS3", "SEO"]
        : ["eCommerce", "UX Design", "Local SEO", "Conversion Rate"],
      link: "https://www.latiendadelosmuebles.com/",
      repo: "https://github.com/rubenyanes94/Furniture-Store-Landing-Page-Optimized-for-Performance"
    },
    {
      id: 2,
      title: "Real-Time Collaboration",
      category: "Full Stack",
      images: [
        "https://placehold.co/600x400/111/00f2ff?text=Editor+Interface",
        "https://placehold.co/600x400/111/00f2ff?text=User+Presence",
        "https://placehold.co/600x400/111/00f2ff?text=Socket+Logs",
        "https://placehold.co/600x400/111/00f2ff?text=Dark+Mode"
      ],
      desc: "Edición compartida en tiempo real usando WebSockets.",
      details: "Frontend en React con manejo de estado complejo mediante Redux Toolkit. Comunicación bidireccional fluida.",
      stack: ["React", "Node.js", "Socket.io", "MongoDB"],
      link: "#",
      repo: "#"
    }
  ];

  const dataProjects = [
    {
      id: 101,
      title: "Market Trend Analysis",
      category: "Business Intelligence",
      images: [
        "https://placehold.co/600x400/eee/6366f1?text=Executive+Summary",
        "https://placehold.co/600x400/eee/6366f1?text=Regional+Sales",
        "https://placehold.co/600x400/eee/6366f1?text=Forecast+Model",
        "https://placehold.co/600x400/eee/6366f1?text=Demographics"
      ],
      desc: "Dashboard interactivo sobre el comportamiento del consumidor.",
      details: "Identificación de patrones estacionales que resultaron en una optimización del 20% en el presupuesto de marketing.",
      stack: ["Power BI", "SQL", "DAX"],
      link: "#"
    }
  ];

  const currentProjects = isDevMode ? devProjects : dataProjects;

  return (
    <div className="min-vh-100 pt-5"
      style={{
        backgroundColor: isDevMode ? '#0a0a0a' : '#f8f9fa',
        color: isDevMode ? '#fff' : '#333',
        transition: 'all 0.5s ease'
      }}>

      <Container className="py-5">
        {/* Header */}
        <div className="d-flex align-items-center mb-5">
          <Link to="/" className="text-decoration-none me-4">
            <Button variant={isDevMode ? "outline-light" : "outline-secondary"} className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: 50, height: 50 }}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </Button>
          </Link>
          <div>
            <h6 className="text-uppercase mb-0 fw-bold" style={{ color: isDevMode ? '#f7f7f7' : '#6366f1', letterSpacing: '2px' }}>
              {isDevMode ? 'cd /home/projects' : 'Strategic Analytics'}
            </h6>
            <h1 className="display-4 fw-bold">
              {isDevMode ? './RUBO/Projects ' : 'Cases & Insights'}
            </h1>
          </div>
        </div>

        {/* Tarjetas con Carrusel */}
        <div className="d-flex flex-column gap-5">
          {currentProjects.map((project) => (
            <Card key={project.id} className="border-0 shadow-lg overflow-hidden" style={{ backgroundColor: isDevMode ? '#161616' : '#fff' }}>
              <Row className="g-0">

                {/* COLUMNA IZQUIERDA: CARRUSEL DE IMÁGENES */}
                <Col lg={6}>
                  <Carousel fade indicators={true} interval={5000} className="h-100">
                    {project.images.map((img, idx) => (
                      <Carousel.Item key={idx} className="h-100">
                        <div style={{ minHeight: '400px', backgroundColor: '#000' }}>
                          <img
                            src={img}
                            alt={`Slide ${idx}`}
                            className="d-block w-100 object-fit-cover"
                            style={{ height: '400px', opacity: isDevMode ? 0.8 : 1 }}
                          />
                        </div>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </Col>

                {/* COLUMNA DERECHA: INFORMACIÓN */}
                <Col lg={6}>
                  <Card.Body className="p-4 p-lg-5 d-flex flex-column h-100">
                    <div className="mb-auto">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h2 className="fw-bold mb-0" style={{ color: isDevMode ? '#fff' : '#222' }}>{project.title}</h2>
                        <FontAwesomeIcon icon={isDevMode ? faCode : faChartPie} className="text-muted fs-3" />
                      </div>
                      <p className="lead mb-4" style={{ color: isDevMode ? '#fff' : '#555' }}>{project.desc}</p>

                      <div className={`p-3 rounded mb-4 ${isDevMode ? 'border border-secondary' : 'bg-light border-start border-4 border-primary'}`}>
                        <small className="text-uppercase fw-bold text-muted d-block mb-2" style={{ color: isDevMode ? '#fff' : '#555' }}>
                          {isDevMode ? 'Project.info' : 'Insight Summary'}
                        </small>
                        <p className="mb-0 small"style={{ color: isDevMode ? '#fff' : '#555' }}>{project.details}</p>
                      </div>

                      <div className="mb-4">
                        {project.stack.map((tech, i) => (
                          <Badge key={i} bg="transparent" className="me-2 mb-2 border p-2" style={{ color: isDevMode ? '#fff' : '#555' }}>{tech}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="d-flex gap-3 mt-3">
                      {isDevMode && <Button variant="outline-light" href={project.repo} target="_blank"><FontAwesomeIcon icon={faGithub} className="me-2" /> Source</Button>}
                      <Button style={{ backgroundColor: isDevMode ? '#00f2ff' : '#6366f1', color: isDevMode ? '#000' : '#fff', border: 'none' }} className="fw-bold px-4">
                        {isDevMode ? 'Live App' : 'Full Report'} <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-2" />
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