import React from 'react';
import Hero from '../components/Hero.jsx';
import TechTicker from '../components/TechTicker.jsx';
import Services from '../components/Services.jsx';
import FeaturedProjects from '../components/FeaturedProjects.jsx';
import Process from '../components/Process.jsx';
import AboutMe from '../components/AboutMe.jsx';
import Contact from '../components/Contact.jsx';

const Home = () => {
  return (
    <>
      <Hero />
      <TechTicker />
      <Services />
      <FeaturedProjects />
      <Process />
      <AboutMe />
      <Contact />
    </>
  );
};

export default Home;
