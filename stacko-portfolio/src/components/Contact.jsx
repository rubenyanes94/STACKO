import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope, faCheck, faCopy, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useTheme } from '../context/theme';
import { site, whatsappLink } from '../data/site';
import { services } from '../data/services';

// Con VITE_FORMSPREE_ID definido (.env) el formulario envía directo a tu correo vía Formspree.
// Sin él, abre el cliente de correo del visitante con el mensaje ya redactado.
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;

const initialForm = { name: '', email: '', company: '', service: '', message: '' };

const Contact = () => {
  const { isDevMode } = useTheme();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [copied, setCopied] = useState(false);

  const update = (field) => (event) => setForm((prev) => ({ ...prev, [field]: event.target.value }));

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!FORMSPREE_ID) {
      const subject = `New project — ${form.name}${form.company ? ` (${form.company})` : ''}`;
      const body = `${form.message}\n\nService: ${form.service || '-'}\nCompany: ${form.company || '-'}\nReply to: ${form.email}`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error(`Formspree responded ${response.status}`);
      setStatus('sent');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section grid-bg">
      <Container>
        <Row className="g-5">
          <Col lg={5}>
            <div className="eyebrow">{isDevMode ? 'ping stacko' : 'Contact'}</div>
            <h2 className="heading-stk mb-4">Let’s build something that works for you.</h2>
            <p className="text-muted-stk mb-5">
              Tell us what you want to automate or build. We reply within 24 hours with next steps — the first
              consultation is free.
            </p>

            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="contact-channel">
              <span className="channel-icon"><FontAwesomeIcon icon={faWhatsapp} /></span>
              <span>
                <span className="d-block fw-bold">WhatsApp</span>
                <span className="small text-muted-stk">{site.phone} · fastest reply</span>
              </span>
            </a>
            <button type="button" className="contact-channel" onClick={copyEmail}>
              <span className="channel-icon"><FontAwesomeIcon icon={copied ? faCheck : faEnvelope} /></span>
              <span className="flex-grow-1">
                <span className="d-block fw-bold">{site.email}</span>
                <span className="small text-muted-stk">{copied ? 'Copied to clipboard' : 'Click to copy'}</span>
              </span>
              <FontAwesomeIcon icon={faCopy} className="text-muted-stk small" />
            </button>
            <div className="contact-channel">
              <span className="channel-icon"><FontAwesomeIcon icon={faLocationDot} /></span>
              <span className="small text-muted-stk">{site.location}</span>
            </div>
          </Col>

          <Col lg={{ span: 6, offset: 1 }}>
            <div className="card-stk p-4 p-md-5" style={{ background: 'var(--bg)' }}>
              {status === 'sent' ? (
                <div className="text-center py-5">
                  <div className="service-icon mx-auto"><FontAwesomeIcon icon={faCheck} /></div>
                  <h3 className="h4 fw-bold">Message received.</h3>
                  <p className="text-muted-stk mb-0">We’ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <Form className="form-stk d-grid gap-3" onSubmit={handleSubmit}>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Label htmlFor="contact-name">Name</Form.Label>
                      <Form.Control id="contact-name" required value={form.name} onChange={update('name')} placeholder="Your name" />
                    </Col>
                    <Col md={6}>
                      <Form.Label htmlFor="contact-email">Email</Form.Label>
                      <Form.Control id="contact-email" type="email" required value={form.email} onChange={update('email')} placeholder="you@company.com" />
                    </Col>
                  </Row>
                  <div>
                    <Form.Label htmlFor="contact-company">Company</Form.Label>
                    <Form.Control id="contact-company" value={form.company} onChange={update('company')} placeholder="Optional" />
                  </div>
                  <div>
                    <Form.Label htmlFor="contact-service">What do you need?</Form.Label>
                    <Form.Select id="contact-service" value={form.service} onChange={update('service')}>
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.title}>{service.title}</option>
                      ))}
                      <option value="Not sure yet">Not sure yet</option>
                    </Form.Select>
                  </div>
                  <div>
                    <Form.Label htmlFor="contact-message">Project details</Form.Label>
                    <Form.Control
                      id="contact-message"
                      as="textarea"
                      rows={5}
                      required
                      value={form.message}
                      onChange={update('message')}
                      placeholder="What process would you like to automate or what do you want to build?"
                    />
                  </div>
                  {status === 'error' && (
                    <p className="small mb-0" style={{ color: '#ef4444' }}>
                      Something went wrong. Please write us on WhatsApp or by email.
                    </p>
                  )}
                  <button type="submit" className="btn-stk mt-2" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : 'Send message'} <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </Form>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
