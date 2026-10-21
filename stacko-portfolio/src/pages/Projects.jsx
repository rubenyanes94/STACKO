import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '../context/theme';
import { projects, categories } from '../data/projects';
import { usePageMeta } from '../hooks/usePageMeta';
import ProjectCard from '../components/ProjectCard.jsx';
import Reveal from '../components/Reveal.jsx';
import CtaBand from '../components/CtaBand.jsx';

// Solo se muestran como filtros las categorías que tienen al menos un proyecto.
const usedCategories = Object.keys(categories).filter((key) => projects.some((p) => p.category === key));

const Projects = () => {
  const { isDevMode } = useTheme();
  const [filter, setFilter] = useState('all');
  usePageMeta('Work & Case Studies', 'AI agents, SaaS platforms, e-commerce and high-performance websites built by STACKO.');

  const visible = filter === 'all' ? projects : projects.filter((project) => project.category === filter);

  return (
    <>
      <section className="grid-bg" style={{ paddingBlock: 'clamp(4rem, 9vw, 7rem) 3rem' }}>
        <Container>
          <div className="eyebrow">{isDevMode ? 'cd ~/projects' : 'Our work'}</div>
          <h1 className="display-stk" style={{ maxWidth: '50rem' }}>
            Real products. Real clients. Shipped.
          </h1>
          <p className="lead-stk mb-5">
            {isDevMode
              ? 'Architecture, stack and engineering decisions behind every project.'
              : 'Each case study shows the business challenge, what we built and the impact it had.'}
          </p>

          <div className="d-flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
            <button type="button" className="filter-chip" aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>
              All ({projects.length})
            </button>
            {usedCategories.map((key) => (
              <button key={key} type="button" className="filter-chip" aria-pressed={filter === key} onClick={() => setFilter(key)}>
                {categories[key]}
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

      <CtaBand title="Your project could be the next case study." />
    </>
  );
};

export default Projects;
