import React, { useContext } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faTerminal, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const AboutMe = () => {
  const { isDevMode } = useContext(ThemeContext);

  // Data content for both modes
  const profile = {
    dev: {
      greeting: "ruben@stacko:~$ cat profile.txt",
      title: "Full Stack Developer",
      bio: "Passionate about clean architecture and scalable backends. My workflow involves turning complex requirements into efficient Python/Flask APIs and dynamic React interfaces. I treat infrastructure as code and data as the ultimate source of truth.",
      skillsTitle: "dependencies = [",
      skills: ["Python", "Flask", "React.js", "SQLAlchemy", "Docker", "PostgreSQL"],
      skillsClose: "]",
      buttonText: "git clone cv.pdf",
    },
    analyst: {
      greeting: "ABOUT ME",
      title: "Data Analyst & Strategist",
      bio: "I bridge the gap between technical complexity and business strategy. With a strong background in data visualization and SQL, I transform raw datasets into actionable insights that drive growth, optimize costs, and improve operational efficiency.",
      skillsTitle: "Core Competencies",
      skills: ["Data Storytelling", "Business Intelligence", "KPI Analysis", "Tableau", "Power BI", "SQL"],
      skillsClose: "",
      buttonText: "Download Resume",
    }
  };

  const content = isDevMode ? profile.dev : profile.analyst;

  return (
    <section 
        id="about" 
        className={`py-5 ${isDevMode ? 'bg-black text-light' : 'bg-white text-dark'}`}
        style={{ transition: 'background-color 0.5s ease, color 0.5s ease' }}
    >
      <Container className="py-5">
        <Row className="align-items-center">
          
          {/* --- COLUMN 1: IMAGE --- */}
          <Col lg={6} className="mb-5 mb-lg-0 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="position-relative d-inline-block"
            >
                {/* Decorative Elements for Dev Mode */}
                {isDevMode && (
                    <div className="position-absolute w-100 h-100 border border-success" 
                         style={{ top: '15px', left: '15px', zIndex: 0, opacity: 0.5 }}>
                    </div>
                )}
                
                {/* YOUR PHOTO PLACEHOLDER */}
                <div 
                    className={`position-relative overflow-hidden ${isDevMode ? '' : 'shadow-lg rounded-circle'}`}
                    style={{ 
                        width: '350px', 
                        height: '350px', 
                        zIndex: 1,
                        background: '#333', 
                    }}
                >
                     {/* TODO: Replace the src below with your real photo.
                        Place your photo in the /public/ folder and reference it like '/my-photo.jpg'
                     */}
                    <img 
                        src="https://via.placeholder.com/400x400?text=Ruben+Yanes" 
                        alt="Ruben Yanes" 
                        className="w-100 h-100 object-fit-cover"
                        style={{ filter: isDevMode ? 'grayscale(100%) contrast(1.2)' : 'none' }}
                    />
                </div>
            </motion.div>
          </Col>

          {/* --- COLUMN 2: INFO --- */}
          <Col lg={6}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={isDevMode ? "dev-text" : "ana-text"}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                >
                    {/* Header */}
                    <div className={`d-flex align-items-center mb-3 ${isDevMode ? 'text-success font-monospace' : 'text-indigo'}`}>
                        <FontAwesomeIcon icon={isDevMode ? faTerminal : faUserTie} className="me-2" />
                        <span className={isDevMode ? "small" : "fw-bold small spacing-2"}>
                            {content.greeting}
                        </span>
                    </div>

                    <h2 className={`display-5 fw-bold mb-4 ${isDevMode ? 'font-monospace' : ''}`}>
                        {content.title}
                    </h2>

                    <p className={`lead mb-4 ${isDevMode ? 'text-secondary font-monospace' : 'text-muted'}`} style={{ fontSize: '1.1rem' }}>
                        {isDevMode ? <span className="text-warning">def get_bio(self):</span> : null}
                        <br />
                        {isDevMode ? `    """${content.bio}"""` : content.bio}
                    </p>

                    {/* Skills Section */}
                    <div className="mb-4">
                        <p className={`mb-2 ${isDevMode ? 'text-info font-monospace' : 'fw-bold text-dark'}`}>
                            {content.skillsTitle}
                        </p>
                        <div className="d-flex flex-wrap gap-2">
                            {content.skills.map((skill, idx) => (
                                <Badge 
                                    key={idx} 
                                    bg={isDevMode ? "transparent" : "light"} 
                                    className={isDevMode 
                                        ? "text-light border border-secondary fw-normal font-monospace" 
                                        : "text-indigo shadow-sm py-2 px-3 fw-normal"
                                    }
                                >
                                    {isDevMode ? `'${skill}'${idx < content.skills.length - 1 ? ',' : ''}` : skill}
                                </Badge>
                            ))}
                        </div>
                        {isDevMode && <p className="text-info font-monospace mt-1">{content.skillsClose}</p>}
                    </div>

                    {/* Buttons / CTA */}
                    <div className="d-flex gap-3 mt-5">
                        <Button 
                            variant={isDevMode ? "outline-success" : "primary"} 
                            className={`px-4 py-2 ${!isDevMode && 'btn-indigo shadow'}`}
                        >
                            <FontAwesomeIcon icon={faDownload} className="me-2" />
                            {content.buttonText}
                        </Button>
                        <Button variant="link" className="text-secondary fs-4 p-0">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </Button>
                        <Button variant="link" className="text-secondary fs-4 p-0">
                            <FontAwesomeIcon icon={faGithub} />
                        </Button>
                    </div>

                </motion.div>
            </AnimatePresence>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;