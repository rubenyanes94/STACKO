import { useTheme } from '../context/theme';
import { useLanguage } from '../context/language';

/**
 * Atajo para los textos del sitio:
 *   t('hero.title')       → texto en el idioma activo
 *   v('hero.lead')        → igual, eligiendo la variante de la vista activa (`dev` o `business`)
 *   to('projects')        → URL de la página en el idioma activo (/proyectos o /en/projects)
 *   section('contact')    → ancla de la home en el idioma activo (/#contact o /en#contact)
 */
export const useCopy = () => {
  const { isDevMode } = useTheme();
  const { lang, t, to } = useLanguage();
  const view = isDevMode ? 'dev' : 'business';

  return {
    t,
    v: (key, vars) => t(`${key}.${view}`, vars),
    to,
    section: (id) => `${to('home')}#${id}`,
    lang,
    isDevMode,
  };
};
