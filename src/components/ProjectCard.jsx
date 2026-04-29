import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, description, tags, gradient, placeholder, image, video, link, isComingSoon }) => {
  const imageSrc = image ? new URL(`../assets/${image}`, import.meta.url).href : null;
  const videoSrc = video ? new URL(`../assets/${video}`, import.meta.url).href : null;

  const handleMouseMove = useCallback((e) => {
    // Skip tilt effect on touch devices for performance
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    // Mouse position relative to card center (-0.5 to 0.5)
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    // Tilt angles: rotateX is inverted so the side closest to the mouse pushes away
    const rotateX = -(y * 12);  // max ±6 degrees
    const rotateY = x * 12;     // max ±6 degrees

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  }, []);

  const handleMouseLeave = useCallback((e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  }, []);

  const cardContent = (
    <div
      className={`project-card ${link ? 'clickable' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-image" style={{ background: gradient }}>
        {isComingSoon && <div className="coming-soon-badge">Coming Soon</div>}
        {videoSrc ? (
          <video 
            src={videoSrc} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="project-case-video"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : imageSrc ? (
          <img src={imageSrc} alt={title} className="project-case-image" />
        ) : (
          <div className="mockup-placeholder">{placeholder}</div>
        )}
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tags">
          {tags.map((tag, i) => (
            <span key={i} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );

  if (link) {
    return <Link to={link} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>{cardContent}</Link>;
  }

  return cardContent;
};

export default ProjectCard;
