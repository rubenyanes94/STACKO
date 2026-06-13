import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { isDevMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navClasses = isDevMode 
    ? 'bg-dark text-white border-bottom border-secondary' 
    : 'bg-white text-dark shadow-sm';

  const linkClasses = isDevMode
    ? 'text-white-50 text-decoration-none font-monospace small transition-colors'
    : 'text-dark text-decoration-none fw-bold text-uppercase small transition-colors';

  return (
    <nav 
      className={`fixed-top w-100 transition-all ${navClasses}`}
      style={{ 
        transition: 'all 0.4s ease', 
        backdropFilter: isDevMode ? 'none' : 'blur(10px)',
        backgroundColor: isDevMode ? 'rgba(15, 15, 15, 0.98)' : 'rgba(255, 255, 255, 0.95)'
      }}
    >
      <div className="container py-3">
        <div className="row align-items-center">
          <div className="col-8 col-lg-3">
            <Link to="/" className="text-reset text-decoration-none">
              <h3 className="m-0 fw-bold" style={{ 
                letterSpacing: isDevMode ? '1px' : '4px', 
                fontFamily: isDevMode ? 'monospace' : '"Inter", "Helvetica Neue", sans-serif',
                fontSize: '1.4rem'
              }}>
                STACKO<span className={isDevMode ? "text-secondary" : "text-black"}>.</span>
              </h3>
            </Link>
          </div>
          <div className="col-lg-9 d-none d-lg-block">
            <div className="d-flex justify-content-end align-items-center gap-4 gap-xl-5">
              <Link to="/projects" className={linkClasses} style={{ letterSpacing: isDevMode ? '0' : '1px' }}>
                {isDevMode ? '// Projects' : 'Case Studies'}
              </Link>
              <Link to="/ai-agents" className={linkClasses} style={{ letterSpacing: isDevMode ? '0' : '1px' }}>
                {isDevMode ? '// AI_Agents' : 'Agents de AI'}
              </Link>

              <a href="/#about" className={linkClasses} style={{ letterSpacing: isDevMode ? '0' : '1px' }}>
                {isDevMode ? '// About' : 'Expertise'}
              </a>
              <a href="/#contact" className={linkClasses} style={{ letterSpacing: isDevMode ? '0' : '1px' }}>
                {isDevMode ? '// Contact' : 'Get in Touch'}
              </a>
              <div className="border-start ps-4" style={{ borderColor: isDevMode ? '#333' : '#e0e0e0', borderWidth: '2px' }}>
                <ThemeToggle />
              </div>
            </div>
          </div>
          <div className="col-4 d-lg-none text-end">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="btn border-0 bg-transparent p-0"
              style={{ color: 'inherit' }}
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="row mt-3 d-lg-none pb-4 animate-fade-in" style={{ borderTop: `1px solid ${isDevMode ? '#333' : '#eee'}`, paddingTop: '1.5rem' }}>
            <div className="col-12 d-flex flex-column gap-4 text-center">
              <Link to="/projects" className={linkClasses} onClick={() => setMenuOpen(false)}>
                {isDevMode ? '> cd /projects' : 'Case Studies'}
              </Link>
              <Link to="/ai-agents" className={linkClasses} onClick={() => setMenuOpen(false)}>
                {isDevMode ? '> ./run_ai_agents.sh' : 'Agentes de AI'}
              </Link>

              <a href="/#about" className={linkClasses} onClick={() => setMenuOpen(false)}>
                {isDevMode ? '> cat about.txt' : 'Expertise'}
              </a>
              <a href="/#contact" className={linkClasses} onClick={() => setMenuOpen(false)}>
                {isDevMode ? '> ping contact' : 'Get in Touch'}
              </a>
              
              <div className="d-flex justify-content-center pt-3 mt-2" style={{ borderTop: `1px solid ${isDevMode ? '#333' : '#eee'}` }}>
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