import React from 'react';

// `icon` es una clase de devicon; las herramientas sin icono se muestran solo con texto.
const stack = [
  { name: 'Claude API' },
  { name: 'OpenAI' },
  { name: 'Python', icon: 'devicon-python-plain' },
  { name: 'FastAPI', icon: 'devicon-fastapi-plain' },
  { name: 'NVIDIA' },
  { name: 'React', icon: 'devicon-react-original' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain' },
  { name: 'Flask', icon: 'devicon-flask-original' },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
  { name: 'Docker', icon: 'devicon-docker-plain' },
  { name: 'OpenClaw' },
  { name: 'Pandas', icon: 'devicon-pandas-plain' },
  { name: 'Git', icon: 'devicon-git-plain' },
];

const TechTicker = () => {
  // Lista duplicada: la animación se desplaza un 50% y vuelve al inicio sin salto visible.
  const loop = [...stack, ...stack];

  return (
    <div className="ticker" aria-label="Technologies we work with">
      <div className="ticker-track">
        {loop.map((tech, index) => (
          <div key={index} className="ticker-item" aria-hidden={index >= stack.length}>
            {tech.icon ? <i className={tech.icon} /> : <span aria-hidden="true">◆</span>}
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechTicker;
