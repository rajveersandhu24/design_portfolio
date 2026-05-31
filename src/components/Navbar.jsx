import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle.jsx';
import logo from '../assets/Logos/RAJ-logo.jpg';

const Breadcrumb = () => {
  const location = useLocation();
  const path = location.pathname;

  if (path === '/') return null;

  const items = [];
  
  // Always start with Home
  items.push({ label: 'Home', to: '/' });

  if (path === '/work') {
    items.push({ label: 'Case Studies', active: true });
  } else if (path.startsWith('/case-study/')) {
    items.push({ label: 'Case Studies', to: '/work' });
    
    // Determine active case study label
    let label = '';
    if (path.includes('healthcare')) label = 'Healthcare App';
    else if (path.includes('learning-platform')) label = 'Learning Platform';
    else if (path.includes('fitness-app')) label = 'EGYM24';
    else if (path.includes('core-ui-mobile-dsl')) label = 'Core UI Mobile DSL';
    else label = 'Case Study';

    items.push({ label, active: true });
  }

  return (
    <nav className="breadcrumb-nav">
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          {idx > 0 && (
            <span className="breadcrumb-chevron">
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L5 5L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          )}
          {item.active ? (
            <span className="breadcrumb-current">{item.label}</span>
          ) : (
            <Link to={item.to} className="breadcrumb-link">
              {item.label === 'Home' && (
                <svg className="home-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              )}
              <span>{item.label}</span>
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (isHome) {
      const element = document.querySelector(targetId);
      if (element) {
        if (window.lenis) {
          window.lenis.scrollTo(targetId, { duration: 1.2 });
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // Navigate to home page first, passing target ID in state
      navigate('/', { state: { scrollToId: targetId } });
    }
  };

  const handleLogoClick = (e) => {
    if (isHome) {
      e.preventDefault();
      if (window.lenis) {
        window.lenis.scrollTo('#hero', { duration: 1.2 });
      } else {
        document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Listen for route changes and scroll if state contains scrollToId
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollToId) {
      const targetId = location.state.scrollToId;
      
      const timer = setTimeout(() => {
        const element = document.querySelector(targetId);
        if (element) {
          if (window.lenis) {
            window.lenis.scrollTo(targetId, { duration: 1.2 });
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
        // Clear history state to prevent repeating on refresh/back
        window.history.replaceState({}, document.title);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.state]);

  return (
    <nav className="navbar">
      {isHome ? (
        <a href="#hero" className="logo" onClick={handleLogoClick}>
          <img src={logo} className="logo-mark" alt="Logo" />
          <span>Rajveer Sandhu</span>
        </a>
      ) : (
        <Link to="/" className="logo">
          <img src={logo} className="logo-mark" alt="Logo" />
          <span>Rajveer Sandhu</span>
        </Link>
      )}

      <div className={`nav-container ${isMenuOpen ? 'menu-active' : ''}`}>
        {isHome ? (
          <ul className="nav-links">
            <li><a href="#work" onClick={(e) => handleNavClick(e, '#work')}>Work</a></li>
            <li><a href="#experience" onClick={(e) => handleNavClick(e, '#experience')}>Experience</a></li>
            <li><a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Skills</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
          </ul>
        ) : (
          <Breadcrumb />
        )}

        <div className="nav-actions">
          <ThemeToggle />
          <a href="/design_portfolio/Rajveer_Sandhu_Resume_UI_UX_Designer.pdf" download className="btn-primary">Download CV</a>
        </div>
      </div>

      {isHome && (
        <button 
          className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}
    </nav>
  );
};

export default Navbar;
