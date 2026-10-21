import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useCopy } from '../hooks/useCopy';
import { getProjects } from '../data/projects';
import ProjectCard from './ProjectCard.jsx';
import Reveal from './Reveal.jsx';

// Layout bento: el primer proyecto destacado ocupa todo el ancho y el resto va en columnas.
const FeaturedProjects = () => {
  const { t, v, lang, to } = useCopy();
  const [hero, ...rest] = getProjects(lang).filter((project) => project.featured);

  return (
    <section id="work" className="section section-soft">
      <Container>
        <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-5">
          <div>
            <div className="eyebrow">{v('featured.eyebrow')}</div>
            <h2 className="heading-stk mb-0">{t('featured.title')}</h2>
          </div>
          <Link to={to('projects')} className="link-arrow">
            {t('featured.all')} <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>

        <Row className="g-4">
          {hero && (
            <Col xs={12}>
              <Reveal>
                <ProjectCard project={hero} large />
              </Reveal>
            </Col>
          )}
          {rest.map((project, idx) => (
            <Col key={project.slug} md={6} lg={4}>
              <Reveal delay={(idx % 3) * 0.08} className="h-100">
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
