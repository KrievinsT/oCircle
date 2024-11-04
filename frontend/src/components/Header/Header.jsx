import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__content">
          {/* Left Navigation */}
          <nav className="header__nav header__nav--left">
            <a href="#features" className="header__nav-link">Features</a>
            <a href="#pricing" className="header__nav-link">Pricing</a>
            <a href="#testimonials" className="header__nav-link">Testimonials</a>
            <a href="#resources" className="header__nav-link">Resources</a>
          </nav>

          {/* Logo */}
          <div className="header__logo">
            <a href="/" className="header__logo-link">
              <svg 
                viewBox="0 0 24 24" 
                className="header__logo-icon"
                fill="currentColor"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
              <span className="header__logo-text">circle</span>
            </a>
          </div>

          {/* Right Navigation */}
          <div className="header__right">
            <nav className="header__nav header__nav--right">
              <a href="#company" className="header__nav-link">Company</a>
              <a href="#contact" className="header__nav-link">Contact</a>
            </nav>
            <button className="header__login-btn">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;