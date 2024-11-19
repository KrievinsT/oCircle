import CircleLogo from "../../assets/logos/mask-group.png";
import React, { useState, useEffect } from "react";
import "./Header.scss";
import { useActiveSection } from '../hooks/useActiveSection';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.header')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (e) => {
    if (e.currentTarget.href.includes('#')) {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      const element = document.querySelector(href);
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    setIsMobileMenuOpen(false);
  };
  
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__content">
          <nav className="header__nav header__nav--left">
            <a 
              href="#features" 
              className={`header__nav-link ${activeSection === 'features' ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className={`header__nav-link ${activeSection === 'testimonials' ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              Testimonials
            </a>
            <a 
              href="#resources" 
              className={`header__nav-link ${activeSection === 'resources' ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              Resources
            </a>
          </nav>

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

          <div className="header__right">
            <nav className="header__nav header__nav--right">
              <a 
                href="#company" 
                className={`header__nav-link ${activeSection === 'company' ? 'active' : ''}`}
                onClick={handleNavClick}
              >
                Company
              </a>
              <a 
                href="#contact" 
                className={`header__nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={handleNavClick}
              >
                Contact
              </a>
            </nav>
            <button className="header__login-btn">Login</button>

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
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
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

      <div className={`header__mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <nav>
          <a 
            href="#features" 
            className={`header__nav-link ${activeSection === 'features' ? 'active' : ''}`}
            onClick={handleNavClick}
          >
            Features
          </a>
          <a 
            href="#testimonials" 
            className={`header__nav-link ${activeSection === 'testimonials' ? 'active' : ''}`}
            onClick={handleNavClick}
          >
            Testimonials
          </a>
          <a 
            href="#resources" 
            className={`header__nav-link ${activeSection === 'resources' ? 'active' : ''}`}
            onClick={handleNavClick}
          >
            Resources
          </a>
          <a 
            href="#company" 
            className={`header__nav-link ${activeSection === 'company' ? 'active' : ''}`}
            onClick={handleNavClick}
          >
            Company
          </a>
          <a 
            href="#contact" 
            className={`header__nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={handleNavClick}
          >
            Contact
          </a>
          <button className="header__login-btn" onClick={toggleMobileMenu}>
            Login
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;