import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
// 1. IMPORTAR LINK
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { isDevMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const navClasses = isDevMode 
    ? 'bg-transparent text-dark' 
    : 'bg-white shadow-sm text-dark';

  const linkClasses = isDevMode
    ? 'text-dark-50 text-decoration-none'
    : 'text-secondary text-decoration-none hover-analyst';

  return (
    <nav 
      className={`fixed-top w-100 transition-all ${navClasses}`}
      style={{ transition: 'background-color 0.4s ease, color 0.4s ease', backdropFilter: isDevMode ? 'none' : 'blur(10px)' }}
    >
      <div className="container py-3">
        <div className="row align-items-center">
          
          {/* LOGO: Usamos Link para ir al inicio (/) */}
          <div className="col-6 col-lg-3">
            <Link to="/" className="text-reset text-decoration-none">
              <h3 className="m-0 fw-bold" style={{ letterSpacing: '2px', fontFamily: isDevMode ? 'monospace' : 'sans-serif' }}>
                STACKO<span style={{ color: 'var(--brand-color)' }}>.</span>
              </h3>
            </Link>
          </div>

          {/* MENÚ DE ESCRITORIO */}
          <div className="col-lg-9 d-none d-lg-block">
            <div className="d-flex justify-content-end align-items-center gap-5">
              
              {/* ENLACE A PROYECTOS: Usamos Link y la ruta '/projects' */}
              <Link to="/projects" className={linkClasses}>
                {isDevMode ? '// Projects' : 'Case Studies'}
              </Link>

              {/* Los enlaces internos (#about, #contact) pueden quedarse como <a> si esas secciones están en la página actual, 
                  pero si estás en /projects no funcionarán bien. Por ahora los dejamos así. */}
              <a href="/#about" className={linkClasses}>
                {isDevMode ? '// About' : 'Expertise'}
              </a>
              <a href="/#contact" className={linkClasses}>
                {isDevMode ? '// Contact' : 'Get in Touch'}
              </a>
              
              <div className="border-start ps-4 border-secondary">
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* BOTÓN HAMBURGUESA (Móvil) */}
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

        {/* MENÚ MÓVIL DESPLEGABLE */}
        {menuOpen && (
          <div className="row mt-3 d-lg-none pb-3 animate-fade-in">
            <div className="col-12 d-flex flex-column gap-3 text-center">
              
              {/* ENLACE A PROYECTOS MÓVIL */}
              <Link to="/projects" className={linkClasses} onClick={() => setMenuOpen(false)}>
                {isDevMode ? '> cd /projects' : 'Case Studies'}
              </Link>

              <a href="/#about" className={linkClasses} onClick={() => setMenuOpen(false)}>
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