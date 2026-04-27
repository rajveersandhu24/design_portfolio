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
      title: "Healthcare Mobile App",
      description: "Making appointment simple, Easy and Fast for patients.",
      tags: ["Health Care", "Mobile"],
      gradient: "linear-gradient(135deg, #1a7acc, #005bb7)",
      placeholder: "Care+ App Mockup",
      image: "healthcare_app.png"
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
