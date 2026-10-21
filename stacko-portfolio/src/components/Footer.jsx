import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from '../context/theme';
import { site, whatsappLink } from '../data/site';
import { featuredProjects } from '../data/projects';

const Footer = () => {
  const { isDevMode } = useTheme();
  const year = new Date().getFullYear();

  return (
    <footer className="footer-stk">
      <Container>
        <Row className="gy-5">
          <Col lg={4}>
            <Link to="/" className="brand d-inline-block mb-3">
              STACKO<span className="brand-cursor" aria-hidden="true" />
            </Link>
            <p className="text-muted-stk mb-4" style={{ maxWidth: '22rem' }}>
              {site.tagline}. AI agents, automation and software that make businesses grow.
            </p>
            <div className="d-flex align-items-center gap-2 small font-mono text-muted-stk">
              <span className="status-dot" />
              {isDevMode ? 'status: accepting_new_projects' : 'Currently accepting new projects'}
            </div>
          </Col>

          <Col xs={6} lg={2}>
            <div className="footer-title">Company</div>
            <ul className="list-unstyled d-grid gap-2 m-0">
              <li><Link to="/projects">Work</Link></li>
              <li><Link to="/ai-agents">AI Agents</Link></li>
              <li><Link to="/#services">Services</Link></li>
              <li><Link to="/#about">About</Link></li>
            </ul>
          </Col>

          <Col xs={6} lg={3}>
            <div className="footer-title">Case studies</div>
            <ul className="list-unstyled d-grid gap-2 m-0">
              {featuredProjects.slice(0, 4).map((project) => (
                <li key={project.slug}>
                  <Link to={`/projects/${project.slug}`}>{project.title}</Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col lg={3}>
            <div className="footer-title">Contact</div>
            <ul className="list-unstyled d-grid gap-2 mb-4">
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp {site.phone}</a></li>
              <li className="text-muted-stk">{site.location}</li>
            </ul>
            <div className="d-flex gap-3 fs-5">
              {site.socials.map((social) => (
                <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </Col>
        </Row>

        <div
          className="d-flex flex-column flex-md-row justify-content-between gap-2 mt-5 pt-4 small text-muted-stk font-mono"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <span>© {year} STACKO · {site.founder}</span>
          <span>Built in Venezuela, delivered worldwide.</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
