import React, { useEffect, useState } from 'react';
import { useLanguage, translate } from '../context/language';
import { LANG_STORAGE_KEY } from '../context/LanguageContext.jsx';

/**
 * Si el navegador del visitante está en otro idioma y aún no eligió uno, le sugerimos cambiar.
 * No redirigimos automáticamente: Google recomienda no forzar redirecciones por idioma.
 */
const LanguageSuggestion = () => {
  const { lang, setLang } = useLanguage();
  const [suggested, setSuggested] = useState(null);

  useEffect(() => {
    let saved = null;
    try {
      saved = localStorage.getItem(LANG_STORAGE_KEY);
    } catch {
      // Sin storage: seguimos evaluando por el idioma del navegador.
    }
    const browser = navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
    setSuggested(!saved && browser !== lang ? browser : null);
  }, [lang]);

  if (!suggested) return null;

  const dismiss = () => {
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      // Sin storage: solo ocultamos el aviso.
    }
    setSuggested(null);
  };

  return (
    <div className="lang-suggestion" role="region" lang={suggested}>
      <span>{translate(suggested, 'seo.languageBanner')}</span>
      <button type="button" className="btn-stk py-1 px-3" onClick={() => setLang(suggested)}>
        {translate(suggested, 'seo.languageSwitch')}
      </button>
      <button type="button" className="lang-suggestion-close" onClick={dismiss} aria-label={translate(suggested, 'seo.dismiss')}>
        ×
      </button>
    </div>
  );
};

export default LanguageSuggestion;
