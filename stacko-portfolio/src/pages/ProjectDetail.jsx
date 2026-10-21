import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faArrowUpRightFromSquare, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTheme } from '../context/theme';
import { projects, categories, getProjectBySlug } from '../data/projects';
import { usePageMeta } from '../hooks/usePageMeta';
import ProjectMedia from '../components/ProjectMedia.jsx';
import CtaBand from '../components/CtaBand.jsx';
import NotFound from './NotFound.jsx';

const ProjectDetail = () => {
  const { slug } = useParams();
  const { isDevMode } = useTheme();
  const project = getProjectBySlug(slug);
  usePageMeta(project ? project.title : 'Page not found', project?.business.summary);

  if (!project) return <NotFound />;

  const { tech, business, links } = project;
  const next = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <>
      <section className="grid-bg" style={{ paddingBlock: 'clamp(3rem, 7vw, 5rem) 3rem' }}>
        <Container>
          <div className="mb-4">
            <Link to="/projects" className="link-arrow small border-0">
              <FontAwesomeIcon icon={faArrowLeft} /> {isDevMode ? 'cd ..' : 'All projects'}
            </Link>
          </div>
          <div className="eyebrow">{categories[project.category]} · {project.year}</div>
          <h1 className="display-stk">{project.title}</h1>
          <p className="lead-stk mb-4">{isDevMode ? tech.summary : business.summary}</p>
          <div className="d-flex flex-wrap gap-3">
            {links.live && (
              <a href={links.live} target="_blank" rel="noopener noreferrer" className="btn-stk">
                {isDevMode ? 'open live_app' : 'Visit live site'} <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            )}
            {links.repo && (
              <a href={links.repo} target="_blank" rel="noopener noreferrer" className="btn-stk-outline">
                <FontAwesomeIcon icon={faGithub} /> Source code
              </a>
            )}
          </div>
        </Container>
      </section>

      <section className="pb-5">
        <Container>
          <ProjectMedia project={project} />
        </Container>
      </section>

      <section className="section">
        <Container>
          <Row className="g-5">
            <Col lg={8}>
              <div className="mb-5">
                <div className="eyebrow">The challenge</div>
                <p className="fs-5">{business.challenge}</p>
              </div>
              <div className="mb-5">
                <div className="eyebrow">What we built</div>
                <p className="fs-5">{business.solution}</p>
              </div>
              <div className="mb-5">
                <div className="eyebrow">Impact</div>
                <ul className="outcome-list">
                  {business.outcomes.map((outcome) => (
                    <li key={outcome}>
                      <FontAwesomeIcon icon={faCheck} className="mt-1" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="eyebrow">Under the hood</div>
                <ul className="outcome-list">
                  {tech.highlights.map((highlight) => (
                    <li key={highlight} className="font-mono small">
                      <span className="text-muted-stk">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>

            <Col lg={4}>
              <div className="card-stk p-4" style={{ position: 'sticky', top: 'calc(var(--nav-height) + 24px)', height: 'auto' }}>
                <div className="meta-row"><span>Client</span><span>{project.client}</span></div>
                <div className="meta-row"><span>Year</span><span>{project.year}</span></div>
                <div className="meta-row"><span>Category</span><span>{categories[project.category]}</span></div>
                <div className="pt-4">
                  <div className="small text-muted-stk mb-3">Stack</div>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {tech.stack.map((item) => <span key={item} className="tag">{item}</span>)}
                  </div>
                  <div className="small text-muted-stk mb-3">Focus</div>
                  <div className="d-flex flex-wrap gap-2">
                    {business.tags.map((item) => <span key={item} className="tag">{item}</span>)}
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          {next && next.slug !== project.slug && (
            <Link
              to={`/projects/${next.slug}`}
              className="d-flex justify-content-between align-items-center mt-5 pt-5 text-decoration-none"
              style={{ borderTop: '1px solid var(--border)', color: 'var(--text)' }}
            >
              <div>
                <div className="eyebrow mb-2">Next project</div>
                <div className="heading-stk">{next.title}</div>
              </div>
              <FontAwesomeIcon icon={faArrowRight} size="2x" />
            </Link>
          )}
        </Container>
      </section>

      <CtaBand title={`Want something like ${project.title}?`} />
    </>
  );
};

export default ProjectDetail;
