import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard.jsx';

const Projects = () => {
  const featuredProjects = [
    {
      title: "SquadCast",
      description: "Designing a High-Scale Broadcast & Alerting System for Enterprise Workforces.",
      tags: ["Prototype", "Mobile App", "Interaction Design"],
      gradient: "linear-gradient(135deg, #2e2a24, #121214)",
      image: "Broadcasts & Alerts/opsalert_cover.png",
      link: "/case-study/broadcasts-alerts"
    },
    {
      title: "AI-Ready Design System",
      description: "A full component library designed in Figma — with tokens, variables, and a structure read and used by AI agents via MCP.",
      tags: ["Design System", "AI-Ready", "Figma"],
      gradient: "linear-gradient(135deg, #064e3b, #022c22)",
      image: "design_system/New Cover Image.webp",
      link: "/case-study/design-system"
    },
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
