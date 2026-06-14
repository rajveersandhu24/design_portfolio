import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const CoreUiMobileDslCaseStudy = () => {
  const location = useLocation();
  const fromCaseStudies = location.state?.from === 'Case Studies';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      className="case-study-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="case-study-content" style={{ paddingTop: '40px' }}>
        <section className="cs-hero">
          <div className="cs-header-content">
            <div className="cs-title-group">
              <span className="cs-badge" style={{ background: 'rgba(99, 102, 241, 0.1)', color: '#6366f1', borderColor: 'rgba(99, 102, 241, 0.3)' }}>Core UI</span>
              <h1 className="cs-title">Core UI Mobile DSL</h1>
              <p className="cs-subtitle">Design System Language</p>
            </div>
            <h2 className="cs-main-statement">
              A comprehensive and scalable mobile design system language crafted for cohesive product ecosystems.
            </h2>
          </div>
        </section>

        {/* Placeholder container styled to match premium theme */}
        <section className="cs-section" style={{ margin: '100px 0' }}>
          <div 
            className="glass-panel" 
            style={{ 
              background: 'var(--card-bg)', 
              border: '1px solid var(--border-color)', 
              borderRadius: '24px', 
              padding: '60px 40px', 
              textAlign: 'center', 
              maxWidth: '800px', 
              margin: '0 auto',
              boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
            }}
          >
            <div 
              style={{ 
                width: '80px', 
                height: '80px', 
                borderRadius: '20px', 
                background: 'rgba(99, 102, 241, 0.1)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 24px',
                fontSize: '2rem'
              }}
            >
              🪄
            </div>
            <h3 style={{ fontSize: '2rem', marginBottom: '16px', fontWeight: 700, color: 'var(--text-primary)' }}>
              Case Study Details Under Construction
            </h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.7', maxWidth: '600px', margin: '0 auto' }}>
              The infrastructure for the Core UI Mobile DSL case study has been successfully established. This details page will be populated with rich case study inputs, interactive screens, user insights, and design specs at a later stage.
            </p>
          </div>
        </section>

        {/* Section 7 — CTA */}
        <section className="cs-section cs-card-section" style={{ margin: '140px 0 60px', textAlign: 'center', background: 'radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, transparent 70%), var(--card-bg)', borderRadius: '32px', border: '1px solid var(--border-color)' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
              A unified mobile design language.
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', margin: '24px 0 40px', lineHeight: 1.6 }}>
              Core UI sets a high standard for scalable, cohesive, and robust enterprise-grade component libraries.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Link 
                to="/work" 
                className="btn btn-primary"
                style={{ 
                  background: '#6366f1', 
                  color: '#fff', 
                  border: 'none', 
                  padding: '16px 32px', 
                  borderRadius: '100px', 
                  fontSize: '1.1rem', 
                  textDecoration: 'none', 
                  fontWeight: 600, 
                  boxShadow: '0 15px 30px rgba(99, 102, 241, 0.25)',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
              >
                Back to all work &rarr;
              </Link>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default CoreUiMobileDslCaseStudy;
