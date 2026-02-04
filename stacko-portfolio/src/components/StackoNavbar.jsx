import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const { isDevMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  // Clases dinámicas según el modo
  const navClasses = isDevMode 
    ? 'bg-transparent text-white' 
    : 'bg-white shadow-sm text-dark';

  const linkClasses = isDevMode
    ? 'text-white-50 text-decoration-none hover-dev'
    : 'text-secondary text-decoration-none hover-analyst';

  return (
    <nav 
      className={`fixed-top w-100 transition-all ${navClasses}`}
      style={{ transition: 'background-color 0.4s ease, color 0.4s ease', backdropFilter: isDevMode ? 'none' : 'blur(10px)' }}
    >
      <div className="container py-3">
        {/* LA GRILLA DE BOOTSTRAP: ROW PRINCIPAL */}
        <div className="row align-items-center">
          
          {/* COLUMNA 1: LOGO (Izquierda) */}
          <div className="col-6 col-lg-3">
            <a href="#home" className="text-reset text-decoration-none">
              <h3 className="m-0 fw-bold" style={{ letterSpacing: '2px', fontFamily: isDevMode ? 'monospace' : 'sans-serif' }}>
                STACKO<span style={{ color: 'var(--brand-color)' }}>.</span>
              </h3>
            </a>
          </div>

          {/* COLUMNA 2: MENU DESKTOP (Derecha - Solo visible en pantallas grandes) */}
          <div className="col-lg-9 d-none d-lg-block">
            <div className="d-flex justify-content-end align-items-center gap-5">
              <a href="#projects" className={linkClasses}>
                {isDevMode ? '// Projects' : 'Case Studies'}
              </a>
              <a href="#about" className={linkClasses}>
                {isDevMode ? '// About' : 'Expertise'}
              </a>
              <a href="#contact" className={linkClasses}>
                {isDevMode ? '// Contact' : 'Get in Touch'}
              </a>
              
              {/* El Switcher vive aquí */}
              <div className="border-start ps-4 border-secondary">
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* COLUMNA 3: HAMBURGUESA MOVIL (Derecha - Solo visible en móviles) */}
          <div className="col-6 d-lg-none text-end">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="btn border-0 bg-transparent p-0"
              style={{ color: 'inherit' }}
            >
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
            </button>
          </div>
        </div>

        {/* MENU MOVIL DESPLEGABLE (Row extra que aparece solo si menuOpen es true) */}
        {menuOpen && (
          <div className="row mt-3 d-lg-none pb-3 animate-fade-in">
            <div className="col-12 d-flex flex-column gap-3 text-center">
              <a href="#projects" className={linkClasses} onClick={() => setMenuOpen(false)}>
                {isDevMode ? '> cd /projects' : 'Case Studies'}
              </a>
              <a href="#about" className={linkClasses} onClick={() => setMenuOpen(false)}>
                {isDevMode ? '> cat about.txt' : 'Expertise'}
              </a>
              <div className="d-flex justify-content-center pt-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;