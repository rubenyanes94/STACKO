import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useLanguage } from '../context/language';
import { usePageMeta } from '../hooks/usePageMeta';

const NotFound = () => {
  const { t } = useLanguage();
  usePageMeta(t('meta.notFoundTitle'));

  return (
    <section className="grid-bg d-flex align-items-center" style={{ minHeight: '70vh' }}>
      <Container>
        <div className="eyebrow">error 404</div>
        <h1 className="display-stk">{t('notFound.title')}</h1>
        <p className="lead-stk mb-5">{t('notFound.text')}</p>
        <div className="d-flex flex-wrap gap-3">
          <Link to="/" className="btn-stk">{t('notFound.home')}</Link>
          <Link to="/projects" className="btn-stk-outline">{t('notFound.work')}</Link>
        </div>
      </Container>
    </section>
  );
};

export default NotFound;
