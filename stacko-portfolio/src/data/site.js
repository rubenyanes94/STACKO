import { faGithub, faLinkedin, faXTwitter, faMedium } from '@fortawesome/free-brands-svg-icons';

// Datos de contacto y marca. Cambia aquí y se actualiza en toda la web.
export const site = {
  name: 'STACKO',
  founder: 'Ruben Yanes',
  tagline: "Venezuela's first AI-specialized software company",
  email: 'rubeny.dev@gmail.com',
  phone: '+58 414-0180311',
  whatsapp: '584140180311',
  location: 'Venezuela · Serving clients worldwide',
  socials: [
    { icon: faGithub, url: 'https://github.com/rubenyanes94', label: 'GitHub' },
    { icon: faLinkedin, url: 'https://www.linkedin.com/in/ruben-yanes/', label: 'LinkedIn' },
    { icon: faXTwitter, url: 'https://x.com/rubeniyanes', label: 'X' },
    { icon: faMedium, url: 'https://medium.com/@rubeny.dev', label: 'Medium' },
  ],
};

export const whatsappLink = (message = "Hi STACKO! I'd like to talk about a project.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
