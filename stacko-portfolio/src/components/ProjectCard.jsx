import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlay, faArrowUpRightFromSquare, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useCopy } from '../hooks/useCopy';
import ProjectCover from './ProjectCover.jsx';

// `project` debe venir ya localizado (getProjects / getProjectBySlug). `large` = card horizontal destacada.
const ProjectCard = ({ project, large = false }) => {
  const { t, v, isDevMode } = useCopy();
  const cardRef = useRef(null);
  const url = `/projects/${project.slug}`;
  const summary = isDevMode ? project.tech.summary : project.business.summary;
  const keyPoint = isDevMode ? project.tech.highlights[0] : project.business.outcomes[0];
  const tags = isDevMode ? project.tech.stack : project.business.tags;

  // El clip de preview solo se descarga y reproduce cuando el usuario muestra interés.
  const playPreview = () => cardRef.current?.querySelector('video')?.play().catch(() => {});
  const stopPreview = () => {
    const video = cardRef.current?.querySelector('video');
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <article
      ref={cardRef}
      className={`card-stk project-card ${large ? 'project-card-large' : ''}`}
      style={{ '--project-accent': project.accent }}
      onMouseEnter={playPreview}
      onMouseLeave={stopPreview}
    >
      <Link to={url} className="project-media" aria-label={t('card.open', { title: project.title })}>
        <ProjectCover project={project} alt={t('card.screenshot', { title: project.title })} />
        {project.media.video && (
          <span className="media-badge">
            <FontAwesomeIcon icon={faPlay} /> {t('card.video')}
          </span>
        )}
      </Link>

      <div className="project-body p-4 d-flex flex-column flex-grow-1">
        <div className="d-flex justify-content-between small text-muted-stk font-mono mb-2">
          <span>{t(`categories.${project.category}`)}</span>
          <span>{project.year}</span>
        </div>
        <h3 className="project-card-title fw-bold mb-3">
          <Link to={url} className="project-title-link">{project.title}</Link>
        </h3>
        <p className="text-muted-stk small mb-3">{summary}</p>

        {keyPoint && (
          <div className="card-keypoint mb-4">
            <FontAwesomeIcon icon={faCheck} />
            <span>{keyPoint}</span>
          </div>
        )}

        <div className="d-flex flex-wrap gap-2 mb-4">
          {tags.slice(0, large ? 5 : 4).map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <div className="mt-auto d-flex align-items-center justify-content-between gap-3">
          <Link to={url} className="link-arrow small">
            {v('card.cta')} <FontAwesomeIcon icon={faArrowRight} />
          </Link>
          <div className="d-flex gap-3 text-muted-stk">
            {project.links.repo && isDevMode && (
              <a href={project.links.repo} target="_blank" rel="noopener noreferrer" aria-label={t('card.source', { title: project.title })} className="text-reset">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            )}
            {project.links.live && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer" aria-label={t('card.visit', { title: project.title })} className="text-reset">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
