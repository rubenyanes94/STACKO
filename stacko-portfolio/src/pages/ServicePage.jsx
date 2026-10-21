import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useCopy } from '../hooks/useCopy';
import { serviceIdFromSlug } from '../i18n/routes';
import { getService } from '../data/services';
import { getProjects } from '../data/projects';
import Reveal from '../components/Reveal.jsx';
import Process from '../components/Process.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import CtaBand from '../components/CtaBand.jsx';
import NotFound from './NotFound.jsx';

/**
 * Landing de un servicio (/servicios/:service). Cada una apunta a una búsqueda concreta en Google:
 * el H1, la meta description (seo/head.js) y las FAQ (JSON-LD FAQPage) salen de servicePages.<id>.
 */
const ServicePage = () => {
  const { service: slug } = useParams();
  const { t, to, section, lang } = useCopy();
  const id = serviceIdFromSlug(slug, lang);
  const service = getService(id);

  if (!service) return <NotFound />;

  const content = t(`servicePages.${id}`);
  const [titleStart, titleOutline, titleEnd] = content.title;
  const related = getProjects(lang).filter((project) => service.categories?.includes(project.category)).slice(0, 2);

  return (
    <>
      <section className="hero grid-bg" style={{ minHeight: '75vh' }}>
        <Container>
          <div className="service-icon mb-4">
            <FontAwesomeIcon icon={service.icon} />
          </div>
          <div className="eyebrow">{content.eyebrow}</div>
          <h1 className="display-stk" style={{ maxWidth: '58rem' }}>
            {titleStart}<span className="text-outline">{titleOutline}</span>{titleEnd}
          </h1>
          <p className="lead-stk mb-5" style={{ maxWidth: '44rem' }}>{content.lead}</p>
          <div className="d-flex flex-wrap gap-3">
            <Link to={section('contact')} className="btn-stk">
              {t('servicePage.primary')} <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <Link to={to('projects')} className="btn-stk-outline">{t('servicePage.secondary')}</Link>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="eyebrow">{t('servicePage.problemsEyebrow')}</div>
          <h2 className="heading-stk mb-5">{content.problemsTitle}</h2>
          <Row className="g-4">
            {content.problems.map((problem, idx) => (
              <Col key={problem} md={4}>
                <Reveal delay={idx * 0.08} className="h-100">
                  <p className="problem-item mb-0">{problem}</p>
                </Reveal>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section section-soft">
        <Container>
          <Row className="g-5">
            <Col lg={6}>
              <div className="eyebrow">{t('servicePage.benefitsEyebrow')}</div>
              <h2 className="heading-stk mb-5">{content.benefitsTitle}</h2>
              <Row className="g-4">
                {content.benefits.map((benefit) => (
                  <Col key={benefit.title} sm={6}>
                    <h3 className="h6 fw-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-stk small mb-0">{benefit.text}</p>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col lg={{ span: 5, offset: 1 }}>
              <div className="card-stk p-4 p-md-5" style={{ background: 'var(--bg)', height: 'auto' }}>
                <div className="eyebrow">{t('servicePage.deliverablesEyebrow')}</div>
                <h2 className="h4 fw-bold mb-4">{content.deliverablesTitle}</h2>
                <ul className="check-list">
                  {content.deliverables.map((item) => (
                    <li key={item}>
                      <FontAwesomeIcon icon={faCheck} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Process />

      {related.length > 0 && (
        <section className="section">
          <Container>
            <div className="eyebrow">{t('servicePage.related')}</div>
            <h2 className="heading-stk mb-5">{t('featured.title')}</h2>
            <Row className="g-4">
              {related.map((project) => (
                <Col key={project.slug} md={6}>
                  <ProjectCard project={project} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      )}

      <section className="section">
        <Container>
          <Row className="g-5">
            <Col lg={4}>
              <div className="eyebrow">FAQ</div>
              <h2 className="heading-stk">{t('servicePage.faq')}</h2>
            </Col>
            <Col lg={8}>
              {content.faqs.map((faq) => (
                <details key={faq.q} className="faq-item">
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </Col>
          </Row>
        </Container>
      </section>

      <CtaBand title={content.cta} />
    </>
  );
};

export default ServicePage;
