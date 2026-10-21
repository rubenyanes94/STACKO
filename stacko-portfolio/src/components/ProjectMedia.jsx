import React, { useState } from 'react';
import { useLanguage } from '../context/language';
import VideoPlayer from './VideoPlayer.jsx';

// Video del aplicativo (si existe) seguido de la galería de capturas con miniaturas.
const ProjectMedia = ({ project }) => {
  const { t } = useLanguage();
  const { video, gallery } = project.media;
  const [active, setActive] = useState(0);

  return (
    <div className="d-grid gap-4">
      {video && <VideoPlayer video={video} title={project.title} />}

      {gallery.length > 0 && (
        <div>
          <div className="media-frame ratio ratio-16x9">
            <img src={gallery[active]} alt={t('detail.screen', { title: project.title, n: active + 1 })} />
          </div>
          {gallery.length > 1 && (
            <div className="row g-2 g-md-3 mt-1">
              {gallery.map((image, idx) => (
                <div key={image} className="col-3">
                  <button
                    type="button"
                    className="thumb w-100"
                    onClick={() => setActive(idx)}
                    aria-current={idx === active}
                    aria-label={t('detail.showScreen', { n: idx + 1 })}
                  >
                    <img src={image} alt="" loading="lazy" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectMedia;
