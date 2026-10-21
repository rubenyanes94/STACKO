import { useEffect } from 'react';

const DEFAULT_TITLE = 'STACKO — AI Agents & Software Company in Venezuela';

// Título y meta description por página (SEO y previews al compartir).
export const usePageMeta = (title, description) => {
  useEffect(() => {
    document.title = title ? `${title} | STACKO` : DEFAULT_TITLE;
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    }
  }, [title, description]);
};
