import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // 1. IMPORTAR ROUTER

import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/StackoNavbar.jsx'; // Se queda aquí (visible siempre)
import Footer from './components/Footer.jsx';       // Se queda aquí (visible siempre)
import Home from './pages/Home.jsx';
import Projects from './components/Projects.jsx'; // Tu nueva página de proyectos

import './index.css';

function App() {
  return (
    <ThemeProvider>
      {/* 3. EL ROUTER ENVUELVE TODO */}
      <BrowserRouter>
        
        <div className="d-flex flex-column min-vh-100 w-100 overflow-hidden">
          
          {/* El Navbar va FUERA de Routes para aparecer en todas las páginas */}
          <Navbar/> 

          {/* Aquí es donde cambia el contenido dinámicamente */}
          <Routes>
            {/* Si la ruta es "/" muestra Home */}
            <Route path="/" element={<Home />} />
            
            {/* Si la ruta es "/projects" muestra Projects */}
            <Route path="/projects" element={<Projects />} />
          </Routes>

          {/* El Footer va FUERA de Routes para aparecer en todas las páginas */}
          <Footer />

        </div>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;