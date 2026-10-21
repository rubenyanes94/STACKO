import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faRobot, faGears, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { useCopy } from '../hooks/useCopy';
import { projects } from '../data/projects';

const deliverableIcons = [faRobot, faGears, faLayerGroup];

const Hero = () => {
  const { t, v, lang, isDevMode } = useCopy();
  const [titleStart, titleOutline, titleEnd] = v('hero.title');
  const statLabels = t('hero.stats');
  const stats = [`${projects.length}+`, '24/7', t('hero.statDays'), 'ES · EN'];

  return (
    <section className="hero grid-bg">
      <Container>
        <Row className="align-items-center gy-5">
          <Col lg={7}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`${lang}-${isDevMode}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
              >
                <div className="eyebrow">{v('hero.eyebrow')}</div>
                <h1 className="display-stk">
                  {titleStart}<span className="text-outline">{titleOutline}</span>{titleEnd}
                </h1>
                <p className="lead-stk mb-5">{v('hero.lead')}</p>
                <div className="d-flex flex-wrap gap-3">
                  <Link to="/#contact" className="btn-stk">
                    {v('hero.primary')} <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                  <Link to="/projects" className="btn-stk-outline">
                    {v('hero.secondary')}
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </Col>

          <Col lg={5} className="d-none d-md-block">
            {isDevMode ? (
              <div className="terminal" aria-hidden="true">
                <div className="terminal-bar">
                  <span /><span /><span />
                  <small className="ms-2 text-secondary">stacko@prod: ~</small>
                </div>
                <div className="terminal-body" key={lang}>
                  {t('hero.terminal').map((line, idx) => (
                    <motion.div
                      key={idx}
                      className={line.className}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.35, duration: 0.25 }}
                    >
                      {line.text || ' '}
                    </motion.div>
                  ))}
                  <span className="brand-cursor" style={{ background: '#e5e5e5' }} />
                </div>
              </div>
            ) : (
              <div className="card-stk p-4 p-xl-5" style={{ boxShadow: '0 30px 80px -30px rgba(0,0,0,0.25)' }}>
                <div className="d-flex justify-content-between align-items-center pb-3 mb-4" style={{ borderBottom: '1px solid var(--border)' }}>
                  <span className="fw-bold small text-uppercase" style={{ letterSpacing: '0.12em' }}>{t('hero.deliverTitle')}</span>
                  <span className="d-flex align-items-center gap-2 small text-muted-stk">
                    <span className="status-dot" /> {t('hero.available')}
                  </span>
                </div>
                {t('hero.deliverables').map((item, idx) => (
                  <div key={item.title} className="d-flex align-items-center gap-3 mb-4">
                    <div className="service-icon mb-0">
                      <FontAwesomeIcon icon={deliverableIcons[idx]} />
                    </div>
                    <div>
                      <div className="fw-bold">{item.title}</div>
                      <div className="small text-muted-stk">{item.text}</div>
                    </div>
                  </div>
                ))}
                <Link to="/ai-agents" className="link-arrow small">
                  {t('hero.agentsLink')} <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            )}
          </Col>
        </Row>

        <Row className="stat-strip gy-4">
          {stats.map((value, idx) => (
            <Col key={statLabels[idx]} xs={6} md={3}>
              <div className="stat-value">{value}</div>
              <div className="stat-label">{statLabels[idx]}</div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
