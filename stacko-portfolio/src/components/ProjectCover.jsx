import React from 'react';
import { projectDomain } from '../data/projects';

/**
 * Portada de la card: la captura dentro de un navegador (con la URL real) sobre el color de marca del proyecto,
 * más un teléfono si hay captura móvil. En hover muestra `media.hover` o reproduce el clip `media.preview`
 * (la reproducción la controla ProjectCard).
 */
const ProjectCover = ({ project, alt }) => {
  const { cover, hover, mobile, preview } = project.media;

  return (
    <div className={`cover ${mobile ? 'has-phone' : ''}`} style={{ '--project-accent': project.accent }}>
      <div className="cover-browser">
        <div className="cover-browser-bar" aria-hidden="true">
          <i /><i /><i />
          <span className="cover-url">{projectDomain(project)}</span>
        </div>
        <div className="cover-screen">
          <img src={cover} alt={alt} loading="lazy" className="cover-img" />
          {preview ? (
            <video src={preview} className="cover-img cover-img-hover" muted loop playsInline preload="none" aria-hidden="true" />
          ) : (
            hover && <img src={hover} alt="" loading="lazy" className="cover-img cover-img-hover" />
          )}
        </div>
      </div>
      {mobile && (
        <div className="cover-phone" aria-hidden="true">
          <img src={mobile} alt="" loading="lazy" />
        </div>
      )}
    </div>
  );
};

export default ProjectCover;
