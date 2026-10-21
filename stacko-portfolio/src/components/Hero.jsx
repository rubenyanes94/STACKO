import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faRobot, faGears, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../context/theme';
import { projects } from '../data/projects';

const terminalLines = [
  { text: '$ stacko deploy --agent sales-assistant', className: '' },
  { text: '→ connecting knowledge base ......... done', className: 'dim' },
  { text: '→ training on brand voice ........... done', className: 'dim' },
  { text: '→ channels: whatsapp, web, instagram', className: 'dim' },
  { text: '✔ agent online · answering leads 24/7', className: 'ok' },
  { text: '', className: '' },
  { text: '$ stacko automate --process invoicing', className: '' },
  { text: '✔ 0 manual steps remaining', className: 'ok' },
];

const deliverables = [
  { icon: faRobot, title: 'AI Agents', text: 'Sell and support customers 24/7' },
  { icon: faGears, title: 'Automation', text: 'Repetitive work runs on its own' },
  { icon: faLayerGroup, title: 'Platforms', text: 'Web, SaaS and e-commerce that convert' },
];

const stats = [
  { value: `${projects.length}+`, label: 'Products shipped to production' },
  { value: '24/7', label: 'AI agents working for our clients' },
  { value: 'Days', label: 'From idea to working prototype' },
  { value: 'ES · EN', label: 'Venezuela and worldwide' },
];

const Hero = () => {
  const { isDevMode } = useTheme();

  return (
    <section className="hero grid-bg">
      <Container>
        <Row className="align-items-center gy-5">
          <Col lg={7}>
            <AnimatePresence mode="wait">
              <motion.div
                key={isDevMode ? 'dev' : 'business'}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
              >
                <div className="eyebrow">
                  {isDevMode ? 'stacko --mode=ai-first' : "Venezuela's first AI-specialized software company"}
                </div>
                <h1 className="display-stk">
                  {isDevMode ? (
                    <>We ship AI agents <span className="text-outline">&</span> software that runs your business.</>
                  ) : (
                    <>Your business, <span className="text-outline">powered</span> by AI.</>
                  )}
                </h1>
                <p className="lead-stk mb-5">
                  {isDevMode
                    ? 'LLM agents, automation pipelines and production-grade web platforms. React, Python, FastAPI and the latest models from Anthropic, OpenAI and NVIDIA — shipped in record time.'
                    : 'We design AI agents that sell and serve your customers 24/7, automate the work that slows your team down, and build the software your company needs to grow.'}
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Link to="/#contact" className="btn-stk">
                    {isDevMode ? 'start_project()' : 'Book a free consultation'} <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                  <Link to="/projects" className="btn-stk-outline">
                    {isDevMode ? 'ls ./projects' : 'See our work'}
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
                <div className="terminal-body">
                  {terminalLines.map((line, idx) => (
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
                  <span className="fw-bold small text-uppercase" style={{ letterSpacing: '0.12em' }}>What we deliver</span>
                  <span className="d-flex align-items-center gap-2 small text-muted-stk">
                    <span className="status-dot" /> Available
                  </span>
                </div>
                {deliverables.map((item) => (
                  <div key={item.title} className="d-flex align-items-center gap-3 mb-4">
                    <div className="service-icon mb-0">
                      <FontAwesomeIcon icon={item.icon} />
                    </div>
                    <div>
                      <div className="fw-bold">{item.title}</div>
                      <div className="small text-muted-stk">{item.text}</div>
                    </div>
                  </div>
                ))}
                <Link to="/ai-agents" className="link-arrow small">
                  How AI agents work <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            )}
          </Col>
        </Row>

        <Row className="stat-strip gy-4">
          {stats.map((stat) => (
            <Col key={stat.label} xs={6} md={3}>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
