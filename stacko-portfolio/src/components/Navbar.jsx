import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useCopy } from '../hooks/useCopy';
import ThemeToggle from './ThemeToggle.jsx';
import LanguageToggle from './LanguageToggle.jsx';

const links = [
  { to: '/projects', key: 'nav.work', route: true },
  { to: '/ai-agents', key: 'nav.agents', route: true },
  { to: '/#services', key: 'nav.services' },
  { to: '/#about', key: 'nav.about' },
];

const Navbar = () => {
  const { t, v } = useCopy();
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname, hash } = useLocation();

  // Cierra el menú móvil al navegar
  useEffect(() => setMenuOpen(false), [pathname, hash]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const renderLinks = () =>
    links.map((link) => {
      const LinkComponent = link.route ? NavLink : Link;
      return (
        <LinkComponent key={link.to} to={link.to} className="nav-link-stk">
          {v(link.key)}
        </LinkComponent>
      );
    });

  return (
    <>
      <nav className="nav-stk fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <Link to="/" className="brand" aria-label="STACKO home">
            STACKO<span className="brand-cursor" aria-hidden="true" />
          </Link>

          <div className="d-none d-lg-flex align-items-center gap-4">
            {renderLinks()}
            <div className="d-flex align-items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
            <Link to="/#contact" className="btn-stk py-2 px-3">
              {v('nav.cta')}
            </Link>
          </div>

          <div className="d-flex d-lg-none align-items-center gap-2">
            <LanguageToggle />
            <button
              type="button"
              className="btn border-0 p-2"
              style={{ color: 'var(--text)' }}
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
              aria-expanded={menuOpen}
            >
              <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} size="lg" />
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="nav-mobile d-lg-none d-flex flex-column gap-4">
          {renderLinks()}
          <div className="pt-4 mt-2 d-flex flex-column gap-4" style={{ borderTop: '1px solid var(--border)' }}>
            <ThemeToggle />
            <Link to="/#contact" className="btn-stk">
              {t('nav.cta.business')}
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
