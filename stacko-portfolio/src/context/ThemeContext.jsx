import React, { useState, useEffect } from 'react';
import { ThemeContext } from './theme';

const STORAGE_KEY = 'stacko-theme';

// Recuerda la vista elegida por el visitante; si el storage no está disponible, arranca en DEV.
const readInitialMode = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) !== 'analyst';
  } catch {
    return true;
  }
};

export const ThemeProvider = ({ children }) => {
  const [isDevMode, setIsDevMode] = useState(readInitialMode);

  useEffect(() => {
    const theme = isDevMode ? 'dev' : 'analyst';
    document.body.setAttribute('data-theme', theme);
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
