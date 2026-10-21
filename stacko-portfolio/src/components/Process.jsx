import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '../context/theme';
import { processSteps } from '../data/services';
import Reveal from './Reveal.jsx';

const Process = () => {
  const { isDevMode } = useTheme();

  return (
    <section className="section section-soft">
      <Container>
        <div className="eyebrow">{isDevMode ? 'pipeline.run()' : 'How we work'}</div>
        <h2 className="heading-stk mb-5" style={{ maxWidth: '40rem' }}>
          From first call to a system that works for you.
        </h2>
        <Row className="g-4 g-lg-5">
          {processSteps.map((item, idx) => (
            <Col key={item.step} md={6} lg={3}>
              <Reveal delay={idx * 0.08}>
                <div className="process-step">
                  <div className="process-number mb-3">{item.step}</div>
                  <h3 className="h5 fw-bold mb-2">{item.title}</h3>
                  <p className="text-muted-stk small mb-0">{item.text}</p>
                </div>
              </Reveal>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Process;
