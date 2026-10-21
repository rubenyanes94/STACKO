import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../context/theme';
import ThemeToggle from './ThemeToggle.jsx';

const links = [
  { to: '/projects', dev: '~/work', business: 'Work', route: true },
  { to: '/ai-agents', dev: '~/ai-agents', business: 'AI Agents', route: true },
  { to: '/#services', dev: '~/services', business: 'Services' },
  { to: '/#about', dev: '~/about', business: 'About' },
];

const Navbar = () => {
  const { isDevMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname, hash } = useLocation();

  // Cierra el menú móvil al navegar
  useEffect(() => setMenuOpen(false), [pathname, hash]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const renderLinks = () =>
    links.map((link) =>
      link.route ? (
        <NavLink key={link.to} to={link.to} className="nav-link-stk">
          {isDevMode ? link.dev : link.business}
        </NavLink>
      ) : (
        <Link key={link.to} to={link.to} className="nav-link-stk">
          {isDevMode ? link.dev : link.business}
        </Link>
      )
    );

  return (
    <>
      <nav className="nav-stk fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <Link to="/" className="brand" aria-label="STACKO home">
            STACKO<span className="brand-cursor" aria-hidden="true" />
          </Link>

          <div className="d-none d-lg-flex align-items-center gap-4 gap-xl-5">
            {renderLinks()}
            <ThemeToggle />
            <Link to="/#contact" className="btn-stk py-2 px-3">
              {isDevMode ? 'start_project()' : 'Start a project'}
            </Link>
          </div>

          <button
            type="button"
            className="d-lg-none btn border-0 p-2"
            style={{ color: 'var(--text)' }}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} size="lg" />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="nav-mobile d-lg-none d-flex flex-column gap-4">
          {renderLinks()}
          <div className="pt-4 mt-2 d-flex flex-column gap-4" style={{ borderTop: '1px solid var(--border)' }}>
            <ThemeToggle />
            <Link to="/#contact" className="btn-stk">
              Start a project
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
