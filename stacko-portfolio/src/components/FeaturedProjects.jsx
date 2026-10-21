import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../context/theme';
import { featuredProjects } from '../data/projects';
import ProjectCard from './ProjectCard.jsx';
import Reveal from './Reveal.jsx';

const FeaturedProjects = () => {
  const { isDevMode } = useTheme();

  return (
    <section id="work" className="section section-soft">
      <Container>
        <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-5">
          <div>
            <div className="eyebrow">{isDevMode ? 'ls -la ./featured' : 'Selected work'}</div>
            <h2 className="heading-stk mb-0">Products in production, not mockups.</h2>
          </div>
          <Link to="/projects" className="link-arrow">
            All projects <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>

        <Row className="g-4">
          {featuredProjects.map((project, idx) => (
            <Col key={project.slug} md={6}>
              <Reveal delay={(idx % 2) * 0.1} className="h-100">
                <ProjectCard project={project} />
              </Reveal>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedProjects;
