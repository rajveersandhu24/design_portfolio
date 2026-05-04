import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const FitnessAppCaseStudy = () => {
  const location = useLocation();
  const fromCaseStudies = location.state?.from === 'Case Studies';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="case-study-page fitness-cs">
      <div className="case-study-content">
        <div className="breadcrumb">
          <Link to="/" className="home-link">
            <span className="arrow">&larr;</span> Home
          </Link>
          {fromCaseStudies && (
            <>
              <span className="separator">/</span>
              <Link to="/work" className="home-link">Case Studies</Link>
            </>
          )}
          <span className="separator">/</span>
          <span className="current">EGYM24 Fitness App</span>
        </div>

        {/* EGYM24 SPLIT HERO SECTION */}
        <section className="fitness-hero-split reveal-on-scroll">
          <div className="fitness-hero-left">
            <div className="hero-text-top">
              <div className="fitness-logo-wrapper">
                <h2 className="fitness-brand">EGYM<span>24</span></h2>
                <p className="fitness-tagline">GET FIT ANYTIME ANYWHERE</p>
              </div>
            </div>
            <div className="hero-text-bottom">
              <div className="fitness-title-group">
                <h1 className="fitness-main-title"><span>FITNESS</span> APP</h1>
                <p className="fitness-subtitle">PROTOTYPE</p>
              </div>
            </div>
          </div>
          
          <div className="fitness-hero-right">
            <div className="fitness-main-mockup">
              <img 
                src={new URL('../assets/EGYM24/EGYM 24 Hero Image.png', import.meta.url).href} 
                alt="EGYM24 Main Mockup" 
              />
            </div>
          </div>
        </section>

        {/* APP SCREEN GRID */}
        <section className="fitness-screens-section reveal-on-scroll">
          <div className="fitness-grid">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="fitness-screen-card">
                <img 
                  src={new URL(`../assets/EGYM24/EGYM_Image_${num}.png`, import.meta.url).href} 
                  alt={`EGYM Screen ${num}`} 
                />
              </div>
            ))}
          </div>
        </section>

        {/* PROTOTYPE CTA */}
        <section className="fitness-cta reveal-on-scroll">
          <div className="cta-icon">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#e65c2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </div>
          <p className="cta-text">
            Experience the seamless user interactions <br />
            by exploring the prototype!
          </p>
        </section>

        {/* FIGMA PROTOTYPE */}
        <section className="fitness-prototype-section reveal-on-scroll">
          <h2 className="cs-section-title centered">Interactive Prototype</h2>
          <div className="figma-container">
            <iframe 
              className="figma-embed"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F3NJhJ9ahILyiRLA0KiofTa%2FRESET-App-(Portfolio)%3Fpage-id%3D2024%253A2%26type%3Ddesign%26node-id%3D2131-937%26viewport%3D3687%252C-8980%252C0.79%26t%3DMsthJB9csNzK3D0G-1%26scaling%3Dscale-down%26starting-point-node-id%3D2024%253A44%26mode%3Ddesign" 
              allowFullScreen 
              sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FitnessAppCaseStudy;
