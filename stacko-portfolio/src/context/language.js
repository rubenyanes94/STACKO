import { createContext, useContext } from 'react';
import { translations } from '../i18n/translations';

export const LANGUAGES = ['es', 'en'];

const resolve = (dictionary, key) => key.split('.').reduce((node, part) => node?.[part], dictionary);

// Busca la clave en el idioma activo, cae a inglés si falta y sustituye {variables} en textos.
export const translate = (lang, key, vars) => {
  const value = resolve(translations[lang], key) ?? resolve(translations.en, key) ?? key;
  if (typeof value !== 'string' || !vars) return value;
  return value.replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? '');
};

export const LanguageContext = createContext({
  lang: 'en',
  setLang: () => {},
  t: (key, vars) => translate('en', key, vars),
});

export const useLanguage = () => useContext(LanguageContext);
