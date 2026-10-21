import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCopy } from '../hooks/useCopy';
import { site, whatsappLink } from '../data/site';
import { projects } from '../data/projects';
import { services } from '../data/services';

const Footer = () => {
  const { t, v, to, section } = useCopy();
  const year = new Date().getFullYear();

  return (
    <footer className="footer-stk">
      <Container>
        <Row className="gy-5">
          <Col lg={3}>
            <Link to={to('home')} className="brand d-inline-block mb-3">
              STACKO<span className="brand-cursor" aria-hidden="true" />
            </Link>
            <p className="text-muted-stk mb-4" style={{ maxWidth: '22rem' }}>
              {t('site.tagline')}. {t('footer.description')}
            </p>
            <div className="d-flex align-items-center gap-2 small font-mono text-muted-stk">
              <span className="status-dot" />
              {v('footer.status')}
            </div>
          </Col>

          <Col xs={6} lg={3}>
            <div className="footer-title">{t('footer.services')}</div>
            <ul className="list-unstyled d-grid gap-2 m-0">
              {services.map((service) => (
                <li key={service.id}>
                  <Link to={to(service.page.name, service.page.params)}>{t(`services.items.${service.id}.title`)}</Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col xs={6} lg={2}>
            <div className="footer-title">{t('footer.company')}</div>
            <ul className="list-unstyled d-grid gap-2 m-0">
              <li><Link to={to('projects')}>{t('nav.work.business')}</Link></li>
              <li><Link to={to('agents')}>{t('nav.agents.business')}</Link></li>
              <li><Link to={section('services')}>{t('nav.services.business')}</Link></li>
              <li><Link to={section('about')}>{t('nav.about.business')}</Link></li>
            </ul>
          </Col>

          <Col xs={6} lg={2}>
            <div className="footer-title">{t('footer.cases')}</div>
            <ul className="list-unstyled d-grid gap-2 m-0">
              {projects.filter((project) => project.featured).slice(0, 4).map((project) => (
                <li key={project.slug}>
                  <Link to={to('project', { slug: project.slug })}>{project.title}</Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col xs={6} lg={2}>
            <div className="footer-title">{t('footer.contact')}</div>
            <ul className="list-unstyled d-grid gap-2 mb-4">
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li>
                <a href={whatsappLink(t('site.whatsappMessage'))} target="_blank" rel="noopener noreferrer">
                  WhatsApp {site.phone}
                </a>
              </li>
              <li className="text-muted-stk">{t('site.location')}</li>
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
          <span>{t('footer.built')}</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
