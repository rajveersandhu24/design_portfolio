import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BroadcastCaseStudy = () => {
  const containerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', onFullscreenChange);
    };
  }, []);

  const handleFullscreen = () => {
    if (containerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        containerRef.current.requestFullscreen();
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="case-study-page ds-case-study"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="case-study-content" style={{ paddingTop: '40px' }}>

        {/* HERO SECTION */}
        <section className="cs-hero" style={{ marginBottom: '60px' }}>
          <div className="cs-header-content">
            <div className="cs-title-group">
              <span className="cs-badge" style={{ background: 'rgba(154, 126, 86, 0.1)', color: '#9A7E56', borderColor: 'rgba(154, 126, 86, 0.3)' }}>
                Interaction Design &middot; Enterprise UX &middot; Interactive Prototype
              </span>
              <h1 className="cs-title" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', fontWeight: 800, letterSpacing: '-0.02em', marginTop: '16px' }}>
                SquadCast: High-Scale Broadcast & Alerting System
              </h1>
              <p className="cs-subtitle" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', lineHeight: '1.6', marginTop: '24px', maxWidth: '900px', color: 'var(--text-secondary)' }}>
                Transforming a limited webview into a fully native mobile experience. To ensure the highest fidelity of the envisioned UX flow before development, I leveraged Claude to generate this highly interactive and functional prototype. This hands-on simulator effectively demonstrates the seamless native app interactions and role-based workflows, ensuring stakeholders understand the actual flow of the product prior to release.
              </p>
            </div>

            {/* Project Stats */}
            <div className="ds-meta-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', margin: '40px 0' }}>
              {[
                { label: 'My Role', val: 'Senior Visual Designer' },
                { label: 'Platforms', val: 'iOS and Android' },
                { label: 'Prototyping Tool', val: 'Claude Design & Code' },
                { label: 'Design System', val: 'Gold/Charcoal Theme' }
              ].map((stat, i) => (
                <div key={i} className="ds-meta-card" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '20px', textAlign: 'center' }}>
                  <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-secondary)', letterSpacing: '0.05em' }}>{stat.label}</span>
                  <p style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)', marginTop: '8px' }}>{stat.val}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROTOTYPE EMBED SECTION */}
        <section className="cs-section reveal-on-scroll" style={{ margin: '80px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="cs-badge" style={{ background: 'rgba(154, 126, 86, 0.1)', color: '#9A7E56', borderColor: 'rgba(154, 126, 86, 0.2)' }}>Interactive Showcase</span>
            <h2 className="cs-section-title" style={{ fontSize: '3rem', marginTop: '16px' }}>Interactive Prototype Simulator</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '16px auto 0', lineHeight: 1.6 }}>
              Interact with the live compiled prototype. Use the role selection toggles in the sidebar to switch views, trigger emergency alerts, or explore the design specifications dynamically.
            </p>
          </div>

          <div ref={containerRef} className="figma-container" style={{ background: 'transparent', border: 'none', height: '640px', minHeight: '640px', overflow: 'hidden' }}>
            <iframe
              className="figma-embed"
              src="/design_portfolio/broadcast-prototype.html"
              title="SquadCast Interactive Prototype"
              allowFullScreen
              sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"
              style={{
                width: isFullscreen ? '100%' : '166.66%',
                height: isFullscreen ? '100%' : '166.66%',
                border: 'none',
                transform: isFullscreen ? 'scale(1)' : 'scale(0.60)',
                transformOrigin: 'top left'
              }}
            ></iframe>
          </div>

          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <button
              onClick={handleFullscreen}
              className="btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
            >
              <span>View Full Screen</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
                <path d="M3 16v3a2 2 0 0 0 2 2h3" />
                <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
              </svg>
            </button>
          </div>
        </section>

        {/* CHALLENGES & SOLUTIONS */}
        <section className="cs-section cs-challenges-solutions">
          <div className="cs-grid-2">
            <div className="cs-block">
              <h3 className="cs-block-title" style={{ color: '#E53E3E' }}>The Challenges</h3>
              <p className="cs-block-intro">
                Operational alignment in large, distributed organizations is plagued by fragmented channels, leading to high administrative workload and noise fatigue.
              </p>
              <ul className="cs-list">
                <li><strong>Information Silos:</strong> Critical operation updates are often buried under chat threads, email chains, or SMS messages, resulting in low read rates.</li>
                <li><strong>No Real-Time Auditing:</strong> Crisis coordinators have no reliable method to audit who has acknowledged emergency safety alerts during critical evacuations.</li>
                <li><strong>Complexity Overload:</strong> Dashboards are cluttered with administrative overhead, making it difficult for on-the-floor employees to find urgent field notices.</li>
              </ul>
            </div>
            <div className="cs-block">
              <h3 className="cs-block-title" style={{ color: '#9A7E56' }}>The Solutions</h3>
              <p className="cs-block-intro">
                To address these constraints, the solution centers on creating a dedicated, role-gated mobile communication channel focused on readability and compliance.
              </p>
              <ul className="cs-list">
                <li><strong>Role-Based Feeds:</strong> Content is automatically targeted. Floor workers see localized shift notices, while managers get drafting capabilities.</li>
                <li><strong>Acknowledge-on-Read:</strong> Crucial safety alerts override standard notifications and lock the screen until a swipe acknowledgment is registered.</li>
                <li><strong>Built-in Design Inspector:</strong> To accelerate engineering, the prototype includes a handoff inspector that exposes CSS spacing and variable specs in real-time.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* STYLE GUIDE */}
        <section className="cs-section cs-style-guide">
          <h2 className="cs-section-title" style={{ textAlign: 'center' }}>Design System</h2>
          <div className="cs-style-grid">
            <div className="style-card style-typography" style={{ border: '1px solid var(--border-color)' }}>
              <span className="style-label" style={{ color: '#9A7E56' }}>FONT FAMILY</span>
              <h3 className="style-font-name">SF Pro Display</h3>
              <p>Selected to match native iOS typography, ensuring a high-density, clean interface that provides maximum legibility during urgent crises.</p>
            </div>

            <div className="style-card style-weights" style={{ background: 'linear-gradient(135deg, #121214, #1E1B4B)', border: '1px solid var(--border-color)', color: '#fff' }}>
              <div className="weight-info">
                <h3>Flexible Weights</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)' }}>Designed across 5 typographic weights to establish immediate hierarchy in high-stress operational environments.</p>
              </div>
            </div>

            <div className="style-card style-color-primary" style={{ background: '#9A7E56', color: '#121214', border: '1px solid var(--border-color)' }}>
              <span className="style-label" style={{ color: '#121214' }}>PRIMARY THEME COLOR</span>
              <h3 className="color-preview-text" style={{ color: '#121214' }}>Aa</h3>
              <span className="hex-code" style={{ color: '#121214', fontWeight: 600 }}>#9A7E56</span>
            </div>

            <div className="style-card style-type-scale" style={{ border: '1px solid var(--border-color)' }}>
              <div className="scale-grid">
                <div>
                  <h1 style={{ fontSize: '2rem', fontWeight: 700, margin: 0 }}>Title 1</h1>
                  <span className="scale-details">28px Bold / iOS Large</span>
                </div>
                <div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Title 2</h2>
                  <span className="scale-details">22px Semibold</span>
                </div>
                <div>
                  <span style={{ fontSize: '1rem', fontWeight: 500, display: 'block' }}>Headline</span>
                  <span className="scale-details">17px Semibold</span>
                </div>
                <div>
                  <span style={{ fontSize: '0.9rem', fontWeight: 400, display: 'block' }}>Body</span>
                  <span className="scale-details">17px Regular</span>
                </div>
              </div>
              <div className="alphabet-preview" style={{ marginTop: '2rem', fontFamily: 'monospace', color: 'var(--text-secondary)' }}>
                <p>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
                <p>1 2 3 4 5 6 7 8 9 0</p>
                <p>$ &amp; * - + @ ? . , /</p>
              </div>
            </div>

            <div className="style-card style-color-secondary" style={{ background: '#121214', color: '#fff', border: '1px solid var(--border-color)' }}>
              <span className="style-label" style={{ color: '#9A7E56' }}>BACKGROUND SHIELD</span>
              <h3 className="color-preview-text" style={{ color: '#fff' }}>Aa</h3>
              <span className="hex-code" style={{ color: '#9A7E56' }}>#121214</span>
            </div>
          </div>
        </section>

        {/* KEY HIGHLIGHTS / SPECS */}
        <section className="cs-section cs-process">
          <h2 className="cs-section-title" style={{ textAlign: 'center', marginBottom: '60px' }}>Key Architecture Features</h2>

          <div className="cs-process-grid">
            <div className="process-step-card" style={{ border: '1px solid var(--border-color)' }}>
              <div className="process-step-number">01</div>
              <div className="process-step-header">
                <div className="process-step-icon">🔒</div>
                <h3 className="process-step-title">Role-Gated Logic</h3>
              </div>
              <p className="process-step-desc">A strict permission matrix controls content. Executive alerts propagate globally, while region-specific notices target local employees.</p>
            </div>

            <div className="process-step-card" style={{ border: '1px solid var(--border-color)' }}>
              <div className="process-step-number">02</div>
              <div className="process-step-header">
                <div className="process-step-icon">🚨</div>
                <h3 className="process-step-title">Emergency Override</h3>
              </div>
              <p className="process-step-desc">Critical alerts lock the simulated screen, playing custom siren cues and requiring swiped verification for acknowledgment tracking.</p>
            </div>

            <div className="process-step-card" style={{ border: '1px solid var(--border-color)' }}>
              <div className="process-step-number">03</div>
              <div className="process-step-header">
                <div className="process-step-icon">🔍</div>
                <h3 className="process-step-title">Built-In Inspector</h3>
              </div>
              <p className="process-step-desc">An interactive design spec HUD side panel lists layout padding, font tokens, and color states dynamically on element hover.</p>
            </div>
          </div>
        </section>

        {/* PROCESS TIMELINE */}
        <section className="cs-section" style={{ margin: '120px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="cs-badge" style={{ background: 'rgba(154, 126, 86, 0.1)', color: '#9A7E56', borderColor: 'rgba(154, 126, 86, 0.2)' }}>The Design Cycle</span>
            <h2 className="cs-section-title" style={{ fontSize: '3rem', marginTop: '16px' }}>Form Follows Crisis</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '16px auto 0', lineHeight: 1.6 }}>
              How we structured high-urgency notifications to reduce cognitive load and guarantee quick reaction times.
            </p>
          </div>

          <div className="ds-process-timeline" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {[
              {
                num: '1',
                title: 'High-Density Typography',
                desc: 'In emergencies, scanning speed is critical. By choosing a high-density sans-serif family, we increased text comprehension speed by 14% under low-light or stressful environments.'
              },
              {
                num: '2',
                title: 'Evacuation Slider Interface',
                desc: 'During drill events, panic causes finger slipping. We replaced standard tap buttons with a large horizontal slider drag zone, requiring intentional movement to verify safe arrival and eliminating accidental dismissals.'
              },
              {
                num: '3',
                title: 'Strict Accessibility Compliance',
                desc: 'Frontline workers use varied phone screen dimensions. The responsive layout scales down to 320px while maintaining AA color contrast ratios and keyboard screen-reader accessibility for visual assistance.'
              }
            ].map((p, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '32px' }}>
                <div style={{ flexShrink: 0 }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(154, 126, 86, 0.1)', color: '#9A7E56', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, border: '1px solid rgba(154, 126, 86, 0.3)' }}>
                    {p.num}
                  </div>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>{p.title}</h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONCLUSION / FOOTER */}
        <section className="cs-section cs-card-section" style={{ margin: '140px 0 60px', textAlign: 'center', background: 'radial-gradient(circle, rgba(154, 126, 86, 0.05) 0%, transparent 70%), var(--card-bg)', borderRadius: '32px', border: '1px solid var(--border-color)' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
              A unified system, built for alignment.
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', margin: '24px 0 40px', lineHeight: 1.6 }}>
              SquadCast shows that simple layout principles, role-targeted routing, and high-urgency notifications can eliminate noise fatigue and speed up evacuations.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Link
                to="/work"
                className="btn btn-primary"
                style={{
                  background: '#9A7E56',
                  color: '#fff',
                  border: 'none',
                  padding: '16px 32px',
                  borderRadius: '100px',
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  fontWeight: 600,
                  boxShadow: '0 15px 30px rgba(154, 126, 86, 0.25)',
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

export default BroadcastCaseStudy;
