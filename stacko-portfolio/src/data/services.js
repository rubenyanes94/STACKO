import { faRobot, faGears, faLayerGroup, faChartLine, faComments } from '@fortawesome/free-solid-svg-icons';

/**
 * Servicios: los textos están en i18n/translations.js (services.items.<id>) y las landings en
 * i18n/seo-content.js (servicePages.<id>). `page` indica a qué URL lleva la tarjeta y
 * `categories` qué proyectos se muestran como relacionados en la landing.
 */
export const services = [
  { id: 'ai-agents', icon: faRobot, page: { name: 'agents' } },
  { id: 'sales', icon: faComments, page: { name: 'service', params: { service: 'sales' } }, categories: ['ai', 'ecommerce'] },
  { id: 'automation', icon: faGears, page: { name: 'service', params: { service: 'automation' } }, categories: ['ai', 'saas'] },
  { id: 'software', icon: faLayerGroup, page: { name: 'service', params: { service: 'software' } }, categories: ['saas', 'ecommerce', 'web'] },
  { id: 'data', icon: faChartLine, page: { name: 'service', params: { service: 'data' } }, categories: ['saas'] },
];

export const getService = (id) => services.find((service) => service.id === id);
