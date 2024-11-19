// Footer.jsx
import React from 'react';
import UsMap from '../../assets/us-map.png';
import TwitterIcon from '../../assets/twitter-image.png';
import LinkedInIcon from '../../assets/linkedin-image.png';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          {/* Map Section with Overlay Text */}
          <div className="footer__map-section">
            <div className="footer__map-container">
              <img src={UsMap} alt="US Map" className="footer__map" />
              <div className="footer__made-with">
                Made with lots of <span role="img" aria-label="heart">❤️</span> in San Francisco
              </div>
            </div>
          </div>

          {/* Rest of the component remains the same */}
          <div className="footer__nav-sections">
            <div className="footer__nav-group">
              <h3 className="footer__nav-title">Products</h3>
              <nav className="footer__nav">
                <a href="#delta" className="footer__nav-link">Delta</a>
                <a href="#sigma" className="footer__nav-link">Sigma</a>
                <a href="#zeta" className="footer__nav-link">Zeta</a>
                <a href="#alpha" className="footer__nav-link">Alpha</a>
                <a href="#acumen" className="footer__nav-link">Acumen</a>
              </nav>
            </div>

            <div className="footer__nav-group">
              <h3 className="footer__nav-title">Resources</h3>
              <nav className="footer__nav">
                <a href="#help" className="footer__nav-link">Help</a>
                <a href="#training" className="footer__nav-link">Training Videos</a>
                <a href="#webinars" className="footer__nav-link">Webinars</a>
                <a href="#demo" className="footer__nav-link">Request a Demo</a>
                <a href="#surveys" className="footer__nav-link">Create Surveys</a>
                <a href="#quiz" className="footer__nav-link">Quiz Maker</a>
              </nav>
            </div>

            <div className="footer__nav-group">
              <h3 className="footer__nav-title">Company</h3>
              <nav className="footer__nav">
                <a href="#about" className="footer__nav-link">About Us</a>
                <a href="#careers" className="footer__nav-link">Careers</a>
                <a href="#team" className="footer__nav-link">Team</a>
                <a href="#contact" className="footer__nav-link">Contact Us</a>
              </nav>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            Copyright 2022 Circle. All rights reserved.
          </p>

          <div className="footer__social">
            <a 
              href="https://linkedin.com" 
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src={LinkedInIcon} 
                alt="LinkedIn" 
                className="footer__social-icon" 
              />
            </a>
            <a 
              href="https://twitter.com" 
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src={TwitterIcon} 
                alt="Twitter" 
                className="footer__social-icon" 
              />
            </a>
          </div>

          <div className="footer__legal-links">
            <a href="/privacy" className="footer__legal-link">Privacy Policy</a>
            <span className="footer__separator">|</span>
            <a href="/data-security" className="footer__legal-link">Data & Security</a>
            <span className="footer__separator">|</span>
            <a href="/terms" className="footer__legal-link">Terms of Service</a>
            <span className="footer__separator">|</span>
            <a href="/cookies" className="footer__legal-link">Data & Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;