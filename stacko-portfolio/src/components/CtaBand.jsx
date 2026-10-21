import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { whatsappLink } from '../data/site';

// Bloque de cierre reutilizable: toda página termina invitando a contactar.
const CtaBand = ({
  title = 'Ready to put AI to work in your business?',
  text = 'Tell us about your idea. In a free 30-minute call we’ll show you what can be automated and how fast.',
}) => (
  <section className="cta-band">
    <Container>
      <div className="row align-items-center gy-4">
        <div className="col-lg-8">
          <h2 className="heading-stk mb-3">{title}</h2>
          <p className="mb-0" style={{ opacity: 0.75, maxWidth: '40rem' }}>{text}</p>
        </div>
        <div className="col-lg-4 d-flex flex-wrap gap-3 justify-content-lg-end">
          <Link to="/#contact" className="btn-stk">
            Book a free call <FontAwesomeIcon icon={faArrowRight} />
          </Link>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-stk-outline">
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
          </a>
        </div>
      </div>
    </Container>
  </section>
);

export default CtaBand;
