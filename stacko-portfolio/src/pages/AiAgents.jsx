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
import { useTheme } from '../context/theme';
import { getProjectBySlug } from '../data/projects';
import { usePageMeta } from '../hooks/usePageMeta';
import Reveal from '../components/Reveal.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import CtaBand from '../components/CtaBand.jsx';

const useCases = [
  { icon: faComments, title: 'Sales agent', text: 'Answers leads on WhatsApp, Instagram and your website in seconds, qualifies them and books meetings.' },
  { icon: faHeadset, title: 'Customer support', text: 'Resolves frequent questions 24/7 with your policies and hands complex cases to your team with full context.' },
  { icon: faBook, title: 'Internal knowledge assistant', text: 'Your team asks in plain language and gets answers from manuals, contracts and company data.' },
  { icon: faFileInvoice, title: 'Document processing', text: 'Reads invoices, orders and forms, extracts the data and loads it into your systems without typing.' },
  { icon: faCalendarCheck, title: 'Operations & scheduling', text: 'Coordinates appointments, reminders, follow-ups and approvals automatically.' },
  { icon: faChartPie, title: 'Reporting agent', text: 'Turns your data into daily summaries and alerts so you know what’s happening without opening a dashboard.' },
];

const steps = [
  { title: 'Connect your knowledge', dev: 'Ingest docs, catalogs and databases into a retrieval layer (RAG).', business: 'We gather your catalog, prices, policies and FAQs.' },
  { title: 'Design the agent', dev: 'Prompting, tool calling and guardrails tuned to your use case.', business: 'We define its personality, rules and what it can and can’t do.' },
  { title: 'Integrate the channels', dev: 'WhatsApp, web chat, CRM and internal APIs wired end to end.', business: 'It works where your customers already are: WhatsApp, web, social.' },
  { title: 'Measure and improve', dev: 'Conversation logs, evals and continuous iteration.', business: 'You see every conversation and we keep improving the results.' },
];

const stack = ['Claude API', 'OpenAI API', 'NVIDIA', 'OpenClaw', 'Python', 'FastAPI', 'React', 'PostgreSQL', 'WhatsApp Business API'];

const faqs = [
  {
    q: 'Will the agent sound like a robot?',
    a: 'No. We train it on your brand’s tone, products and real conversations, so it answers like your best employee — and it always knows when to hand over to a human.',
  },
  {
    q: 'How long does it take to launch?',
    a: 'A working prototype usually takes days. A production agent integrated with your channels takes a few weeks, depending on the systems it needs to connect to.',
  },
  {
    q: 'Is my company’s data safe?',
    a: 'Your data is only used to serve your agent. We apply access controls, keep sensitive data out of prompts where possible and work with providers that don’t train on your data.',
  },
  {
    q: 'Do I need technical knowledge?',
    a: 'Not at all. We handle everything technical. You tell us how your business works; we deliver an agent ready to work.',
  },
];

const AiAgents = () => {
  const { isDevMode } = useTheme();
  const caseStudy = getProjectBySlug('aks-academy');
  usePageMeta('AI Agents for Business', 'Custom AI agents that sell, support customers and automate operations 24/7. Built by STACKO in Venezuela.');

  return (
    <>
      <section className="hero grid-bg" style={{ minHeight: '80vh' }}>
        <Container>
          <div className="eyebrow">{isDevMode ? 'agents --list' : 'AI Agents'}</div>
          <h1 className="display-stk" style={{ maxWidth: '56rem' }}>
            An employee that never sleeps, <span className="text-outline">never forgets</span> and scales with you.
          </h1>
          <p className="lead-stk mb-5">
            {isDevMode
              ? 'Production LLM agents with retrieval, tool use and guardrails — integrated with WhatsApp, web and your internal systems.'
              : 'We build custom AI agents that answer your customers, close sales and run operations 24/7 — trained on your business, in your brand’s voice.'}
          </p>
          <div className="d-flex flex-wrap gap-3">
            <Link to="/#contact" className="btn-stk">
              Get your AI agent <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <a href="#use-cases" className="btn-stk-outline">What can it do?</a>
          </div>
        </Container>
      </section>

      <section id="use-cases" className="section">
        <Container>
          <div className="eyebrow">Use cases</div>
          <h2 className="heading-stk mb-5" style={{ maxWidth: '40rem' }}>One agent per problem. All working at once.</h2>
          <Row className="g-4">
            {useCases.map((item, idx) => (
              <Col key={item.title} md={6} lg={4}>
                <Reveal delay={(idx % 3) * 0.08} className="h-100">
                  <div className="card-stk service-card">
                    <div className="service-icon"><FontAwesomeIcon icon={item.icon} /></div>
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
              <div className="eyebrow">{isDevMode ? 'architecture' : 'How it works'}</div>
              <h2 className="heading-stk mb-4">From your know-how to a working agent.</h2>
              <p className="text-muted-stk mb-4">We work with the most advanced AI ecosystem available today.</p>
              <div className="d-flex flex-wrap gap-2">
                {stack.map((item) => <span key={item} className="tag">{item}</span>)}
              </div>
            </Col>
            <Col lg={{ span: 6, offset: 1 }}>
              {steps.map((step, idx) => (
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
                <div className="eyebrow">Case study</div>
                <h2 className="heading-stk mb-4">An AI sales assistant, live in production.</h2>
                <p className="text-muted-stk mb-4">{caseStudy.business.challenge}</p>
                <Link to={`/projects/${caseStudy.slug}`} className="link-arrow">
                  Read the full case <FontAwesomeIcon icon={faArrowRight} />
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
              <h2 className="heading-stk">Common questions</h2>
            </Col>
            <Col lg={8}>
              {faqs.map((faq) => (
                <details key={faq.q} className="faq-item">
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </Col>
          </Row>
        </Container>
      </section>

      <CtaBand title="Let’s design your first AI agent." />
    </>
  );
};

export default AiAgents;
