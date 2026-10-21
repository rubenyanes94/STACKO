import React, { useState, useEffect, useMemo } from 'react';
import { LanguageContext, LANGUAGES, translate } from './language';

const STORAGE_KEY = 'stacko-lang';

// Prioridad: elección guardada del visitante → idioma del navegador (es-VE, es-MX… → es) → inglés.
const readInitialLang = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (LANGUAGES.includes(saved)) return saved;
  } catch {
    // Storage no disponible: seguimos con el idioma del navegador.
  }
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(readInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Storage bloqueado: el idioma sigue funcionando en memoria.
    }
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: (key, vars) => translate(lang, key, vars) }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
