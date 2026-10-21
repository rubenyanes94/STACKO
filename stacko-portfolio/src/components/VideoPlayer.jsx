import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../context/language';

const embedUrl = ({ type, src }) =>
  type === 'vimeo'
    ? `https://player.vimeo.com/video/${src}?autoplay=1`
    : `https://www.youtube-nocookie.com/embed/${src}?autoplay=1&rel=0&modestbranding=1`;

/**
 * Reproduce el video de un proyecto.
 * - 'file': <video> nativo (mp4/webm en ImageKit o /public/videos).
 * - 'youtube' | 'vimeo': muestra una portada y solo carga el iframe al hacer clic,
 *   así la página no paga el peso del reproductor hasta que el usuario lo pide.
 */
const VideoPlayer = ({ video, title }) => {
  const { t } = useLanguage();
  const [playing, setPlaying] = useState(false);

  if (video.type === 'file') {
    return (
      <div className="media-frame ratio ratio-16x9">
        <video controls playsInline preload="metadata" poster={video.poster}>
          <source src={video.src} />
        </video>
      </div>
    );
  }

  const poster = video.poster || (video.type === 'youtube' ? `https://i.ytimg.com/vi/${video.src}/hqdefault.jpg` : null);

  return (
    <div className="media-frame ratio ratio-16x9">
      {playing ? (
        <iframe
          src={embedUrl(video)}
          title={`${title} — video demo`}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button type="button" className="video-facade" onClick={() => setPlaying(true)} aria-label={t('detail.play', { title })}>
          {poster && <img src={poster} alt="" loading="lazy" />}
          <span className="play-button">
            <FontAwesomeIcon icon={faPlay} />
          </span>
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;
