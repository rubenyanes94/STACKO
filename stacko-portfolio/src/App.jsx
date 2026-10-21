import React from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';

import { ThemeProvider } from './context/ThemeContext.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';
import { LANGUAGES, routes } from './i18n/routes';
import HeadManager from './seo/HeadManager.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollManager from './components/ScrollManager.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import LanguageSuggestion from './components/LanguageSuggestion.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import AiAgents from './pages/AiAgents.jsx';
import ServicePage from './pages/ServicePage.jsx';
import NotFound from './pages/NotFound.jsx';

const pages = {
  home: <Home />,
  projects: <Projects />,
  project: <ProjectDetail />,
  agents: <AiAgents />,
  service: <ServicePage />,
};

// URLs antiguas (antes de separar idiomas) → su equivalente en español
const LegacyProjectRedirect = () => <Navigate to={`/proyectos/${useParams().slug}`} replace />;

// Sin router: el navegador usa BrowserRouter (main.jsx) y el prerender StaticRouter (entry-server.jsx).
const App = () => (
  <LanguageProvider>
    <ThemeProvider>
      <HeadManager />
      <ScrollManager />
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main>
          <Routes>
            {LANGUAGES.flatMap((lang) =>
              Object.entries(pages).map(([name, element]) => (
                <Route key={`${lang}-${name}`} path={routes[name][lang]} element={element} />
              ))
            )}
            <Route path="/projects" element={<Navigate to="/proyectos" replace />} />
            <Route path="/projects/:slug" element={<LegacyProjectRedirect />} />
            <Route path="/ai-agents" element={<Navigate to="/agentes-ia" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <LanguageSuggestion />
      <WhatsAppButton />
    </ThemeProvider>
  </LanguageProvider>
);

export default App;
