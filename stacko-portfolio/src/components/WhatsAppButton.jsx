import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useLanguage } from '../context/language';
import { whatsappLink } from '../data/site';

const WhatsAppButton = () => {
  const { t } = useLanguage();

  return (
    <a
      href={whatsappLink(t('site.whatsappMessage'))}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="WhatsApp"
      title="WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  );
};

export default WhatsAppButton;
