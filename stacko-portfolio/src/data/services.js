import { faRobot, faGears, faLayerGroup, faChartLine } from '@fortawesome/free-solid-svg-icons';

export const services = [
  {
    id: 'ai-agents',
    icon: faRobot,
    title: 'AI Agents & Assistants',
    dev: 'LLM agents with tool use, RAG over your data and integrations with WhatsApp, web and internal systems.',
    business: 'Digital employees that sell, answer customers and resolve requests 24/7, in your brand’s voice.',
  },
  {
    id: 'automation',
    icon: faGears,
    title: 'Process Automation',
    dev: 'Event-driven pipelines, API orchestration and AI steps that remove manual work end to end.',
    business: 'We find the repetitive tasks slowing your team down and make them run on their own.',
  },
  {
    id: 'platforms',
    icon: faLayerGroup,
    title: 'Web Platforms & SaaS',
    dev: 'Production-grade React front-ends and Python/Node back-ends, built for performance and scale.',
    business: 'Websites, stores and internal platforms that look world-class and convert visitors into clients.',
  },
  {
    id: 'data',
    icon: faChartLine,
    title: 'Data & Business Intelligence',
    dev: 'Data modeling, ETL and dashboards that feed both your team and your AI agents.',
    business: 'Clear dashboards and insights so every decision is backed by your own data.',
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Discover',
    text: 'A free call to understand your business, map the processes and spot where AI creates the most value.',
  },
  {
    step: '02',
    title: 'Prototype',
    text: 'A working prototype in days, not months, so you see real results before scaling the investment.',
  },
  {
    step: '03',
    title: 'Build & Integrate',
    text: 'We build the production solution and connect it to the tools your team already uses.',
  },
  {
    step: '04',
    title: 'Scale & Support',
    text: 'We monitor, measure and improve the system continuously as your business grows.',
  },
];
