import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard.jsx';

const Projects = () => {
  const featuredProjects = [
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
    }
  ];

  return (
    <section className="work" id="work">
      <div className="section-header">
        <h2 className="section-title">Selected <span className="italic-accent">projects</span></h2>
        <Link to="/work" className="view-all">View all work &rarr;</Link>
      </div>
      
      <div className="projects-grid">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
