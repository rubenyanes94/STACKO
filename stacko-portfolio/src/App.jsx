import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/StackoNavbar.jsx'; 
import Footer from './components/Footer.jsx';       
import Home from './pages/Home.jsx';
import Projects from './components/Projects.jsx'; 

import './index.css';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        
        <div className="d-flex flex-column min-vh-100 w-100 overflow-hidden">
          <Navbar/> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Footer />

        </div>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;