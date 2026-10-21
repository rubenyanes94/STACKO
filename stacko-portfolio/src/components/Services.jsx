import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../context/theme';
import { services } from '../data/services';
import Reveal from './Reveal.jsx';

const Services = () => {
  const { isDevMode } = useTheme();

  return (
    <section id="services" className="section">
      <Container>
        <Row className="mb-5 gy-3 align-items-end">
          <Col lg={7}>
            <div className="eyebrow">{isDevMode ? 'services.map()' : 'What we do'}</div>
            <h2 className="heading-stk mb-0">
              AI is not a feature for us. <br className="d-none d-md-inline" />
              It’s the whole company.
            </h2>
          </Col>
          <Col lg={5}>
            <p className="text-muted-stk mb-0">
              Every project starts from one question: what can AI do here that saves time or makes money? Then we
              build the software around it.
            </p>
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
                  <h3 className="h5 fw-bold mb-3">{service.title}</h3>
                  <p className="text-muted-stk small mb-0">{isDevMode ? service.dev : service.business}</p>
                </div>
              </Reveal>
            </Col>
          ))}
        </Row>

        <div className="mt-5">
          <Link to="/ai-agents" className="link-arrow">
            Explore our AI agents <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Services;
