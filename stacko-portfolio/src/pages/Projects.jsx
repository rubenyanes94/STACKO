import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useCopy } from '../hooks/useCopy';
import { getProjects, categoryKeys } from '../data/projects';
import ProjectCard from '../components/ProjectCard.jsx';
import Reveal from '../components/Reveal.jsx';
import CtaBand from '../components/CtaBand.jsx';

const Projects = () => {
  const { t, v, lang } = useCopy();
  const [filter, setFilter] = useState('all');

  const projects = getProjects(lang);
  // Solo se muestran como filtros las categorías que tienen al menos un proyecto.
  const usedCategories = categoryKeys.filter((key) => projects.some((project) => project.category === key));
  const visible = filter === 'all' ? projects : projects.filter((project) => project.category === filter);

  return (
    <>
      <section className="grid-bg" style={{ paddingBlock: 'clamp(4rem, 9vw, 7rem) 3rem' }}>
        <Container>
          <div className="eyebrow">{v('projects.eyebrow')}</div>
          <h1 className="display-stk" style={{ maxWidth: '50rem' }}>{t('projects.title')}</h1>
          <p className="lead-stk mb-5">{v('projects.lead')}</p>

          <div className="d-flex flex-wrap gap-2" role="group" aria-label={t('projects.filter')}>
            <button type="button" className="filter-chip" aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>
              {t('projects.all')} ({projects.length})
            </button>
            {usedCategories.map((key) => (
              <button key={key} type="button" className="filter-chip" aria-pressed={filter === key} onClick={() => setFilter(key)}>
                {t(`categories.${key}`)}
              </button>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-5 mb-5">
        <Container>
          <Row className="g-4">
            {visible.map((project, idx) => (
              <Col key={project.slug} md={6}>
                <Reveal delay={(idx % 2) * 0.1} className="h-100">
                  <ProjectCard project={project} />
                </Reveal>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <CtaBand title={t('cta.projects')} />
    </>
  );
};

export default Projects;
