import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faComments,
  faHeadset,
  faBook,
  faFileInvoice,
  faCalendarCheck,
  faChartPie,
} from '@fortawesome/free-solid-svg-icons';
import { useCopy } from '../hooks/useCopy';
import { getProjectBySlug } from '../data/projects';
import Reveal from '../components/Reveal.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import CtaBand from '../components/CtaBand.jsx';

// Mismo orden que agents.useCases en i18n/translations.js
const useCaseIcons = [faComments, faHeadset, faBook, faFileInvoice, faCalendarCheck, faChartPie];

const stack = ['Claude API', 'OpenAI API', 'NVIDIA', 'OpenClaw', 'Python', 'FastAPI', 'React', 'PostgreSQL', 'WhatsApp Business API'];

const AiAgents = () => {
  const { t, v, lang, isDevMode, to, section } = useCopy();
  const caseStudy = getProjectBySlug('aks-academy', lang);
  const [titleStart, titleOutline, titleEnd] = t('agents.title');

  return (
    <>
      <section className="hero grid-bg" style={{ minHeight: '80vh' }}>
        <Container>
          <div className="eyebrow">{v('agents.eyebrow')}</div>
          <h1 className="display-stk" style={{ maxWidth: '56rem' }}>
            {titleStart}<span className="text-outline">{titleOutline}</span>{titleEnd}
          </h1>
          <p className="lead-stk mb-5">{v('agents.lead')}</p>
          <div className="d-flex flex-wrap gap-3">
            <Link to={section('contact')} className="btn-stk">
              {t('agents.primary')} <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <a href="#use-cases" className="btn-stk-outline">{t('agents.secondary')}</a>
          </div>
        </Container>
      </section>

      <section id="use-cases" className="section">
        <Container>
          <div className="eyebrow">{t('agents.useCasesEyebrow')}</div>
          <h2 className="heading-stk mb-5" style={{ maxWidth: '40rem' }}>{t('agents.useCasesTitle')}</h2>
          <Row className="g-4">
            {t('agents.useCases').map((item, idx) => (
              <Col key={item.title} md={6} lg={4}>
                <Reveal delay={(idx % 3) * 0.08} className="h-100">
                  <div className="card-stk service-card">
                    <div className="service-icon"><FontAwesomeIcon icon={useCaseIcons[idx]} /></div>
                    <h3 className="h5 fw-bold mb-2">{item.title}</h3>
                    <p className="text-muted-stk small mb-0">{item.text}</p>
                  </div>
                </Reveal>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section section-soft">
        <Container>
          <Row className="g-5">
            <Col lg={5}>
              <div className="eyebrow">{v('agents.howEyebrow')}</div>
              <h2 className="heading-stk mb-4">{t('agents.howTitle')}</h2>
              <p className="text-muted-stk mb-4">{t('agents.howText')}</p>
              <div className="d-flex flex-wrap gap-2">
                {stack.map((item) => <span key={item} className="tag">{item}</span>)}
              </div>
            </Col>
            <Col lg={{ span: 6, offset: 1 }}>
              {t('agents.steps').map((step, idx) => (
                <Reveal key={step.title} delay={idx * 0.08}>
                  <div className="d-flex gap-4 py-4" style={{ borderBottom: '1px solid var(--border)' }}>
                    <span className="process-number">0{idx + 1}</span>
                    <div>
                      <h3 className="h5 fw-bold mb-1">{step.title}</h3>
                      <p className="text-muted-stk small mb-0">{isDevMode ? step.dev : step.business}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </Col>
          </Row>
        </Container>
      </section>

      {caseStudy && (
        <section className="section">
          <Container>
            <Row className="g-5 align-items-center">
              <Col lg={5}>
                <div className="eyebrow">{t('agents.caseEyebrow')}</div>
                <h2 className="heading-stk mb-4">{t('agents.caseTitle')}</h2>
                <p className="text-muted-stk mb-4">{caseStudy.business.challenge}</p>
                <Link to={to('project', { slug: caseStudy.slug })} className="link-arrow">
                  {t('agents.caseLink')} <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </Col>
              <Col lg={{ span: 6, offset: 1 }}>
                <ProjectCard project={caseStudy} />
              </Col>
            </Row>
          </Container>
        </section>
      )}

      <section className="section">
        <Container>
          <Row className="g-5">
            <Col lg={4}>
              <div className="eyebrow">FAQ</div>
              <h2 className="heading-stk">{t('agents.faqTitle')}</h2>
            </Col>
            <Col lg={8}>
              {t('agents.faqs').map((faq) => (
                <details key={faq.q} className="faq-item">
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </Col>
          </Row>
        </Container>
      </section>

      <CtaBand title={t('cta.agents')} />
    </>
  );
};

export default AiAgents;
