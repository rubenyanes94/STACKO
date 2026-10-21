import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LanguageContext, translate } from './language';
import { langFromPath, matchPath, pathFor } from '../i18n/routes';

export const LANG_STORAGE_KEY = 'stacko-lang';

/**
 * El idioma lo define la URL (/ → español, /en → inglés), así cada idioma tiene sus propias páginas indexables.
 * Cambiar de idioma navega a la misma página en el otro idioma y recuerda la preferencia.
 */
export const LanguageProvider = ({ children }) => {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  const lang = langFromPath(pathname);

  const value = useMemo(() => {
    const setLang = (next) => {
      try {
        localStorage.setItem(LANG_STORAGE_KEY, next);
      } catch {
        // Storage bloqueado: igual cambiamos de idioma.
      }
      if (next === lang) return;
      const { name, params } = matchPath(pathname);
      navigate((name ? pathFor(name, next, params) : pathFor('home', next)) + hash);
    };

    return {
      lang,
      setLang,
      t: (key, vars) => translate(lang, key, vars),
      to: (name, params) => pathFor(name, lang, params),
    };
  }, [lang, pathname, hash, navigate]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
