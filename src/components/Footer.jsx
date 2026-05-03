import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="contact-left">
          <div className="status-badge"><span className="dot active"></span> OPEN TO WORK</div>
          <h2>Looking for a <br /><span className="italic-accent">Product Designer?</span></h2>
        </div>
        <div className="contact-right">
          <h3>Let's <span className="italic-accent">talk</span></h3>
          <ul className="contact-links">
            <li>
              <a href="https://www.linkedin.com/in/rajveersandhu24/" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="mailto:rajveersandhu24creator@gmail.com" className="contact-card">
                <div className="icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <span>rajveersandhu24creator@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="/design_portfolio/Rajveer_Sandhu_Resume_UI_UX_Designer.pdf" download className="contact-card">
                <div className="icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </div>
                <span>Download CV</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Rajveer Sandhu. All rights reserved.</p>
        <div className="socials">
          <a href="https://www.linkedin.com/in/rajveersandhu24/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.behance.net/rajveersandhu24" target="_blank" rel="noopener noreferrer">Behance</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
