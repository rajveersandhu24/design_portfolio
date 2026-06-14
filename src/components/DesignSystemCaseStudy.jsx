import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const DesignSystemCaseStudy = () => {
  const [activeLayer, setActiveLayer] = useState(0);
  const [activeGalleryTab, setActiveGalleryTab] = useState('components');
  const [showFigmaEmbed, setShowFigmaEmbed] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const layers = [
    {
      id: 1,
      label: 'Foundation',
      name: 'Layer 1 — Tokens & Variables',
      oneLiner: 'Color, spacing, typography, and radius — defined once, used everywhere.',
      detail: 'Figma variables are defined for color modes (light/dark), spacing scale, border radius, and type scale. Semantic naming is used throughout — for example `color.surface.primary` rather than a raw hex — so that the same token name works in both design and code. Changing a token updates every component that references it instantly.',
      tags: ['Color modes', 'Spacing scale', 'Type scale', 'Border radius', 'Semantic naming']
    },
    {
      id: 2,
      label: 'Library',
      name: 'Layer 2 — Core Components',
      oneLiner: 'Buttons, inputs, badges, tags — the atomic building blocks.',
      detail: "Each component is built with Figma's auto-layout and component properties. Variants cover all interactive states (default, hover, focus, disabled, error). Every visual property — color, spacing, radius, typography — is wired to a token, not hardcoded. Components follow an anatomy-first approach: each part is named and documented within the file.",
      tags: ['Variants', 'States', 'Auto-layout', 'Token-linked', 'Accessible']
    },
    {
      id: 3,
      label: 'Navigation',
      name: 'Layer 3 — Navigation',
      oneLiner: 'Header, sidebar, breadcrumbs, and tab systems.',
      detail: 'Navigation components handle responsive breakpoints via component properties rather than separate components. Active, hover, and collapsed states are all defined. Spacing between items uses spacing tokens so the rhythm adjusts globally when the scale changes.',
      tags: ['Responsive', 'Active states', 'Collapsed variants', 'Token spacing']
    },
    {
      id: 4,
      label: 'Forms',
      name: 'Layer 4 — Forms',
      oneLiner: 'Inputs, selects, checkboxes, radios, and validation states.',
      detail: 'Form components include all validation states (empty, filled, error, success, disabled) and are built to match the interaction model expected by developers. Labels, helper text, and error messages are all part of the component — not floating text layers. This makes handoff clean and leaves no ambiguity.',
      tags: ['Validation states', 'Label system', 'Error patterns', 'Accessible markup']
    },
    {
      id: 5,
      label: 'Patterns',
      name: 'Layer 5 — Custom Components',
      oneLiner: 'Composite patterns built by combining core components.',
      detail: "Custom components like data cards, modals, steppers, and notification banners are assembled entirely from core components. Each one documents which atoms it's composed from and the rule for when to use it. This is where system thinking moves from theory to practice — no custom component exists without a reason, and every reason is written down.",
      tags: ['Composition rules', 'Slot system', 'Usage guidelines', 'Reusable patterns']
    },
    {
      id: 6,
      label: 'Icons',
      name: 'Layer 6 — Icons',
      oneLiner: 'A custom icon set sized and stroked with tokens.',
      detail: 'Icons are drawn on a consistent grid with stroke widths tied to a design token. This means when the token changes, icon weight updates across the system. The set covers the full UI vocabulary needed for the site: navigation, status, actions, and content types.',
      tags: ['Token-stroked', 'Grid-aligned', 'Scalable', 'Full coverage']
    },
    {
      id: 7,
      label: 'Output',
      name: 'Layer 7 — Screens',
      oneLiner: 'Full website designs assembled entirely from system components.',
      detail: 'The screens page is proof that the system works. Every UI element on every screen traces back to a component in the library. An annotation layer shows component coverage — the goal was above 90% system coverage, with no one-off UI elements that bypass the library. This is what makes the system trustworthy and the handoff fast.',
      tags: ['Component coverage', 'Design QA', 'Handoff-ready', 'Annotated']
    }
  ];

  const galleryItems = [
    {
      id: 'components',
      name: 'Components',
      type: 'embed',
      url: 'https://embed.figma.com/design/o0RIXuhjfVbjfx48LR3TWz/SquadCast-Web-Design-Library?node-id=0-1&embed-host=share'
    },
    {
      id: 'navigation',
      name: 'Navigation',
      type: 'embed',
      url: 'https://embed.figma.com/design/o0RIXuhjfVbjfx48LR3TWz/SquadCast-Web-Design-Library?node-id=791-25827&embed-host=share'
    },
    {
      id: 'forms',
      name: 'Forms',
      type: 'embed',
      url: 'https://embed.figma.com/design/o0RIXuhjfVbjfx48LR3TWz/SquadCast-Web-Design-Library?node-id=791-25829&embed-host=share'
    },
    {
      id: 'icons',
      name: 'Icons',
      type: 'embed',
      url: 'https://embed.figma.com/design/o0RIXuhjfVbjfx48LR3TWz/SquadCast-Web-Design-Library?node-id=873-15284&embed-host=share'
    },
    {
      id: 'custom-components',
      name: 'Custom Components',
      type: 'embed',
      url: 'https://embed.figma.com/design/o0RIXuhjfVbjfx48LR3TWz/SquadCast-Web-Design-Library?node-id=791-25830&embed-host=share'
    },
    {
      id: 'screens',
      name: 'Screens',
      type: 'embed',
      url: 'https://embed.figma.com/design/o0RIXuhjfVbjfx48LR3TWz/SquadCast-Web-Design-Library?node-id=62-1209&embed-host=share'
    }
  ];

  return (
    <motion.div 
      className="case-study-page ds-case-study"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="case-study-content" style={{ paddingTop: '40px' }}>
        
        {/* Page Hero */}
        <section className="cs-hero" style={{ marginBottom: '60px' }}>
          <div className="cs-header-content">
            <div className="cs-title-group">
              <span className="cs-badge" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderColor: 'rgba(16, 185, 129, 0.3)' }}>
                Product Design &middot; Design Systems &middot; AI-Ready
              </span>
              <h1 className="cs-title" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)', fontWeight: 800, letterSpacing: '-0.02em', marginTop: '16px' }}>
                A design system built for the age of AI agents
              </h1>
              <p className="cs-subtitle" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', lineHeight: '1.6', marginTop: '24px', maxWidth: '900px' }}>
                A full component library designed in Figma — with tokens, variables, and a structure that can be read and used by AI agents via MCP. Built for humans first. Ready for machines too.
              </p>
            </div>

            {/* Meta statistics row */}
            <div className="ds-meta-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', margin: '40px 0' }}>
              {[
                { label: 'Experience', val: '6 years experience' },
                { label: 'Figma Structure', val: 'Figma variables & tokens' },
                { label: 'AI Integration', val: 'MCP-compatible structure' },
                { label: 'Documentation', val: '6 component pages' }
              ].map((stat, i) => (
                <div key={i} className="ds-meta-card" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '20px', textAlign: 'center' }}>
                  <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-secondary)', letterSpacing: '0.05em' }}>{stat.label}</span>
                  <p style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)', marginTop: '8px' }}>{stat.val}</p>
                </div>
              ))}
            </div>

            {/* Hero visual wrapper */}
            <div className="ds-hero-visual reveal-on-scroll" style={{ width: '100%', height: '500px', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--border-color)', position: 'relative', background: '#0e1117' }}>
              <img 
                src={new URL('../assets/design_system/New Banner Image.webp', import.meta.url).href} 
                alt="Figma Canvas Workspace Showcase" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', bottom: '24px', right: '24px', zIndex: 10 }}>
                <button 
                  onClick={() => {
                    if (window.lenis) {
                      window.lenis.scrollTo('#figma-inspection-section', { duration: 1.2 });
                    } else {
                      document.getElementById('figma-inspection-section')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="btn"
                  style={{ background: '#10b981', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '100px', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: '0 10px 20px rgba(16, 185, 129, 0.25)', cursor: 'pointer' }}
                >
                  Inspect Figma File &rarr;
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1 — The Problem This System Solves */}
        <section className="cs-section" style={{ margin: '100px 0' }}>
          <div className="cs-grid-2">
            <div>
              <span className="cs-badge" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', borderColor: 'rgba(239, 68, 68, 0.2)' }}>The problem</span>
              <h2 className="cs-section-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginTop: '12px', lineHeight: 1.15 }}>
                Most design files don't scale. This one is built to.
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                Without a system, every new feature in a product means a designer reinventing buttons, spacing, and color decisions from scratch. Developers interpret things differently each time. AI tools have no consistent reference to pull from. The result: inconsistency, slow handoffs, and a codebase that drifts further from the design over time.
              </p>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                This project was built to solve that — a single source of truth in Figma, structured so that every decision has a name, a token, and a place. And because the naming conventions follow the same schema that Figma's MCP server exposes, it's also ready for AI agents to read and use directly.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 — System Architecture (Layer Stack) */}
        <section className="cs-section" style={{ margin: '120px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="cs-badge" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', borderColor: 'rgba(59, 130, 246, 0.2)' }}>How it's structured</span>
            <h2 className="cs-section-title" style={{ fontSize: '3rem', marginTop: '16px' }}>Seven layers, one coherent system</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '16px auto 0', lineHeight: 1.6 }}>
              The Figma file is divided into seven pages, which together represent a layered architecture — from the smallest design decision (a token) to the largest output (a full screen). Each layer depends on the one below it.
            </p>
          </div>

          {/* Interactive Stack component */}
          <div className="ds-stack-container" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {layers.map((layer, index) => {
              const isExpanded = activeLayer === index;
              return (
                <div 
                  key={layer.id}
                  className={`ds-stack-card ${isExpanded ? 'active' : ''}`}
                  onClick={() => setActiveLayer(index)}
                  style={{
                    background: isExpanded ? 'linear-gradient(rgba(16, 185, 129, 0.04), rgba(16, 185, 129, 0.04)), var(--card-bg)' : 'var(--card-bg)',
                    border: isExpanded ? '1px solid #10b981' : '1px solid var(--border-color)',
                    borderRadius: '20px',
                    padding: '24px',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: isExpanded ? '0 10px 30px rgba(16, 185, 129, 0.05)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                      <div 
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '10px',
                          background: isExpanded ? '#10b981' : 'var(--border-color)',
                          color: isExpanded ? '#fff' : 'var(--text-secondary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 'bold',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {layer.id}
                      </div>
                      <div>
                        <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: isExpanded ? '#10b981' : 'var(--text-secondary)', fontWeight: 600 }}>
                          {layer.label}
                        </span>
                        <h4 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginTop: '4px', fontWeight: 700 }}>
                          {layer.name}
                        </h4>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', color: isExpanded ? '#10b981' : 'var(--text-secondary)', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{ paddingTop: '20px', borderTop: '1px solid var(--border-color)', marginTop: '20px' }}>
                          <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                            {layer.oneLiner}
                          </p>
                          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '20px' }}>
                            {layer.detail}
                          </p>
                          
                          {/* Tags */}
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {layer.tags.map((tag, tIdx) => (
                              <span 
                                key={tIdx} 
                                style={{
                                  padding: '6px 12px',
                                  background: 'var(--border-color)',
                                  borderRadius: '100px',
                                  fontSize: '0.85rem',
                                  color: 'var(--text-primary)',
                                  fontWeight: 500
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 3 — The AI-Ready Angle */}
        <section className="cs-section cs-card-section" style={{ margin: '120px 0', background: 'radial-gradient(circle at top right, rgba(16, 185, 129, 0.04), transparent 50%), var(--card-bg)', borderRadius: '32px', border: '1px solid var(--border-color)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="cs-badge" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderColor: 'rgba(16, 185, 129, 0.2)' }}>What makes this different</span>
            <h2 className="cs-section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '16px' }}>Built so AI agents can use it too</h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.8', margin: '24px 0 40px' }}>
              The industry is moving toward AI-assisted development, where agents generate UI by reading a design system and assembling components on demand. For that to work, the system needs to be structured — not just visually, but semantically. Token names need to be meaningful. Component names need to be consistent. The hierarchy needs to be logical.
            </p>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.8', margin: '0px 0 40px' }}>
              This system was built with that in mind. The naming conventions, token structure, and component hierarchy follow the same schema that Figma's MCP server exposes to AI agents. That means a developer — or an AI — can connect to the library via MCP and ask it to build a new module, and the agent will use the right components, the right tokens, and produce output that looks like it came from the same system.
            </p>

            {/* Styled Flow Diagram */}
            <div className="ds-pipeline-container" style={{ margin: '50px 0' }}>
              <div className="ds-pipeline-steps">
                {[
                  {
                    step: '01',
                    title: 'Figma Tokens',
                    desc: 'Design tokens defined semantically as the raw variables.',
                    color: '#a855f7'
                  },
                  {
                    step: '02',
                    title: 'MCP Server',
                    desc: 'Exposes variables securely to active coding instances.',
                    color: '#3b82f6'
                  },
                  {
                    step: '03',
                    title: 'AI Agent',
                    desc: 'Parses spacing and color rules to understand layout intent.',
                    color: '#10b981'
                  },
                  {
                    step: '04',
                    title: 'Production Build',
                    desc: 'Outputs structured, pixel-perfect, accessible components.',
                    color: '#10b981',
                    success: true
                  }
                ].map((item, index) => (
                  <div key={index} className="ds-pipeline-card" style={{ '--accent-color': item.color }}>
                    <div className="ds-pipeline-badge" style={{ background: `${item.color}15`, color: item.color }}>
                      {item.step}
                    </div>
                    <h4 className="ds-pipeline-title">{item.title}</h4>
                    <p className="ds-pipeline-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Callout Block */}
            <blockquote className="ds-blockquote" style={{ borderLeft: '4px solid #10b981', background: 'linear-gradient(rgba(16, 185, 129, 0.02), rgba(16, 185, 129, 0.02)), var(--card-bg)', padding: '24px 32px', borderRadius: '0 16px 16px 0', margin: '40px 0 0' }}>
              <p style={{ fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--text-primary)', lineHeight: '1.6', fontWeight: 500 }}>
                "Most designers are still building files. This system is built to be read — by developers, by design tools, and by AI agents that haven't been invented yet."
              </p>
            </blockquote>
          </div>
        </section>

        {/* Section 4 — Why This Skill Is Rare */}
        <section className="cs-section" style={{ margin: '120px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="cs-badge" style={{ background: 'rgba(168, 85, 247, 0.1)', color: '#a855f7', borderColor: 'rgba(168, 85, 247, 0.2)' }}>The skill gap</span>
            <h2 className="cs-section-title" style={{ fontSize: '3rem', marginTop: '16px' }}>What separates a design file from a design system</h2>
          </div>

          <div className="ds-compare-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            
            {/* Column 1 */}
            <div className="ds-compare-card" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '24px', padding: '40px 32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>A design file</h4>
              <ul className="ds-compare-list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {['Visually consistent but structurally loose', 'Colors are hardcoded hex values', "Components exist but aren't token-linked", 'Handoff requires explanation every time', 'AI tools can read the visuals but not the intent'].map((pt, i) => (
                  <li key={i} style={{ display: 'flex', gap: '12px', fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                    <span style={{ color: '#ef4444' }}>&times;</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div className="ds-compare-card" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '24px', padding: '40px 32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>A design system</h4>
              <ul className="ds-compare-list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {['Consistent and scalable', 'Colors, spacing, and type are all tokens', 'Components are variants with defined states', 'Handoff is self-documenting', 'Developers and AI can interpret it reliably'].map((pt, i) => (
                  <li key={i} style={{ display: 'flex', gap: '12px', fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                    <span style={{ color: '#3b82f6' }}>&#10003;</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Highlighted */}
            <div 
              className="ds-compare-card highlighted" 
              style={{ 
                background: 'linear-gradient(rgba(16, 185, 129, 0.02), rgba(16, 185, 129, 0.02)), var(--card-bg)', 
                border: '2px solid #10b981', 
                borderRadius: '24px', 
                padding: '40px 32px', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '24px',
                position: 'relative',
                boxShadow: '0 15px 40px rgba(16, 185, 129, 0.08)',
                transform: 'scale(1.03)',
                scale: 1,
                translate: '0px',
                rotate: '0deg'
              }}
            >
              <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: '#10b981', color: '#fff', padding: '6px 18px', borderRadius: '100px', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.08em', whiteSpace: 'nowrap', textAlign: 'center', boxShadow: '0 4px 10px rgba(16, 185, 129, 0.2)' }}>
                RECOMMENDED / STATE-OF-THE-ART
              </div>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                An AI-ready design system
              </h4>
              <ul className="ds-compare-list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Everything in a design system, plus:',
                  'Naming follows MCP-compatible schema',
                  'Hierarchy mirrors what agents expect',
                  'New modules can be generated from it',
                  'The system grows without losing consistency',
                  'Future-proof as AI tooling evolves'
                ].map((pt, i) => (
                  <li key={i} style={{ display: 'flex', gap: '12px', fontSize: '1.05rem', color: i === 0 ? 'var(--text-primary)' : 'var(--text-secondary)', fontWeight: i === 0 ? '700' : 'normal', lineHeight: 1.4 }}>
                    {i > 0 ? <span style={{ color: '#10b981' }}>&#10003;</span> : <span style={{ color: '#10b981' }}>&bull;</span>}
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* Section 5 — Figma Embed or Screen Gallery */}
        <section id="figma-inspection-section" className="cs-section" style={{ margin: '120px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="cs-badge" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderColor: 'rgba(16, 185, 129, 0.2)' }}>See it in Figma</span>
            <h2 className="cs-section-title" style={{ fontSize: '3rem', marginTop: '16px' }}>The full system, open for inspection</h2>
          </div>

          <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '24px', padding: '24px', overflow: 'hidden' }}>
            
            {/* Gallery Tabs */}
            <div className="ds-gallery-tabs" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>
              {galleryItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveGalleryTab(item.id);
                    setShowFigmaEmbed(item.type === 'embed');
                  }}
                  className={`ds-gallery-tab ${activeGalleryTab === item.id ? 'active' : ''}`}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '100px',
                    border: '1px solid',
                    borderColor: activeGalleryTab === item.id ? '#10b981' : 'var(--border-color)',
                    background: activeGalleryTab === item.id ? 'rgba(16, 185, 129, 0.1)' : 'transparent',
                    color: activeGalleryTab === item.id ? '#10b981' : 'var(--text-secondary)',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Interactive Preview Container */}
            <div className="ds-gallery-window" style={{ width: '100%', height: '600px', borderRadius: '16px', overflow: 'hidden', background: '#0e1117', position: 'relative' }}>
              
              {showFigmaEmbed ? (
                <iframe
                  title="Figma Live Canvas Embed"
                  src={galleryItems.find(item => item.id === activeGalleryTab)?.url || "https://embed.figma.com/design/o0RIXuhjfVbjfx48LR3TWz/MangoOps-Web-Design-Library?node-id=0-1&embed-host=share"}
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  allowFullScreen
                  loading="lazy"
                />
              ) : (
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {galleryItems.map((item) => {
                    if (item.id === activeGalleryTab && item.type === 'image') {
                      return (
                        <img
                          key={item.id}
                          src={new URL(`../assets/design_system/${item.src}`, import.meta.url).href}
                          alt={item.name}
                          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                        />
                      );
                    }
                    return null;
                  })}
                </div>
              )}

            </div>



          </div>
        </section>

        {/* Section 6 — Process Notes */}
        <section className="cs-section" style={{ margin: '120px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="cs-badge" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderColor: 'rgba(16, 185, 129, 0.2)' }}>How it was made</span>
            <h2 className="cs-section-title" style={{ fontSize: '3rem', marginTop: '16px' }}>Decisions worth documenting</h2>
          </div>

          <div className="ds-process-timeline" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {[
              {
                num: '1',
                title: 'Tokens before components',
                desc: 'The token system was defined before a single component was drawn. This forced every visual decision — color, spacing, radius — to be named and intentional before it appeared in the UI. It\'s a discipline most files skip, and it\'s the reason the system stays consistent as it grows.'
              },
              {
                num: '2',
                title: 'Anatomy before aesthetics',
                desc: 'Every component was documented with a labeled anatomy diagram before its visual design was finalized. Understanding what a component is (its parts, its states, its rules) before deciding what it looks like leads to better, more flexible components.'
              },
              {
                num: '3',
                title: 'Naming as a contract',
                desc: 'Token and component names were chosen to work in three contexts: readable by a designer in Figma, usable by a developer in code, and interpretable by an AI agent via MCP. A name like `Button/Primary/Large` is unambiguous in all three contexts. That\'s the standard every name was held to.'
              }
            ].map((p, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '32px' }}>
                <div style={{ flexShrink: 0 }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', display: 'flex', alignItems: 'center', justifyCenter: 'true', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, border: '1px solid rgba(16, 185, 129, 0.3)' }}>
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

        {/* Section 7 — CTA */}
        <section className="cs-section cs-card-section" style={{ margin: '140px 0 60px', textAlign: 'center', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%), var(--card-bg)', borderRadius: '32px', border: '1px solid var(--border-color)' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
              A structured system, ready to scale.
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', margin: '24px 0 40px', lineHeight: 1.6 }}>
              Building a unified, AI-ready component library ensures layout compliance and speeds up future developments.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Link 
                to="/work" 
                className="btn btn-primary"
                style={{ 
                  background: '#10b981', 
                  color: '#fff', 
                  border: 'none', 
                  padding: '16px 32px', 
                  borderRadius: '100px', 
                  fontSize: '1.1rem', 
                  textDecoration: 'none', 
                  fontWeight: 600, 
                  boxShadow: '0 15px 30px rgba(16, 185, 129, 0.25)',
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

export default DesignSystemCaseStudy;
