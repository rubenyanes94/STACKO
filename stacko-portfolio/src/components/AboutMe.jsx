import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useCopy } from '../hooks/useCopy';
import { site } from '../data/site';
import Reveal from './Reveal.jsx';

const AboutMe = () => {
  const { t, v } = useCopy();
  const manifesto = t('about.manifesto');

  return (
    <section id="about" className="section">
      <Container>
        <Row className="g-5 align-items-stretch">
          <Col lg={5}>
            <Reveal className="h-100">
              <div className="manifesto d-flex flex-column justify-content-between gap-5">
                <div className="font-mono small" style={{ opacity: 0.6 }}>/ manifesto</div>
                <div>
                  {manifesto.map((line, idx) => (
                    <div key={line} className="manifesto-line" style={idx === manifesto.length - 1 ? { opacity: 0.45 } : undefined}>
                      {line}
                    </div>
                  ))}
                </div>
                <div className="font-mono small" style={{ opacity: 0.6 }}>
                  {t('about.founded', { name: site.founder })}
                </div>
              </div>
            </Reveal>
          </Col>

          <Col lg={7}>
            <Reveal delay={0.1}>
              <div className="eyebrow">{v('about.eyebrow')}</div>
              <h2 className="heading-stk mb-4">{t('about.title')}</h2>
              <p className="text-muted-stk mb-4" style={{ fontSize: '1.05rem' }}>{v('about.body')}</p>
              <p className="text-muted-stk mb-5" style={{ fontSize: '1.05rem' }}>{t('about.body2')}</p>

              <div className="d-grid gap-4 mb-5">
                {t('about.principles').map((item, idx) => (
                  <div key={item.title} className="d-flex gap-4">
                    <span className="font-mono text-muted-stk small pt-1">0{idx + 1}</span>
                    <div>
                      <div className="fw-bold">{item.title}</div>
                      <div className="text-muted-stk small">{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="d-flex flex-wrap align-items-center gap-4">
                <Link to="/#contact" className="btn-stk">
                  {t('about.cta')} <FontAwesomeIcon icon={faArrowRight} />
                </Link>
                <div className="d-flex gap-3 fs-5">
                  {site.socials.slice(0, 2).map((social) => (
                    <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="text-reset">
                      <FontAwesomeIcon icon={social.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
