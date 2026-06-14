import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const HealthcareCaseStudy = () => {
  const location = useLocation();
  const fromCaseStudies = location.state?.from === 'Case Studies';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="case-study-page">
      <div className="case-study-content" style={{ paddingTop: '40px' }}>
        <section className="cs-hero">
          <div className="cs-header-content">
            <div className="cs-title-group">
              <span className="cs-badge">Care+</span>
              <h1 className="cs-title">Healthcare Mobile App</h1>
              <p className="cs-subtitle">Case Study</p>
            </div>
            <h2 className="cs-main-statement">
              Designing a seamless healthcare booking experience for patients and medical staff.
            </h2>
          </div>
        </section>

        {/* CREATIVE APP SHOWCASE HERO */}
        <section className="cs-app-showcase reveal-on-scroll">
          <div className="showcase-glow"></div>
          <div className="showcase-blob blob-1"></div>
          <div className="showcase-blob blob-2"></div>
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
                  e.currentTarget.style.transform = `rotateX(${y * -10}deg) rotateY(${x * 10}deg)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `rotateX(0deg) rotateY(0deg)`;
                }}
              >
                <img src={new URL('../assets/healthcare_app_images/healthcare_app.png', import.meta.url).href} alt="Care+ App Mockup" className="main-mockup" />
                <div className="mockup-reflection"></div>
              </div>
              <div className="floating-card card-1">
                <span className="card-icon">⚡</span>
                <p>Fast Booking</p>
              </div>
              <div className="floating-card card-2">
                <span className="card-icon">🏥</span>
                <p>Top Doctors</p>
              </div>
            </div>

            <div className="showcase-info">
              <div className="glass-panel">
                <div className="glass-header">
                  <span className="glass-tag">Innovation</span>
                  <h3>The Vision</h3>
                </div>
                <p>Creating a reliable and intuitive healthcare experience that helps patients connect with doctors quickly and confidently.</p>
                <div className="app-stats">
                  <div className="app-stat">
                    <span className="stat-num">5/5</span>
                    <label>UX Rating</label>
                  </div>
                  <div className="app-stat">
                    <span className="stat-num">100%</span>
                    <label>Accessibility</label>
                  </div>
                </div>
                <div className="glass-footer">
                  <div className="feature-pill">Intuitive UI</div>
                  <div className="feature-pill">Secure Data</div>
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
                How might we simplify appointment management for both patients and healthcare providers while improving access to medical care?
              </p>
              <ul className="cs-list">
                <li>Manual appointment workflows created operational inefficiencies and increased administrative workload for healthcare staff.</li>
                <li>Existing appointment systems lacked streamlined workflows for nurses and hospital staff.</li>
                <li>Appointment scheduling was heavily dependent on manual coordination, leading to delays and inconsistencies.</li>
              </ul>
            </div>
            <div className="cs-block">
              <h3 className="cs-block-title">Solutions</h3>
              <p className="cs-block-intro">
                To address these challenges, the solution focused on creating an accessible mobile application that simplifies appointment booking and healthcare communication.
              </p>
              <ul className="cs-list">
                <li>Nurses can manage and monitor appointments through a centralized admin dashboard.</li>
                <li>Automated appointment reminders help doctors stay informed about upcoming consultations.</li>
                <li>The interface was intentionally designed to remain simple and accessible for users with limited technical experience.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="cs-section cs-persona">
          <h2 className="cs-section-title">User Persona</h2>
          <p className="cs-section-desc">
            User research was conducted through interviews and surveys to better understand healthcare accessibility, technology usage, and patient behavior across different demographics.
          </p>

          <div className="cs-persona-card">
            <div className="cs-persona-header">
              <div className="cs-persona-avatar">
                {/* Placeholder for Aisha's avatar */}
                <div className="avatar-placeholder">👩🏽‍🦰</div>
              </div>
              <div className="cs-persona-info">
                <h4>Name: Aisha</h4>
                <p>Age: 40</p>
                <p>Occupation: Homemaker</p>
                <p>Location: India</p>
              </div>
              <div className="cs-persona-stats">
                <div className="stat-box">
                  <span className="stat-value">6</span>
                  <span className="stat-label">INTERVIEWS</span>
                </div>
                <div className="stat-box">
                  <span className="stat-value">10</span>
                  <span className="stat-label">QUESTIONS</span>
                </div>
                <div className="stat-box">
                  <span className="stat-value">18-45</span>
                  <span className="stat-label">AGE GROUP</span>
                </div>
              </div>
            </div>

            <div className="cs-persona-details">
              <div className="detail-group">
                <h5>Background:</h5>
                <p>Aisha is a homemaker who prioritizes her family’s health and wants quick access to reliable healthcare information and appointment services through her mobile device.</p>
              </div>
              <div className="detail-group">
                <h5>Goals and Needs:</h5>
                <p>Aisha needs a simple and trustworthy platform where she can:</p>
                <ul className="cs-persona-list">
                  <li>Book appointments easily</li>
                  <li>Access healthcare information quickly</li>
                  <li>Find nearby clinics and doctors</li>
                  <li>Communicate with healthcare providers when needed</li>
                </ul>
              </div>
              <div className="detail-group">
                <h5>Frustrations:</h5>
                <p>Aisha struggles with long waiting times, difficulty navigating healthcare services, and identifying trustworthy medical information online.</p>
              </div>
              <div className="detail-group">
                <h5>Technical Abilities:</h5>
                <p>Aisha is comfortable using basic mobile applications and is open to learning new technology if it improves healthcare accessibility for her family.</p>
              </div>
              <div className="detail-group">
                <h5>Values and Motivations:</h5>
                <p>Her primary motivation is ensuring the wellbeing of her family through accessible, affordable, and reliable healthcare services.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cs-section cs-research">
          <h2 className="cs-section-title">Research & Survey Results</h2>
          <p className="cs-section-desc">
            Interviews were conducted with users from different age groups and backgrounds to identify common healthcare accessibility challenges.
          </p>
          <ul className="cs-list cs-list-large">
            <li>Limited access to healthcare services due to location, affordability, and transportation barriers.</li>
            <li>Difficulty understanding medical terminology and identifying symptoms accurately.</li>
            <li>Challenges in maintaining medication schedules consistently.</li>
            <li>Difficulty accessing and sharing medical records with healthcare providers.</li>
          </ul>
        </section>

        <section className="cs-section cs-process">
          <h2 className="cs-section-title" style={{ textAlign: 'center', marginBottom: '60px' }}>Design Process</h2>

          <div className="cs-process-grid">
            <div className="process-step-card">
              <div className="process-step-number">01</div>
              <div className="process-step-header">
                <div className="process-step-icon">🔎</div>
                <h3 className="process-step-title">Understand</h3>
              </div>
              <p className="process-step-desc">Identified the core challenges in healthcare appointment management and accessibility.</p>
            </div>

            <div className="process-step-card">
              <div className="process-step-number">02</div>
              <div className="process-step-header">
                <div className="process-step-icon">👥</div>
                <h3 className="process-step-title">Research</h3>
              </div>
              <p className="process-step-desc">Conducted user research and built personas to better understand patient pain points and behaviors.</p>
            </div>

            <div className="process-step-card">
              <div className="process-step-number">03</div>
              <div className="process-step-header">
                <div className="process-step-icon">🏗️</div>
                <h3 className="process-step-title">Analyse</h3>
              </div>
              <p className="process-step-desc">Structured the user flow and information architecture to simplify navigation and appointment booking.</p>
            </div>

            <div className="process-step-card">
              <div className="process-step-number">04</div>
              <div className="process-step-header">
                <div className="process-step-icon">🎨</div>
                <h3 className="process-step-title">Design</h3>
              </div>
              <p className="process-step-desc">Created wireframes and high-fidelity UI designs focused on accessibility and ease of use.</p>
            </div>

            <div className="process-step-card">
              <div className="process-step-number">05</div>
              <div className="process-step-header">
                <div className="process-step-icon">🧪</div>
                <h3 className="process-step-title">Testing</h3>
              </div>
              <p className="process-step-desc">Validated usability through testing and refined the experience based on user feedback.</p>
            </div>
          </div>
        </section>

        <section className="cs-section cs-style-guide">
          <h2 className="cs-section-title" style={{ textAlign: 'center' }}>Style Guide</h2>
          <div className="cs-style-grid">
            <div className="style-card style-typography">
              <span className="style-label">FONT FAMILY</span>
              <h3 className="style-font-name">Fira Sans</h3>
              <p>Fira Sans was selected for its readability, accessibility, and clean appearance across mobile devices and varying screen sizes.</p>
            </div>
            <div className="style-card style-weights">
              <div className="weight-info">
                <h3>5 weights</h3>
                <h3>2 Styles</h3>
                <span className="hex-code">#FFFFFF</span>
              </div>
            </div>
            <div className="style-card style-color-primary">
              <span className="style-label">PRIMARY COLOR</span>
              <h3 className="color-preview-text">Aa</h3>
              <span className="hex-code">#044389</span>
            </div>
            <div className="style-card style-type-scale">
              <div className="scale-grid">
                <div>
                  <h1 style={{ fontSize: '2.5rem', fontWeight: 600, margin: 0 }}>Head 1</h1>
                  <span className="scale-details">42/48 Semibold</span>
                </div>
                <div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Head 3</h2>
                  <span className="scale-details">24/32 px Semibold</span>
                </div>
                <div>
                  <span style={{ fontSize: '1rem', fontWeight: 500, display: 'block' }}>Body large</span>
                  <span className="scale-details">16/24 px Medium</span>
                </div>
                <div>
                  <span style={{ fontSize: '0.875rem', fontWeight: 400, display: 'block' }}>Body</span>
                  <span className="scale-details">14/18 px regular</span>
                </div>
                <div>
                  <h2 style={{ fontSize: '2rem', fontWeight: 600, margin: 0 }}>Head 2</h2>
                  <span className="scale-details">32/40 Semibold</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 500, margin: 0 }}>Title</h3>
                  <span className="scale-details">18/24 px Medium</span>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 400, display: 'block' }}>Small</span>
                  <span className="scale-details">12/16 px regular</span>
                </div>
                <div>
                  <span style={{ fontSize: '0.625rem', fontWeight: 400, display: 'block' }}>Outline</span>
                  <span className="scale-details">10/14 px regular</span>
                </div>
              </div>
              <div className="alphabet-preview" style={{ marginTop: '2rem', fontFamily: 'monospace' }}>
                <p>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
                <p>1 2 3 4 5 6 7 8 9 0</p>
                <p>$ & * - + @ ? . , /</p>
              </div>
            </div>
            <div className="style-card style-color-secondary">
              <span className="style-label">ACCENT COLOR</span>
              <h3 className="color-preview-text">Aa</h3>
              <span className="hex-code">#EB5E28</span>
            </div>
          </div>
        </section>

        <section className="cs-section cs-main-screens">
          <h2 className="cs-section-title" style={{ textAlign: 'center' }}>Main Screens</h2>
          <p className="cs-section-desc" style={{ textAlign: 'center', margin: '0 auto 60px' }}>
            The primary screens allow users to manage appointments, explore doctors by specialization, track bookings, and maintain personal health information.
          </p>
          <div className="cs-screens-grid grid-3">
            <div className="screen-card">
              <img src={new URL('../assets/healthcare_app_images/Mobile Screens/Home_screen.png', import.meta.url).href} alt="Home Screen" className="screen-img" />
            </div>
            <div className="screen-card">
              <img src={new URL('../assets/healthcare_app_images/Mobile Screens/Explore_screen.png', import.meta.url).href} alt="Explore Screen" className="screen-img" />
            </div>
            <div className="screen-card">
              <img src={new URL('../assets/healthcare_app_images/Mobile Screens/My_Bookings_screen.png', import.meta.url).href} alt="My Bookings Screen" className="screen-img" />
            </div>
            <div className="screen-card">
              <img src={new URL('../assets/healthcare_app_images/Mobile Screens/My_profile_screen.png', import.meta.url).href} alt="My Profile Screen" className="screen-img" />
            </div>
          </div>
        </section>

        <section className="cs-section cs-add-appointment">
          <h2 className="cs-section-title" style={{ textAlign: 'center' }}>Add Appointment Screens</h2>
          <p className="cs-section-desc" style={{ textAlign: 'center', margin: '0 auto 60px' }}>
            The appointment booking flow was designed to be quick, intuitive, and accessible, allowing users to complete the process in just a few steps.
          </p>
          <div className="cs-screens-grid grid-3">
            <div className="screen-card">
              <img src={new URL('../assets/healthcare_app_images/Mobile Screens/Home.png', import.meta.url).href} alt="Home" className="screen-img" />
            </div>
            <div className="screen-card">
              <img src={new URL('../assets/healthcare_app_images/Mobile Screens/Select_Symptom.png', import.meta.url).href} alt="Select Symptom" className="screen-img" />
            </div>
            <div className="screen-card">
              <img src={new URL('../assets/healthcare_app_images/Mobile Screens/Select_Practitioner.png', import.meta.url).href} alt="Select Practitioner" className="screen-img" />
            </div>
            <div className="screen-card">
              <img src={new URL('../assets/healthcare_app_images/Mobile Screens/Select_Date_&_Time.png', import.meta.url).href} alt="Select Date & Time" className="screen-img" />
            </div>
            <div className="screen-card">
              <img src={new URL('../assets/healthcare_app_images/Mobile Screens/Appointment_Booked.png', import.meta.url).href} alt="Appointment Booked" className="screen-img" />
            </div>
          </div>
        </section>

        <section className="cs-section cs-conclusion">
          <div className="cs-grid-2 align-center">
            <div className="conclusion-text">
              <h2 className="cs-section-title" style={{ fontSize: '4rem', marginBottom: '32px' }}>Conclusion</h2>
              <p className="cs-block-intro" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                Care+ was designed to simplify the healthcare appointment experience for both patients and medical staff. The platform streamlines appointment booking, improves coordination between patients, nurses, and doctors, and reduces the inefficiencies of traditional offline systems. By focusing on accessibility and simplicity, the solution aims to make healthcare services more approachable and manageable for a wider audience.
              </p>
            </div>
            <div className="conclusion-image">
              <img src={new URL('../assets/healthcare_app_images/conclusion_image.png', import.meta.url).href} alt="Care+ Conclusion Mockup" className="conclusion-mockup" />
            </div>
          </div>
        </section>

        {/* Section 7 — CTA */}
        <section className="cs-section cs-card-section" style={{ margin: '140px 0 60px', textAlign: 'center', background: 'radial-gradient(circle, rgba(4, 67, 137, 0.05) 0%, transparent 70%), var(--card-bg)', borderRadius: '32px', border: '1px solid var(--border-color)' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
              Simplifying care, one screen at a time.
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', margin: '24px 0 40px', lineHeight: 1.6 }}>
              By focusing on accessibility and intuitive flows, Care+ makes appointment management simple and stress-free for both patients and healthcare providers.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Link 
                to="/work" 
                className="btn btn-primary"
                style={{ 
                  background: '#044389', 
                  color: '#fff', 
                  border: 'none', 
                  padding: '16px 32px', 
                  borderRadius: '100px', 
                  fontSize: '1.1rem', 
                  textDecoration: 'none', 
                  fontWeight: 600, 
                  boxShadow: '0 15px 30px rgba(4, 67, 137, 0.25)',
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
    </div>
  );
};

export default HealthcareCaseStudy;
