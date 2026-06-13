import React, { useContext } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faCode, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const AboutMe = () => {
  const { isDevMode } = useContext(ThemeContext);

  // Contenido limpio, corporativo y SEO Optimizado
  const profile = {
    dev: {
      subtitle: "SOFTWARE DEVELOPMENT & ARTIFICIAL INTELLIGENCE",
      title: "We drive corporate digital transformation by merging high-performance software with custom AI ecosystems.",
      bio: "At STACKO, we bridge the gap between advanced technology and real business value. We specialize in building scalable web platforms and engineering custom AI Agents designed to automate complex operations in record time. Our core value relies on combining elite Full Stack software development with cutting-edge AI technologies—including Claude, Cursor, the Nvidia ecosystem, and OpenClaw—to optimize productivity and unlock unprecedented efficiency for your company.",
      skillsTitle: "Core Capabilities",
      skills: ["AI Agents", "Claude API", "Cursor Integration", "Nvidia Ecosystem", "OpenClaw", "Full Stack Development"],
      buttonText: "Download Company Profile",
    },
    analyst: {
      subtitle: "DATA STRATEGY & BUSINESS OPTIMIZATION",
      title: "We transform operational complexity into actionable business intelligence and automated scalability.",
      bio: "We guide companies toward data-driven growth. By analyzing workflows and integrating tailored technical solutions, we eliminate operational bottlenecks, optimize structural costs, and build clear digital roadmaps that help enterprises scale efficiently and dominate their markets.",
      skillsTitle: "Strategic Competencies",
      skills: ["Business Intelligence", "Process Automation", "AI Business Strategy", "Data Storytelling", "Workflow Scalability", "KPI Analytics"],
      buttonText: "Download Corporate Deck",
    }
  };

  const content = isDevMode ? profile.dev : profile.analyst;

  return (
    <section 
        id="about" 
        className="bg-white text-dark border-top border-bottom border-dark" // FORZADO: Fondo blanco y texto negro
    >
      {/* Container fluid con p-0 para que abarque de borde a borde de la pantalla */}
      <Container fluid className="p-0">
        <Row className="g-0 align-items-stretch">
          
          {/* --- COLUMNA 1: IMAGEN (Abarca la mitad exacta, sin bordes ni márgenes) --- */}
          {/* Usamos position-relative y minHeight para asegurar que la imagen se estire correctamente */}
          <Col lg={6} className="position-relative border-dark border-end-lg" style={{ minHeight: '600px', borderRight: '2px solid #000' }}>
            <img 
                src="https://via.placeholder.com/1200x1200?text=STACKO+ENTERPRISE" 
                alt="STACKO Enterprise Solutions" 
                className="position-absolute w-100 h-100 object-fit-cover"
                style={{ top: 0, left: 0, filter: 'grayscale(100%) contrast(1.1)' }} // Filtro blanco y negro
            />
          </Col>

          {/* --- COLUMNA 2: TEXTO (Fondo blanco rígido, contenido alineado al centro) --- */}
          <Col lg={6} className="bg-white p-5 d-flex flex-column justify-content-center">
            {/* Margen interno extra en pantallas grandes para que no toque los bordes */}
            <div className="px-lg-5 py-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={isDevMode ? "dev-text" : "ana-text"}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        transition={{ duration: 0.4 }}
                    >
                        {/* Subtítulo superior */}
                        <div className="d-flex align-items-center mb-4 text-dark">
                            <FontAwesomeIcon icon={isDevMode ? faCode : faBuilding} className="me-2 small opacity-75" />
                            <span className="fw-bold small text-uppercase" style={{ letterSpacing: '2px', fontSize: '0.75rem' }}>
                                {content.subtitle}
                            </span>
                        </div>

                        {/* Título Principal */}
                        <h2 className="display-6 fw-bolder mb-4 text-black" style={{ letterSpacing: '-1px', lineHeight: '1.2' }}>
                            {content.title}
                        </h2>

                        {/* Biografía / Texto Corporativo Descriptivo */}
                        <p className="mb-5 text-dark" style={{ fontSize: '1.1rem', lineHeight: '1.7', textAlign: 'justify', opacity: 0.85 }}>
                            {content.bio}
                        </p>

                        {/* Sección de Tecnologías / Core Competencies */}
                        <div className="mb-5">
                            <p className="mb-3 fw-bolder text-uppercase small text-black" style={{ letterSpacing: '1px' }}>
                                {content.skillsTitle}
                            </p>
                            <div className="d-flex flex-wrap gap-2">
                                {content.skills.map((skill, idx) => (
                                    <Badge 
                                        key={idx} 
                                        bg="transparent" 
                                        className="rounded-0 py-2 px-3 fw-bold text-dark border border-dark"
                                        style={{ fontSize: '0.8rem' }}
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Botones de Acción y Redes */}
                        <div className="d-flex gap-4 mt-4 align-items-center">
                            <Button 
                                variant="dark" 
                                className="px-4 py-3 rounded-0 fw-bold text-uppercase border-0 text-white"
                                style={{ letterSpacing: '1px', fontSize: '0.85rem', backgroundColor: '#000' }}
                            >
                                <FontAwesomeIcon icon={faDownload} className="me-2" />
                                {content.buttonText}
                            </Button>
                            
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-dark" style={{ fontSize: '1.5rem' }}>
                                <FontAwesomeIcon icon={faLinkedin} style={{ transition: 'opacity 0.2s ease' }} className="opacity-75 hover-opacity-100" />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-dark" style={{ fontSize: '1.5rem' }}>
                                <FontAwesomeIcon icon={faGithub} style={{ transition: 'opacity 0.2s ease' }} className="opacity-75 hover-opacity-100" />
                            </a>
                        </div>

                    </motion.div>
                </AnimatePresence>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;