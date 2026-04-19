import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle.jsx';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={logo} className="logo-mark" alt="Logo" />
        <span>Rajveer Sandhu</span>
      </Link>

      {isHome && (
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      )}

      <div className="nav-actions">
        <ThemeToggle />
        <a href="/Rajveer_Sandhu_Resume_UI_UX_Designer.pdf" download className="btn-primary">Download CV</a>
      </div>
    </nav>
  );
};

export default Navbar;
