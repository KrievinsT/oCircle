import CircleLogo from "../../assets/logos/mask-group.png";
import React, { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__content">
          {/* Left Navigation */}
          <nav className="header__nav header__nav--left">
            <a href="#features" className="header__nav-link">
              Features
            </a>
            <a href="#pricing" className="header__nav-link">
              Pricing
            </a>
            <a href="#testimonials" className="header__nav-link">
              Testimonials
            </a>
            <a href="#resources" className="header__nav-link">
              Resources
            </a>
          </nav>

          {/* Logo */}
          <div className="header__logo">
            <a href="/" className="header__logo-link">
              <img
                src={CircleLogo}
                alt="Circle Logo"
                className="header__logo-icon"
              />
              <span className="header__logo-text">circle</span>
            </a>
          </div>

          {/* Right Navigation */}
          <div className="header__right">
            <nav className="header__nav header__nav--right">
              <a href="#company" className="header__nav-link">
                Company
              </a>
              <a href="#contact" className="header__nav-link">
                Contact
              </a>
            </nav>
            <button className="header__login-btn">Login</button>
            {/* Hamburger Menu Button */}
            <button className="header__hamburger" onClick={toggleMobileMenu}>
              <svg
                className="header__hamburger-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isMobileMenuOpen ? (
                  // X icon when menu is open
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  // Hamburger icon when menu is closed
                  <>
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`header__mobile-menu ${isMobileMenuOpen ? "active" : ""}`}
      >
        <nav>
          <a href="#features" className="header__nav-link">
            Features
          </a>
          <a href="#pricing" className="header__nav-link">
            Pricing
          </a>
          <a href="#testimonials" className="header__nav-link">
            Testimonials
          </a>
          <a href="#resources" className="header__nav-link">
            Resources
          </a>
          <a href="#company" className="header__nav-link">
            Company
          </a>
          <a href="#contact" className="header__nav-link">
            Contact
          </a>
          <button className="header__login-btn">Login</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
