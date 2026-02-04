import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/StackoNavbar.jsx';
import Hero from './components/Hero.jsx';
import './index.css';

function App() {
  return (
    <ThemeProvider> 
      <Navbar/> 
      <Hero />
    </ThemeProvider>
  );
}

export default App;