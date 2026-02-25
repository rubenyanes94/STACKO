import React, { useContext, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faTerminal, faCheckCircle, faCopy } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Footer = () => {
  const { isDevMode } = useContext(ThemeContext);
  const [copied, setCopied] = useState(false);

  const contactInfo = {
    email: "rubeny.dev@gmail.com",
    phone: "+58 414-0180311",
    year: new Date().getFullYear()
  };

  const socialLinks = [
    { icon: faGithub, url: "https://github.com/rubenyanes94", label: "git_hub" },
    { icon: faLinkedin, url: "https://www.linkedin.com/in/ruben-yanes/", label: "linked_in" }, 
    { icon: faTwitter, url: "https://x.com/rubeniyanes", label: "twitter" },     
    { icon: faMedium, url: "https://medium.com/@rubeny.dev", label: "medium" }         
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  const footerBg = isDevMode ? '#0a0a0a' : '#1e1b4b'; 
  const textColor = isDevMode ? '#ffff' : '#ffffff'; 

  return (
    <footer 
      className="py-5 position-relative overflow-hidden"
      style={{ 
        backgroundColor: footerBg, 
        color: textColor,
        transition: 'background-color 0.5s ease',
        borderTop: isDevMode ? '1px solid #333' : 'none'
      }}
    >
  
      <div 
        className="position-absolute w-100 h-100 top-0 start-0" 
        style={{ 
            opacity: 0.05, 
            pointerEvents: 'none',
            backgroundImage: isDevMode 
                ? 'linear-gradient(0deg, transparent 24%, #222 25%, #222 26%, transparent 27%, transparent 74%, #222 75%, #222 76%, transparent 77%, transparent)' 
                : 'none',
            backgroundSize: '50px 50px'
        }}
      ></div>

      <Container className="position-relative z-1">
        <Row className="gy-4 justify-content-between align-items-center">
          
          {/* --- BLOQUE 1: BRANDING & STATUS --- */}
          <Col md={4}>
            <h4 className="fw-bold mb-3" style={{ fontFamily: isDevMode ? 'monospace' : 'sans-serif' }}>
              {isDevMode ? '> STACKO_SYS' : 'STACKO.'}
            </h4>
            
            {isDevMode ? (
              <div className="d-flex align-items-center gap-2 text-success small font-monospace">
                <span className="blinking-dot">●</span>
                <span>SYSTEM STATUS: ONLINE</span>
                <span className="text-muted ms-2">| PING: 24ms</span>
              </div>
            ) : (
              <p className="text-white-50 small mb-0" style={{ maxWidth: '300px' }}>
                Transforming data into decisions and code into scalable solutions. Let's build the future together.
              </p>
            )}
          </Col>
          
          <Col md={4} className="text-center">
            <div 
                className={`d-inline-flex flex-column p-3 rounded ${isDevMode ? 'border border-dark' : 'bg-white bg-opacity-10'}`}
                style={{ backdropFilter: 'blur(5px)' }}
            >
                {/* Email con click-to-copy */}
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="mb-2 d-flex align-items-center justify-content-center gap-2 cursor-pointer"
                    onClick={handleCopy}
                    style={{ cursor: 'pointer' }}
                >
                    <FontAwesomeIcon icon={faEnvelope} className={isDevMode ? "text-warning" : "text-info"} />
                    <span className={isDevMode ? "font-monospace" : "fw-bold"}>
                        {contactInfo.email}
                    </span>
                    {copied ? (
                        <span className="badge bg-success small">Copied!</span>
                    ) : (
                        <FontAwesomeIcon icon={faCopy} className="small opacity-50" />
                    )}
                </motion.div>

                {/* Telefono */}
                <div className="d-flex align-items-center justify-content-center gap-2">
                    <FontAwesomeIcon icon={faPhone} className={isDevMode ? "text-warning" : "text-info"} />
                    <span className={isDevMode ? "font-monospace text-muted" : "text-white-50"}>
                        {contactInfo.phone}
                    </span>
                </div>
            </div>
          </Col>

          {/* --- BLOQUE 3: REDES SOCIALES --- */}
          <Col md={4} className="text-md-end text-center">
            <div className="d-flex justify-content-md-end justify-content-center gap-3 mb-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, color: isDevMode ? '#fff' : '#6366f1' }}
                  className="fs-4"
                  style={{ 
                    color: isDevMode ? '#00f2ff' : 'white',
                    transition: 'color 0.3s' 
                  }}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </motion.a>
              ))}
            </div>
            <div className={`small ${isDevMode ? 'text-secondary font-monospace' : 'text-white-50'}`}>
                {isDevMode 
                    ? `// © ${contactInfo.year} Ruben Yanes. All rights reserved.` 
                    : `© ${contactInfo.year} Ruben Yanes. Design & Data.`
                }
            </div>
          </Col>

        </Row>
      </Container>
    </footer>
  );
};

export default Footer;