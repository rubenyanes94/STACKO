import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const TechTicker = () => {
  const { isDevMode } = useContext(ThemeContext);

  // Lista de Tecnologías para el modo DEVELOPER
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

  // Lista de Tecnologías para el modo DATA ANALYST
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
  
  // Duplicamos la lista para crear la ilusión de "infinito" sin cortes
  const infiniteStack = [...currentStack, ...currentStack];

  return (
    // CONTENEDOR PRINCIPAL (LA JAULA)
    // w-100: Ocupa el ancho disponible
    // maxWidth: 100vw: IMPIDE que sea más ancho que la ventana (solución al error)
    // overflow-hidden: CORTA todo lo que se salga a los lados
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
      {/* EL TRACK (LA PISTA QUE SE MUEVE) */}
      <div 
        className="d-flex align-items-center"
        style={{
          width: 'max-content', // Permite que sea tan largo como necesite
          animation: 'scroll 30s linear infinite', // La animación definida en CSS
        }}
        // Pausar animación al pasar el mouse
        onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
        onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
      >
        {infiniteStack.map((tech, index) => (
          <div 
            key={index} 
            className="d-flex align-items-center gap-2 mx-5"
            style={{ 
              flexShrink: 0, // Evita que los iconos se aplasten
              opacity: 0.7, 
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              cursor: 'default'
            }}
            // Efecto Hover individual
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