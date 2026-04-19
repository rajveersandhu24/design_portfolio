import React from 'react';
import { motion } from 'framer-motion';
import Hero from './Hero.jsx';
import Experience from './Experience.jsx';
import PhysicsSkills from './PhysicsSkills.jsx';
import Projects from './Projects.jsx';
import Footer from './Footer.jsx';

const Home = () => {
  return (
    <motion.div 
      className="page-transition-wrapper"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
    >
      <Hero />
      <Experience />
      <PhysicsSkills />
      <Projects />
      <Footer />
    </motion.div>
  );
};

export default Home;
