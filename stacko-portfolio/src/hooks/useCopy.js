import { useTheme } from '../context/theme';
import { useLanguage } from '../context/language';

/**
 * Atajo para los textos del sitio:
 *   t('hero.title')       → texto en el idioma activo
 *   v('hero.lead')        → igual, eligiendo la variante de la vista activa (`dev` o `business`)
 */
export const useCopy = () => {
  const { isDevMode } = useTheme();
  const { lang, t } = useLanguage();
  const view = isDevMode ? 'dev' : 'business';

  return { t, v: (key, vars) => t(`${key}.${view}`, vars), lang, isDevMode };
};
