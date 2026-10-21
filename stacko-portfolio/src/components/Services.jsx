import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useCopy } from '../hooks/useCopy';
import { services } from '../data/services';
import Reveal from './Reveal.jsx';

const Services = () => {
  const { t, v } = useCopy();
  const [titleLine1, titleLine2] = t('services.title');

  return (
    <section id="services" className="section">
      <Container>
        <Row className="mb-5 gy-3 align-items-end">
          <Col lg={7}>
            <div className="eyebrow">{v('services.eyebrow')}</div>
            <h2 className="heading-stk mb-0">
              {titleLine1} <br className="d-none d-md-inline" />
              {titleLine2}
            </h2>
          </Col>
          <Col lg={5}>
            <p className="text-muted-stk mb-0">{t('services.text')}</p>
          </Col>
        </Row>

        <Row className="g-4">
          {services.map((service, idx) => (
            <Col key={service.id} md={6} lg={3}>
              <Reveal delay={idx * 0.08} className="h-100">
                <div className="card-stk service-card">
                  <div className="service-icon">
                    <FontAwesomeIcon icon={service.icon} />
                  </div>
                  <h3 className="h5 fw-bold mb-3">{t(`services.items.${service.id}.title`)}</h3>
                  <p className="text-muted-stk small mb-0">{v(`services.items.${service.id}`)}</p>
                </div>
              </Reveal>
            </Col>
          ))}
        </Row>

        <div className="mt-5">
          <Link to="/ai-agents" className="link-arrow">
            {t('services.link')} <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Services;
