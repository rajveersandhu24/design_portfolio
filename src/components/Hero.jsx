import React from 'react';
import { Link } from 'react-router-dom';

const SplitWord = ({ text, className, startIndex = 0 }) => {
  return (
    <span className={`word ${className || ''}`}>
      {text.split('').map((char, index) => (
        <span 
          key={index} 
          className="char"
          style={{ transitionDelay: `${(startIndex + index) * 0.03}s` }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

const Hero = () => {
  return (
    <header className="hero" id="hero">
      <div className="hero-content">
        <div className="subtitle-badge">
          <span className="dot"></span> SENIOR VISUAL DESIGNER
        </div>
        <h1 className="hero-title">
          <SplitWord text="SOLVING" startIndex={0} /> <SplitWord text="design" className="italic-accent" startIndex={7} /><br />
          <SplitWord text="PROBLEMS" startIndex={13} />
        </h1>
        <p className="hero-description">
          I design scalable digital products that bridge the gap between user needs and business goals. Through high-fidelity visuals and strategic usability, I help brands build lasting connections with their audience.
        </p>
        <div className="hero-actions">
          <Link to="/work" className="btn-primary btn-large">View My Work</Link>
          <a href="#contact" className="btn-secondary">Let's Talk</a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
