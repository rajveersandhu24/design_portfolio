import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const LearningPlatformCaseStudy = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const location = useLocation();
  const fromCaseStudies = location.state?.from === 'Case Studies';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (selectedImg !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedImg]);

  const screens = [
    { src: 'Screen 1.png', alt: 'Courses Dashboard' },
    { src: 'Screen 2.png', alt: 'Course Enroll' },
    { src: 'Screen 3.png', alt: 'Instructor Profile' },
    { src: 'Screen 4.png', alt: 'Career Pathway' },
    { src: 'Screen 5.png', alt: 'Career Counselling' },
    { src: 'Screen 6.png', alt: 'User Profile' }
  ];

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedImg((prev) => (prev === 0 ? screens.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedImg((prev) => (prev === screens.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="case-study-page">
      <div className="case-study-content" style={{ paddingTop: '40px' }}>
        <section className="cs-hero">
          <div className="cs-header-content">
            <div className="cs-title-group">
              <span className="cs-badge">LEAP</span>
              <h1 className="cs-title">Learning Platform</h1>
              <p className="cs-subtitle">Case Study</p>
            </div>
            <h2 className="cs-main-statement">
              Designing a learning experience that connects skill-building with real career outcomes.
            </h2>
          </div>
        </section>

        {/* CREATIVE APP SHOWCASE HERO */}
        <section className="cs-app-showcase reveal-on-scroll">
          <div className="showcase-glow"></div>
          <div className="showcase-blob blob-1" style={{ background: 'rgba(62, 39, 35, 0.2)' }}></div>
          <div className="showcase-blob blob-2" style={{ background: 'rgba(255, 231, 186, 0.15)' }}></div>
          <div className="accent-dot dot-1"></div>
          <div className="accent-dot dot-2"></div>
          <div className="accent-dot dot-3"></div>

          <div className="showcase-inner">
            <div className="showcase-image-wrapper">
              <div
                className="mockup-container"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = (e.clientX - rect.left) / rect.width - 0.5;
                  const y = (e.clientY - rect.top) / rect.height - 0.5;
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${y * -10}deg) rotateY(${x * 10}deg)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
                }}
              >
                <img
                  src={new URL('../assets/LEAP/Screen 1.png', import.meta.url).href}
                  alt="Learning Platform Hero"
                  className="main-mockup"
                  style={{ borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', width: '100%', height: 'auto' }}
                />
                <div className="mockup-reflection"></div>
              </div>
              <div className="floating-card card-1">
                <span className="card-icon">🎯</span>
                <p>Career Paths</p>
              </div>
              <div className="floating-card card-2">
                <span className="card-icon">📈</span>
                <p>Goal Tracking</p>
              </div>
            </div>

            <div className="showcase-info">
              <div className="glass-panel">
                <div className="glass-header">
                  <span className="glass-tag">Upskilling</span>
                  <h3>The Vision</h3>
                </div>
                <p>Reimagining the traditional LMS experience with personalized career pathways, guided learning journeys, and goal-driven engagement.</p>
                <div className="app-stats">
                  <div className="app-stat">
                    <span className="stat-num">82%</span>
                    <label>Career Focus</label>
                  </div>
                  <div className="app-stat">
                    <span className="stat-num">71%</span>
                    <label>Retention</label>
                  </div>
                </div>
                <div className="glass-footer">
                  <div className="feature-pill">Visual Roadmaps</div>
                  <div className="feature-pill">Smart Goals</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cs-section cs-challenges-solutions">
          <div className="cs-grid-2">
            <div className="cs-block">
              <h3 className="cs-block-title">Challenges</h3>
              <p className="cs-block-intro">
                Learners often struggle to identify the right learning path when faced with large course libraries and unclear career direction.
              </p>
              <ul className="cs-list">
                <li><strong>The "What Next?" Dilemma:</strong> Users complete courses without understanding how those skills contribute to long-term career progression.</li>
                <li><strong>Low Long-Term Retention:</strong> The absence of structured learning paths leads to reduced long-term engagement and inconsistent learning habits.</li>
                <li><strong>Information Overload:</strong> Massive catalogs leave users overwhelmed and struggling to find specific technical tracks.</li>
              </ul>
            </div>
            <div className="cs-block">
              <h3 className="cs-block-title">Solutions</h3>
              <p className="cs-block-intro">
                Bridging the gap between learning and career growth through visual guidance and personalized tracking.
              </p>
              <ul className="cs-list">
                <li><strong>Interactive Career Mapping:</strong> An interactive career roadmap that visually connects current skills, recommended courses, and future career goals.</li>
                <li><strong>Personalized Dashboard:</strong> A personalized dashboard featuring weekly goals, recommended learning tracks, and progress visibility.</li>
                <li><strong>Gamified Accountability:</strong> Progress tracking, milestone-based goals, and performance insights designed to encourage consistent learning habits.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="cs-section cs-persona">
          <h2 className="cs-section-title">User Persona</h2>
          <p className="cs-section-desc">
            Defining the core user to ensure the roadmap features address real-world career anxieties and professional goals.
          </p>

          <div className="cs-persona-card">
            <div className="cs-persona-header">
              <div className="cs-persona-avatar">
                <div className="avatar-placeholder" style={{ background: 'linear-gradient(135deg, #3E2723, #5D4037)' }}>👨🏻‍💻</div>
              </div>
              <div className="cs-persona-info">
                <h4>Mark, The Upskilling Developer</h4>
                <p>Age: 28</p>
                <p>Role: Associate Software Developer</p>
                <p>Goal: Transition to Senior DevOps Engineer</p>
              </div>
              <div className="cs-persona-stats">
                <div className="stat-box">
                  <span className="stat-value">2yrs</span>
                  <span className="stat-label">TIME HORIZON</span>
                </div>
                <div className="stat-box">
                  <span className="stat-value">High</span>
                  <span className="stat-label">MOTIVATION</span>
                </div>
                <div className="stat-box">
                  <span className="stat-value">4.5h</span>
                  <span className="stat-label">WEEKLY STUDY</span>
                </div>
              </div>
            </div>

            <div className="cs-persona-details">
              <div className="detail-group">
                <h5>Background:</h5>
                <p>Mark wants to transition into a DevOps role but struggles to identify the right learning sequence and industry-relevant skills.</p>
              </div>
              <div className="detail-group">
                <h5>Needs:</h5>
                <p>A structured learning roadmap with measurable progress tracking and industry-recognized certifications.</p>
              </div>
              <div className="detail-group">
                <h5>Frustrations:</h5>
                <p>Overwhelmed by choice; doesn't know which specific courses are recognized by industry standards or what order to take them in.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cs-section cs-research">
          <h2 className="cs-section-title">Research & Survey Results</h2>
          <div className="cs-grid-2">
            <div className="cs-block">
              <h3 className="cs-block-title">Methodology</h3>
              <p className="cs-block-intro">
                Conducted competitive analysis and user interviews with mid-level professionals to understand learning behaviors and career progression challenges.
              </p>
              <ul className="cs-list">
                <li><strong>Gap Analysis:</strong> Most competing platforms offered extensive course libraries but lacked guided career progression experiences.</li>
                <li><strong>Professional Interviews:</strong> Recurring theme was the desire for mentorship-style guidance built directly into the UI.</li>
              </ul>
            </div>
            <div className="cs-block">
              <h3 className="cs-block-title">Key Insights</h3>
              <ul className="cs-list">
                <li><strong>82%</strong> of professionals enroll in courses for career advancement or role transition.</li>
                <li><strong>65%</strong> of users felt overwhelmed by the volume of choices in standard course catalogs.</li>
                <li><strong>71%</strong> of users felt more motivated when learning progress was tied to a specific career objective.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="cs-section cs-process">
          <h2 className="cs-section-title" style={{ textAlign: 'center', marginBottom: '60px' }}>Design Process</h2>
          <div className="cs-process-grid">
            <div className="process-step-card">
              <div className="process-step-number">01</div>
              <div className="process-step-header">
                <div className="process-step-icon">🔎</div>
                <h3 className="process-step-title">Discover</h3>
              </div>
              <p className="process-step-desc">Conducted research to identify learning challenges, motivation gaps, and platform usability pain points.</p>
            </div>

            <div className="process-step-card">
              <div className="process-step-number">02</div>
              <div className="process-step-header">
                <div className="process-step-icon">🏗️</div>
                <h3 className="process-step-title">Define</h3>
              </div>
              <p className="process-step-desc">Defined the information architecture to simplify navigation and improve content discoverability.</p>
            </div>

            <div className="process-step-card">
              <div className="process-step-number">03</div>
              <div className="process-step-header">
                <div className="process-step-icon">💡</div>
                <h3 className="process-step-title">Ideate</h3>
              </div>
              <p className="process-step-desc">Explored intuitive ways to visualize career progression without overwhelming users.</p>
            </div>

            <div className="process-step-card">
              <div className="process-step-number">04</div>
              <div className="process-step-header">
                <div className="process-step-icon">🎨</div>
                <h3 className="process-step-title">Design</h3>
              </div>
              <p className="process-step-desc">Created a scalable design system and reusable components to maintain consistency across the platform.</p>
            </div>

            <div className="process-step-card">
              <div className="process-step-number">05</div>
              <div className="process-step-header">
                <div className="process-step-icon">🧪</div>
                <h3 className="process-step-title">Test</h3>
              </div>
              <p className="process-step-desc">Tested user flows and navigation patterns to validate usability and improve learning journey clarity.</p>
            </div>
          </div>
        </section>

        <section className="cs-section cs-style-guide">
          <h2 className="cs-section-title" style={{ textAlign: 'center' }}>Style Guide</h2>
          <div className="cs-style-grid">
            <div className="style-card style-typography" style={{ background: '#3E2723' }}>
              <span className="style-label">TYPOGRAPHY</span>
              <h3 className="style-font-name">Noto Sans</h3>
              <p>Modern sans-serif typeface chosen for its technical clarity and professional tone in enterprise environments.</p>
            </div>
            <div className="style-card style-weights" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}>
              <div className="weight-info">
                <h3>Scalable</h3>
                <h3>System</h3>
                <p style={{ marginTop: '16px', opacity: 0.7 }}>A modular card-based architecture ensuring consistency across desktop and mobile views.</p>
              </div>
            </div>
            <div className="style-card" style={{ background: '#3E2723', color: 'white' }}>
              <span className="style-label">PRIMARY COLOR</span>
              <h3 className="color-preview-text">Aa</h3>
              <span className="hex-code">#3E2723 (Dark Brown)</span>
            </div>
            <div className="style-card style-type-scale" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', gridArea: 'scale' }}>
              <div className="scale-grid">
                <div>
                  <h1 style={{ fontSize: '2.5rem', fontWeight: 600, margin: 0, fontFamily: 'Noto Sans' }}>Head 1</h1>
                  <span className="scale-details">42/48 Semibold</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0, fontFamily: 'Noto Sans' }}>Head 3</h3>
                  <span className="scale-details">24/32 px Semibold</span>
                </div>
                <div>
                  <span style={{ fontSize: '1.1rem', fontWeight: 500, display: 'block', fontFamily: 'Noto Sans' }}>Body large</span>
                  <span className="scale-details">16/24 px Medium</span>
                </div>
                <div>
                  <span style={{ fontSize: '1rem', fontWeight: 400, display: 'block', fontFamily: 'Noto Sans' }}>Body</span>
                  <span className="scale-details">14/18 px regular</span>
                </div>
                <div>
                  <h2 style={{ fontSize: '2rem', fontWeight: 600, margin: 0, fontFamily: 'Noto Sans' }}>Head 2</h2>
                  <span className="scale-details">32/40 Semibold</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 500, margin: 0, fontFamily: 'Noto Sans' }}>Title</h3>
                  <span className="scale-details">18/24 px Medium</span>
                </div>
                <div>
                  <span style={{ fontSize: '0.875rem', fontWeight: 400, display: 'block', fontFamily: 'Noto Sans' }}>Small</span>
                  <span className="scale-details">12/16 px regular</span>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 400, display: 'block', fontFamily: 'Noto Sans' }}>Outline</span>
                  <span className="scale-details">10/14 px regular</span>
                </div>
              </div>
              <div className="alphabet-preview" style={{ marginTop: '2rem', opacity: 0.7, fontSize: '0.9rem', fontFamily: 'monospace' }}>
                <p>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
                <p>1 2 3 4 5 6 7 8 9 0</p>
                <p>$ & * - + @ ? . , /</p>
              </div>
            </div>
            <div className="style-card" style={{ background: '#FFE7BA', color: '#3E2723' }}>
              <span className="style-label">ACCENT COLOR</span>
              <h3 className="color-preview-text">Aa</h3>
              <span className="hex-code">#FFE7BA (Cream)</span>
            </div>
          </div>
        </section>

        <section className="cs-section cs-main-screens">
          <h2 className="cs-section-title" style={{ textAlign: 'center' }}>Project Screens</h2>
          <p className="cs-section-desc" style={{ textAlign: 'center', margin: '0 auto 60px' }}>
            A scalable and modular interface designed to support courses, instructor discovery, and personalized career tracking.
          </p>
          <div className="cs-screens-grid grid-column-2">
            {screens.map((screen, idx) => (
              <div
                key={idx}
                className="screen-card-full"
                onClick={() => setSelectedImg(idx)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={new URL(`../assets/LEAP/${screen.src}`, import.meta.url).href}
                  alt={screen.alt}
                  className="screen-img"
                />
                <div className="screen-caption">{screen.alt}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="cs-section cs-conclusion">
          <div className="cs-grid-1 align-center" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div className="conclusion-text">
              <h2 className="cs-section-title" style={{ fontSize: '4rem', marginBottom: '32px' }}>Conclusion</h2>
              <div className="cs-block-intro" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                <p style={{ marginBottom: '20px' }}>
                  <strong>Project Impact:</strong> This solution transforms a traditional LMS into a career-focused learning platform that guides users beyond course completion toward long-term professional growth.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  <strong>Lessons Learned:</strong> One of the biggest challenges was simplifying complex career progression data into an experience that remained intuitive and visually approachable.
                </p>
                <p>
                  <strong>Next Steps:</strong> Future improvements could include AI-powered course recommendations and adaptive learning paths based on user progress and skill assessments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7 — CTA */}
        <section className="cs-section cs-card-section" style={{ margin: '140px 0 60px', textAlign: 'center', background: 'radial-gradient(circle, rgba(255, 231, 186, 0.05) 0%, transparent 70%), var(--card-bg)', borderRadius: '32px', border: '1px solid var(--border-color)' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
              Empowering growth through visual roadmaps.
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', margin: '24px 0 40px', lineHeight: 1.6 }}>
              LEAP bridges the gap between raw educational content and long-term career success through goal-oriented upskilling.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Link 
                to="/work" 
                className="btn btn-primary"
                style={{ 
                  background: '#FFE7BA', 
                  color: '#3E2723', 
                  border: 'none', 
                  padding: '16px 32px', 
                  borderRadius: '100px', 
                  fontSize: '1.1rem', 
                  textDecoration: 'none', 
                  fontWeight: 600, 
                  boxShadow: '0 15px 30px rgba(255, 231, 186, 0.25)',
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

      {/* FULLSCREEN IMAGE VIEWER / CAROUSEL */}
      {createPortal(
        <AnimatePresence>
          {selectedImg !== null && (
            <motion.div
              className="cs-lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
            >
              {/* Background Glows like Home Contact section */}
              <div className="lightbox-glow glow-1"></div>
              <div className="lightbox-glow glow-2"></div>

              <motion.div
                className="lightbox-content"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="lightbox-close" onClick={() => setSelectedImg(null)}>&times;</button>

                <div className="lightbox-main">
                  <button className="lightbox-nav prev" onClick={handlePrev}>&#8249;</button>
                  <div className="lightbox-image-container">
                    <motion.img
                      key={selectedImg}
                      src={new URL(`../assets/LEAP/${screens[selectedImg].src}`, import.meta.url).href}
                      alt={screens[selectedImg].alt}
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -100, opacity: 0 }}
                      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    />
                    <p className="lightbox-caption">{screens[selectedImg].alt}</p>
                  </div>
                  <button className="lightbox-nav next" onClick={handleNext}>&#8250;</button>
                </div>

                <div className="lightbox-thumbnails">
                  {screens.map((screen, idx) => (
                    <div
                      key={idx}
                      className={`thumb ${selectedImg === idx ? 'active' : ''}`}
                      onClick={() => setSelectedImg(idx)}
                    >
                      <img src={new URL(`../assets/LEAP/${screen.src}`, import.meta.url).href} alt="" />
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};

export default LearningPlatformCaseStudy;

