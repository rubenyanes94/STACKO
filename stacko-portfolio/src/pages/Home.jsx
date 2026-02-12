import React from 'react';
import Hero from '../components/Hero.jsx';
import TechTicker from '../components/TechTicker.jsx';
import ProjectsList from '../components/ProjectsList.jsx';
import AboutMe from '../components/AboutMe.jsx';

const Home = () => {
  return (
    <>
      <Hero />
      <TechTicker />
      <ProjectsList />
      <AboutMe />
    </>
  );
};

export default Home;