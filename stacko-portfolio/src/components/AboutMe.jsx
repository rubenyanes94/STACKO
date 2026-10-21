import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../context/theme';
import { site } from '../data/site';
import Reveal from './Reveal.jsx';

const principles = [
  { title: 'AI-first, always', text: 'We start every project by asking where AI multiplies the result.' },
  { title: 'Speed with quality', text: 'Prototypes in days, production code built to last.' },
  { title: 'Business outcomes', text: 'We measure success in hours saved and revenue gained, not lines of code.' },
];

const AboutMe = () => {
  const { isDevMode } = useTheme();

  return (
    <section id="about" className="section">
      <Container>
        <Row className="g-5 align-items-stretch">
          <Col lg={5}>
            <Reveal className="h-100">
              <div className="manifesto d-flex flex-column justify-content-between gap-5">
                <div className="font-mono small" style={{ opacity: 0.6 }}>/ manifesto</div>
                <div>
                  <div className="manifesto-line">Born in Venezuela.</div>
                  <div className="manifesto-line">Built for the world.</div>
                  <div className="manifesto-line" style={{ opacity: 0.45 }}>Powered by AI.</div>
                </div>
                <div className="font-mono small" style={{ opacity: 0.6 }}>
                  Founded by {site.founder}
                </div>
              </div>
            </Reveal>
          </Col>

          <Col lg={7}>
            <Reveal delay={0.1}>
              <div className="eyebrow">{isDevMode ? 'cat about.md' : 'About STACKO'}</div>
              <h2 className="heading-stk mb-4">
                The first Venezuelan company built entirely around artificial intelligence.
              </h2>
              <p className="text-muted-stk mb-4" style={{ fontSize: '1.05rem' }}>
                {isDevMode
                  ? 'STACKO combines senior full-stack engineering with the latest AI ecosystem — Claude, OpenAI, NVIDIA, OpenClaw and AI-native tooling like Cursor — to ship agents and platforms that hold up in production.'
                  : 'STACKO helps companies stop doing by hand what a machine can do better. We combine senior software engineering with the latest AI technology to build agents, automations and platforms that save time and grow revenue.'}
              </p>
              <p className="text-muted-stk mb-5" style={{ fontSize: '1.05rem' }}>
                We work with startups, SMEs and established companies in Venezuela and abroad — in Spanish or English,
                with a direct line to the people who actually build your product.
              </p>

              <div className="d-grid gap-4 mb-5">
                {principles.map((item, idx) => (
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
                  Work with us <FontAwesomeIcon icon={faArrowRight} />
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
