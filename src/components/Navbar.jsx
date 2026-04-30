import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle.jsx';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      {isHome ? (
        <a href="#hero" className="logo">
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
        {isHome && (
          <ul className="nav-links">
            <li><a href="#work" onClick={() => setIsMenuOpen(false)}>Work</a></li>
            <li><a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
            <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        )}

        <div className="nav-actions">
          <ThemeToggle />
          <a href="/design_portfolio/Rajveer_Sandhu_Resume_UI_UX_Designer.pdf" download className="btn-primary">Download CV</a>
        </div>
      </div>

      <button 
        className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;
