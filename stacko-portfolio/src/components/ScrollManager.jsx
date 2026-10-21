import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// BrowserRouter no hace scroll solo: sube al cambiar de página y baja a la sección si hay #hash.
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollManager;
