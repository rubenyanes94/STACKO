import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const TechTicker = () => {
  const { isDevMode } = useContext(ThemeContext);
  const devStack = [
    { name: 'React', icon: 'devicon-react-original' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain' },
    { name: 'Python', icon: 'devicon-python-plain' },
    { name: 'Flask', icon: 'devicon-flask-original' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
    { name: 'Docker', icon: 'devicon-docker-plain' },
    { name: 'Git', icon: 'devicon-git-plain' },
    { name: 'Jest', icon: 'devicon-jest-plain' },
  ];

  const dataStack = [
    { name: 'Python', icon: 'devicon-python-plain' },
    { name: 'Pandas', icon: 'devicon-pandas-original' },
    { name: 'Jupyter', icon: 'devicon-jupyter-plain' },
    { name: 'SQL', icon: 'devicon-azuresqldatabase-plain' },
    { name: 'MySQL', icon: 'devicon-mysql-plain' },
    { name: 'Power BI', icon: 'devicon-microsoftsqlserver-plain' }, 
    { name: 'Tableau', icon: 'devicon-salesforce-plain' }, 
    { name: 'Excel', icon: 'devicon-azuresqldatabase-plain' }, 
  ];

  const currentStack = isDevMode ? devStack : dataStack;
  const infiniteStack = [...currentStack, ...currentStack];

  return (
   
    <div 
      className="w-100 py-4"
      style={{ 
        width: '100%',
        maxWidth: '100vw', 
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: isDevMode ? '#0a0a0a' : '#f8f9fa',
        borderTop: isDevMode ? '1px solid #333' : '1px solid #e0e0e0',
        borderBottom: isDevMode ? '1px solid #333' : '1px solid #e0e0e0',
        zIndex: 1
      }}
    >
      <div 
        className="d-flex align-items-center"
        style={{
          width: 'max-content', 
          animation: 'scroll 30s linear infinite', 
        }}
        onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
        onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
      >
        {infiniteStack.map((tech, index) => (
          <div 
            key={index} 
            className="d-flex align-items-center gap-2 mx-5"
            style={{ 
              flexShrink: 0, 
              opacity: 0.7, 
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              cursor: 'default'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.opacity = '0.7';
            }}
          >
            <i className={`${tech.icon} fs-2`} style={{ color: isDevMode ? '#fff' : '#444' }}></i>
            <span 
              className="fw-bold" 
              style={{ 
                fontFamily: isDevMode ? 'Courier Prime, monospace' : 'Roboto, sans-serif',
                color: isDevMode ? '#aaa' : '#666',
                whiteSpace: 'nowrap',
                fontSize: '0.9rem'
              }}
            >
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      {/* IMPORTANTE: Asegúrate de tener este Keyframe en tu index.css:
         
         @keyframes scroll {
           0% { transform: translateX(0); }
           100% { transform: translateX(-50%); } 
         }
      */}
    </div>
  );
};

export default TechTicker;