import React, { useState, useEffect, useRef } from 'react';
import { ThemeContext } from './theme';

const STORAGE_KEY = 'stacko-theme';

/**
 * La vista por defecto es BUSINESS: es la que ven Google y los clientes. La preferencia guardada
 * se aplica después de hidratar, para que el HTML prerenderizado y el primer render del cliente coincidan.
 */
export const ThemeProvider = ({ children }) => {
  const [isDevMode, setIsDevMode] = useState(false);
  const restored = useRef(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === 'dev') setIsDevMode(true);
    } catch {
      // Storage no disponible: se queda la vista por defecto.
    }
  }, []);

  useEffect(() => {
    const theme = isDevMode ? 'dev' : 'analyst';
    document.body.setAttribute('data-theme', theme);
    // No guardamos en la primera pasada para no pisar la preferencia antes de leerla.
    if (!restored.current) {
      restored.current = true;
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Storage bloqueado (modo privado): el tema sigue funcionando en memoria.
    }
  }, [isDevMode]);

  const toggleTheme = () => setIsDevMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDevMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
