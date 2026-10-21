# STACKO — sitio web

Sitio de STACKO: empresa venezolana especializada en IA (agentes, automatización) y portafolio de proyectos.
React 18 + Vite + React-Bootstrap + Framer Motion.

## Desarrollo

```bash
npm install
npm run dev      # servidor local
npm run lint     # ESLint
npm run build    # build + prerender: un HTML estático por página en dist/
npm run preview  # sirve dist/ como en producción (http://localhost:4173)
```

## Estructura

```
src/
  data/
    projects.js   ← proyectos (fuente única: home, /projects, casos de estudio)
    services.js   ← iconos de servicios (los textos están en i18n)
    site.js       ← email, WhatsApp, redes
  i18n/
    translations.js ← todos los textos de la web en español e inglés
  pages/          ← Home, Projects, ProjectDetail (/projects/:slug), AiAgents, NotFound
  components/     ← secciones y piezas reutilizables
  context/        ← vista DEV / BUSINESS e idioma ES / EN (ambos se recuerdan entre visitas)
  index.css       ← sistema de diseño (tokens por vista)
```

## SEO

- **URLs por idioma** (`src/i18n/routes.js`): español en la raíz (`/proyectos`, `/agentes-ia`,
  `/servicios/automatizacion-de-ventas`…) e inglés en `/en/...`, enlazadas con `hreflang`.
- **Prerender (SSG)**: `npm run build` genera el HTML de cada URL con contenido, title, description, canonical,
  Open Graph y JSON-LD ya incluidos (`scripts/prerender.mjs`). Google no necesita ejecutar JavaScript.
- **Metadatos**: todos salen de `src/seo/head.js`; los títulos y descripciones están en `src/i18n/seo-content.js`.
- **Landings de servicio**: una por búsqueda objetivo, contenido en `servicePages` de `seo-content.js`.
- **sitemap.xml y robots.txt** se generan en el build. **Requieren `VITE_SITE_URL`** (dominio de producción).
- Al añadir un proyecto o servicio, su página, su entrada en el sitemap y sus metadatos se generan solos.

## Idiomas (ES / EN)

- El idioma lo define la URL. Si el navegador del visitante está en otro idioma se le sugiere cambiar (sin redirigir).
- Los textos de la interfaz están en `src/i18n/translations.js`: misma clave en `en` y `es`.
- Los textos de cada proyecto están en `content.en` / `content.es` dentro de `projects.js`.
- Si falta una traducción, se muestra la versión en inglés.

## Añadir un proyecto

1. Abre `src/data/projects.js` y agrega un objeto al array `projects` (el formato está documentado arriba del archivo).
2. Con `featured: true` aparece en la home. El **primer** destacado se muestra en grande (layout bento).
3. Si usas una categoría nueva, añádela a `categoryKeys` y su nombre en `categories` de `translations.js`.

### Portada de la card (cómo hacerla atractiva)

- `accent`: color de marca del proyecto (fondo de la portada).
- `media.cover`: captura principal, a 1440px de ancho, de la parte superior de la página (se muestra dentro de un navegador).
- `media.hover`: segunda pantalla que aparece al pasar el mouse. Elige la que muestre el producto en acción (chat, dashboard…).
- `media.mobile`: captura móvil (≈390×844) que aparece en un teléfono junto al navegador.
- `media.preview`: clip `.mp4` de 5–10 s, sin sonido, menos de 2 MB. Se reproduce en hover en lugar de `hover`.
- `links.label`: texto para la barra de URL si el dominio real no es presentable.

## Añadir el video de un aplicativo

En el proyecto, rellena `media.video`:

```js
// YouTube (recomendado: gratis, rápido y sin coste de ancho de banda). src = ID del video
video: { type: 'youtube', src: 'AbCdEf12345' }

// Vimeo
video: { type: 'vimeo', src: '123456789', poster: 'https://.../portada.png' }

// Archivo propio (.mp4/.webm en ImageKit o en public/videos/)
video: { type: 'file', src: 'https://ik.imagekit.io/n9udqzkqr/demo.mp4', poster: 'https://.../portada.png' }
```

El video se muestra encima de la galería en el caso de estudio, y la tarjeta del proyecto muestra la etiqueta VIDEO.
YouTube y Vimeo solo cargan el reproductor cuando el visitante pulsa play, así que no hacen la página más lenta.

## Formulario de contacto

Copia `.env.example` a `.env` y define `VITE_FORMSPREE_ID` para recibir los mensajes en tu correo.
Sin esa variable, el formulario abre el cliente de correo del visitante con el mensaje ya redactado.

## Despliegue

1. Define `VITE_SITE_URL` (y `VITE_FORMSPREE_ID`) en las variables de entorno del hosting.
2. Comando de build: `npm run build`; carpeta de salida: `dist`.
3. Ya incluido: `vercel.json` (URLs limpias y redirecciones 301 de las URLs antiguas) y `public/_redirects` (Netlify).
4. Tras publicar: da de alta el dominio en Google Search Console y envía `https://tu-dominio/sitemap.xml`.
