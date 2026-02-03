import React, { useContext } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

const STACKONavbar = () => {
  const { isDevMode } = useContext(ThemeContext);

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`py-3 ${isDevMode ? 'navbar-dark bg-transparent' : 'navbar-light bg-white shadow-sm'}`}
      style={{ transition: 'all 0.4s ease' }}
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-3" style={{ letterSpacing: '2px' }}>
          STACKO<span style={{ color: 'var(--brand-color)' }}>.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#projects" className="mx-3">
              {isDevMode ? '// Projects' : 'Case Studies'}
            </Nav.Link>
            <Nav.Link href="#about" className="mx-3">
              {isDevMode ? '// About' : 'Expertise'}
            </Nav.Link>
            <div className="ms-lg-4 mt-3 mt-lg-0">
              <ThemeToggle />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default STACKONavbar;