import React from 'react';
import { useTheme } from '../context/theme';

// Cambia entre la vista técnica (DEV) y la de negocio (BUSINESS) de toda la web.
const ThemeToggle = () => {
  const { isDevMode, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle" role="group" aria-label="Choose site view">
      <button type="button" aria-pressed={isDevMode} onClick={() => !isDevMode && toggleTheme()}>
        DEV
      </button>
      <button type="button" aria-pressed={!isDevMode} onClick={() => isDevMode && toggleTheme()}>
        BUSINESS
      </button>
    </div>
  );
};

export default ThemeToggle;
