import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlay, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTheme } from '../context/theme';
import { categories } from '../data/projects';

const ProjectCard = ({ project }) => {
  const { isDevMode } = useTheme();
  const url = `/projects/${project.slug}`;
  const summary = isDevMode ? project.tech.summary : project.business.summary;
  const tags = isDevMode ? project.tech.stack : project.business.tags;

  return (
    <article className="card-stk project-card">
      <Link to={url} className="project-media" aria-label={`Open case study: ${project.title}`}>
        <img src={project.media.cover} alt={`${project.title} screenshot`} loading="lazy" />
        {project.media.video && (
          <span className="media-badge">
            <FontAwesomeIcon icon={faPlay} /> VIDEO
          </span>
        )}
      </Link>

      <div className="p-4 d-flex flex-column flex-grow-1">
        <div className="d-flex justify-content-between small text-muted-stk font-mono mb-2">
          <span>{categories[project.category]}</span>
          <span>{project.year}</span>
        </div>
        <h3 className="h4 fw-bold mb-3">
          <Link to={url} className="project-title-link">{project.title}</Link>
        </h3>
        <p className="text-muted-stk small mb-4">{summary}</p>

        <div className="d-flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 4).map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <div className="mt-auto d-flex align-items-center justify-content-between gap-3">
          <Link to={url} className="link-arrow small">
            {isDevMode ? 'read case_study' : 'View case study'} <FontAwesomeIcon icon={faArrowRight} />
          </Link>
          <div className="d-flex gap-3 text-muted-stk">
            {project.links.repo && isDevMode && (
              <a href={project.links.repo} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} source code`} className="text-reset">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            )}
            {project.links.live && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title}`} className="text-reset">
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
