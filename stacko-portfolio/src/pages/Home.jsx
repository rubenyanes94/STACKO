import React from 'react';
import Hero from '../components/Hero.jsx';
import TechTicker from '../components/TechTicker.jsx';
import Services from '../components/Services.jsx';
import FeaturedProjects from '../components/FeaturedProjects.jsx';
import Process from '../components/Process.jsx';
import AboutMe from '../components/AboutMe.jsx';
import Contact from '../components/Contact.jsx';
import { usePageMeta } from '../hooks/usePageMeta';

const Home = () => {
  usePageMeta(
    null,
    "STACKO is Venezuela's first AI-specialized software company. We build AI agents, automation and high-performance web platforms that make businesses grow."
  );

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
