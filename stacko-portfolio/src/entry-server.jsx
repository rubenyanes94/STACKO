import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { config } from '@fortawesome/fontawesome-svg-core';
import App from './App.jsx';

config.autoAddCss = false;

// Usado por scripts/prerender.mjs para generar el HTML estático de cada URL.
export const render = (url) =>
  renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  );

export { getHead, headTags, allPaths, SITE_URL } from './seo/head';
