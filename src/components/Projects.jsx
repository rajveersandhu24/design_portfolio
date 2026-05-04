import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard.jsx';

const Projects = () => {
  const featuredProjects = [
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
      placeholder: "Care+ App Mockup",
      image: "healthcare_app_images/healthcare_app_cover.png",
      link: "/case-study/healthcare"
    }
  ];

  return (
    <section className="work" id="work">
      <div className="section-header">
        <h2 className="section-title">Selected <span className="italic-accent">works</span></h2>
        <Link to="/work" className="view-all">View all work &rarr;</Link>
      </div>
      
      <div className="projects-grid">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} origin="Home" />
        ))}
      </div>
    </section>
  );
};

export default Projects;
