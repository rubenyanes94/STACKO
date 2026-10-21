import { useEffect } from 'react';
import { useLanguage } from '../context/language';

const DEFAULT_TITLE = {
  en: 'STACKO — AI Agents & Software Company in Venezuela',
  es: 'STACKO — Agentes de IA y desarrollo de software en Venezuela',
};

// Título y meta description por página e idioma (SEO y previews al compartir).
export const usePageMeta = (title, description) => {
  const { lang } = useLanguage();

  useEffect(() => {
    document.title = title ? `${title} | STACKO` : DEFAULT_TITLE[lang];
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    }
  }, [title, description, lang]);
};
