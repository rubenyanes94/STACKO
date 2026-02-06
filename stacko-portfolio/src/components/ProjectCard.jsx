import React, { useContext } from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faChartPie, faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const { isDevMode } = useContext(ThemeContext);

  // Extraemos la info según el modo
  const content = isDevMode ? project.dev : project.analyst;
  
  // Estilos dinámicos
  const cardStyle = isDevMode 
    ? { 
        background: '#1a1a1a', 
        border: '1px solid #333', 
        fontFamily: 'monospace',
        color: '#e0e0e0'
      } 
    : { 
        background: '#ffffff', 
        border: 'none', 
        fontFamily: 'sans-serif' 
      };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="h-100"
    >
      <Card className={`h-100 ${!isDevMode ? 'shadow-sm' : ''}`} style={cardStyle}>
        {/* Header de la Card */}
        <div className="card-header border-0 bg-transparent pt-4 px-4 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            <FontAwesomeIcon 
              icon={isDevMode ? faCode : faChartPie} 
              className={isDevMode ? "text-info" : "text-indigo"} 
            />
            <span className={`fw-bold ${isDevMode ? "text-info" : "text-indigo"}`}>
              {isDevMode ? "git_repo" : "Case Study"}
            </span>
          </div>
          {isDevMode && <span className="text-muted small">ID: {project.id}</span>}
        </div>

        <Card.Body className="px-4 pb-4">
          <Card.Title className="mb-3 fw-bold fs-4">
            {project.title}
          </Card.Title>
          
          <Card.Text className={isDevMode ? "text-secondary" : "text-muted"}>
            {content.description}
          </Card.Text>

          {/* Tags / Tech Stack */}
          <div className="d-flex flex-wrap gap-2 my-4">
            {content.tags.map((tag, index) => (
              <Badge 
                key={index} 
                bg={isDevMode ? "dark" : "light"} 
                className={isDevMode ? "text-warning border border-secondary fw-normal" : "text-dark shadow-sm"}
              >
                {isDevMode ? `<${tag}/>` : tag}
              </Badge>
            ))}
          </div>

          {/* KPI Section (Solo Analyst) o Code Stats (Solo Dev) */}
          <div className={`p-3 rounded mb-4 ${isDevMode ? 'bg-black' : 'bg-light'}`}>
             <div className="d-flex justify-content-between align-items-center">
                <small className={isDevMode ? "text-muted" : "text-secondary fw-bold"}>
                    {isDevMode ? "Main module:" : "Impact:"}
                </small>
                <span className={isDevMode ? "text-success font-monospace" : "text-success fw-bold"}>
                    {content.highlight}
                </span>
             </div>
          </div>

          {/* Botones de Acción */}
          <div className="d-flex gap-2">
            <Button 
                href={content.link} 
                target="_blank"
                variant={isDevMode ? "outline-info" : "primary"}
                className={`w-100 ${!isDevMode && 'btn-indigo'}`}
                size="sm"
            >
              {isDevMode ? <><FontAwesomeIcon icon={faGithub} /> Source</> : "View Dashboard"}
            </Button>
            
            {content.demo && (
                <Button 
                    href={content.demo}
                    target="_blank" 
                    variant="outline-secondary" 
                    size="sm"
                >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;