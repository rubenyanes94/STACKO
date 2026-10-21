import { faGithub, faLinkedin, faXTwitter, faMedium } from '@fortawesome/free-brands-svg-icons';

// Datos de contacto y marca. Cambia aquí y se actualiza en toda la web.
// El eslogan, la ubicación y el mensaje de WhatsApp se traducen en i18n/translations.js → site.
export const site = {
  name: 'STACKO',
  founder: 'Ruben Yanes',
  email: 'contact@stackolabs.com',
  phone: '+58 414-0180311',
  whatsapp: '584140180311',
  socials: [
    { icon: faGithub, url: 'https://github.com/rubenyanes94', label: 'GitHub' },
    { icon: faLinkedin, url: 'https://www.linkedin.com/in/ruben-yanes/', label: 'LinkedIn' },
    { icon: faXTwitter, url: 'https://x.com/rubeniyanes', label: 'X' },
    { icon: faMedium, url: 'https://medium.com/@rubeny.dev', label: 'Medium' },
  ],
};

export const whatsappLink = (message) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
