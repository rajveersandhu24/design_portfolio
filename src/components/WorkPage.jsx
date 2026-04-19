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
      title: "PayFlow Dashboard",
      description: "Financial management platform for modern startups.",
      tags: ["UI/UX", "Web App"],
      gradient: "linear-gradient(135deg, #f0ebfe, #e0d4fc)",
      placeholder: "Fintech App Mockup"
    },
    {
      title: "Lumina Storefront",
      description: "High-conversion e-commerce experience for sustainable brands.",
      tags: ["E-commerce", "Mobile"],
      gradient: "linear-gradient(135deg, #e6f6ee, #c3ecd4)",
      placeholder: "E-commerce Mockup"
    },
    {
      title: "Nexus CRM",
      description: "Enterprise relationship management with AI insights.",
      tags: ["SaaS", "Enterprise"],
      gradient: "linear-gradient(135deg, #e0f2ff, #bde4ff)",
      placeholder: "CRM Platform Mockup"
    },
    {
      title: "Vivid Studio",
      description: "Creative asset management for high-velocity teams.",
      tags: ["Creative", "Collaboration"],
      gradient: "linear-gradient(135deg, #fff5f5, #ffd9d9)",
      placeholder: "Creative Tool Mockup"
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
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
      
      <Footer />
    </motion.section>
  );
};

export default WorkPage;
