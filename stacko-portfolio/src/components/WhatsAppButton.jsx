import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { whatsappLink } from '../data/site';

const WhatsAppButton = () => (
  <a
    href={whatsappLink()}
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-fab"
    aria-label="Chat with STACKO on WhatsApp"
    title="Chat on WhatsApp"
  >
    <FontAwesomeIcon icon={faWhatsapp} />
  </a>
);

export default WhatsAppButton;
