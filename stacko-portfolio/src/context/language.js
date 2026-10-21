import { createContext, useContext } from 'react';
import { translations } from '../i18n/translations';
import { LANGUAGES, DEFAULT_LANG, pathFor } from '../i18n/routes';

export { LANGUAGES };

const resolve = (dictionary, key) => key.split('.').reduce((node, part) => node?.[part], dictionary);

// Busca la clave en el idioma activo, cae a inglés si falta y sustituye {variables} en textos.
export const translate = (lang, key, vars) => {
  const value = resolve(translations[lang], key) ?? resolve(translations.en, key) ?? key;
  if (typeof value !== 'string' || !vars) return value;
  return value.replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? '');
};

export const LanguageContext = createContext({
  lang: DEFAULT_LANG,
  setLang: () => {},
  t: (key, vars) => translate(DEFAULT_LANG, key, vars),
  to: (name, params) => pathFor(name, DEFAULT_LANG, params),
});

export const useLanguage = () => useContext(LanguageContext);
