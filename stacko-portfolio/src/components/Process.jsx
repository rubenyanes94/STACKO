import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useCopy } from '../hooks/useCopy';
import Reveal from './Reveal.jsx';

const Process = () => {
  const { t, v } = useCopy();

  return (
    <section className="section section-soft">
      <Container>
        <div className="eyebrow">{v('process.eyebrow')}</div>
        <h2 className="heading-stk mb-5" style={{ maxWidth: '40rem' }}>{t('process.title')}</h2>
        <Row className="g-4 g-lg-5">
          {t('process.steps').map((item, idx) => (
            <Col key={item.title} md={6} lg={3}>
              <Reveal delay={idx * 0.08}>
                <div className="process-step">
                  <div className="process-number mb-3">0{idx + 1}</div>
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
