import React from 'react';
import { useTheme } from '../context/theme';
import { useLanguage } from '../context/language';

// Cambia entre la vista técnica (DEV) y la de negocio (BUSINESS) de toda la web.
const ThemeToggle = () => {
  const { isDevMode, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <div className="theme-toggle" role="group" aria-label={t('toggles.view')}>
      <button type="button" aria-pressed={isDevMode} onClick={() => !isDevMode && toggleTheme()}>
        {t('toggles.dev')}
      </button>
      <button type="button" aria-pressed={!isDevMode} onClick={() => isDevMode && toggleTheme()}>
        {t('toggles.business')}
      </button>
    </div>
  );
};

export default ThemeToggle;
