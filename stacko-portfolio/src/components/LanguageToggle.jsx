import React from 'react';
import { useLanguage, LANGUAGES } from '../context/language';

const LanguageToggle = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="lang-toggle" role="group" aria-label={t('toggles.language')}>
      {LANGUAGES.map((code) => (
        <button key={code} type="button" aria-pressed={lang === code} onClick={() => setLang(code)} lang={code}>
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
