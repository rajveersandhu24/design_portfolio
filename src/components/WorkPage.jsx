import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard.jsx';
import Footer from './Footer.jsx';

const WorkPage = () => {
  // Ensure we start at the top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allProjects = [
    {
      title: "Learning platform",
      description: "Interactive educational ecosystem designed for seamless knowledge sharing.",
      tags: ["Learning platform", "Web platform"],
      gradient: "linear-gradient(135deg, #f0ebfe, #e0d4fc)",
      video: "LEAP/Learning_Platform_Cover_Video.mp4",
      link: "/case-study/learning-platform"
    },
    {
      title: "Healthcare Mobile App",
      description: "Making appointment simple, Easy and Fast for patients.",
      tags: ["Health Care", "Mobile"],
      gradient: "linear-gradient(135deg, #1a7acc, #005bb7)",
      image: "healthcare_app_images/healthcare_app_cover.png",
      link: "/case-study/healthcare"
    },
    {
      title: "EGYM24",
      description: "Advanced gym ecosystem for personalized workout tracking and community engagement.",
      tags: ["Fitness", "Prototype"],
      gradient: "linear-gradient(135deg, #3d2b24, #1a1512)",
      image: "EGYM24/EGYM24_Cover.png",
      link: "/case-study/fitness-app"
    },
    {
      title: "Luke Coutinho",
      description: "A holistic wellness platform for personalized health coaching and lifestyle management.",
      tags: ["Wellness", "App Design"],
      gradient: "linear-gradient(135deg, #f1f8e9, #dcedc8)",
      image: "Luke Coutinho/Luke_Coutinho_Cover.png",
      isComingSoon: true
    }
  ];

  return (
    <motion.section 
      className="work-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
    >
      <div className="work-page-content">
        <header className="work-header">
          <nav className="breadcrumb">
            <Link to="/" className="breadcrumb-item home-link">
              <span className="arrow">←</span> Home
            </Link>
            <span className="separator">/</span>
            <span className="breadcrumb-item current">Case Studies</span>
          </nav>
          
          <div className="work-intro">
            <h1 className="section-title bigger">Case <span className="italic-accent">Studies</span></h1>
            <p className="work-subtitle">A curated collection of digital experiences crafting the future of enterprise SaaS and mobile ecosystems.</p>
          </div>
        </header>

        <div className="projects-grid">
          {allProjects.map((project, index) => (
            <ProjectCard key={index} {...project} origin="Case Studies" />
          ))}
        </div>
      </div>
      
      <Footer />
    </motion.section>
  );
};

export default WorkPage;
