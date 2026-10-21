import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { usePageMeta } from '../hooks/usePageMeta';

const NotFound = () => {
  usePageMeta('Page not found');

  return (
    <section className="grid-bg d-flex align-items-center" style={{ minHeight: '70vh' }}>
      <Container>
        <div className="eyebrow">error 404</div>
        <h1 className="display-stk">This page doesn’t exist.</h1>
        <p className="lead-stk mb-5">But the solution to your next problem might. Let’s get you back on track.</p>
        <div className="d-flex flex-wrap gap-3">
          <Link to="/" className="btn-stk">Go home</Link>
          <Link to="/projects" className="btn-stk-outline">See our work</Link>
        </div>
      </Container>
    </section>
  );
};

export default NotFound;
