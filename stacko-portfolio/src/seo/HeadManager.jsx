import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getHead, headTags } from './head';

// Al navegar en el navegador, reemplaza los tags SEO del <head> (los generados en el build llevan data-head).
const HeadManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const head = getHead(pathname);
    document.documentElement.lang = head.lang;
    document.head.querySelectorAll('[data-head]').forEach((node) => node.remove());

    for (const { tag, attrs = {}, text } of headTags(head)) {
      const node = document.createElement(tag);
      Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
      if (text) node.textContent = text;
      node.setAttribute('data-head', '');
      document.head.appendChild(node);
    }
  }, [pathname]);

  return null;
};

export default HeadManager;
