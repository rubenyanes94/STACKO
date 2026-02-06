import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/StackoNavbar.jsx';
import Hero from './components/Hero.jsx';
import ProjectsList from './components/ProjectsList.jsx'; 
import AboutMe from './components/AboutMe.jsx'; 
import Footer from './components/Footer.jsx';
import './index.css';

function App() {
  return (
    <ThemeProvider> 
      <Navbar/> 
      <Hero />
      <ProjectsList />
      <AboutMe />
      <Footer />
    </ThemeProvider>
  );
}

export default App;