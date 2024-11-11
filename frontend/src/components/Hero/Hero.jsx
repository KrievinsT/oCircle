import React from 'react';
import './Hero.scss';
import teamImage from '../../assets/team-meeting.png';
import capgeminiLogo from '../../assets/logos/capgemini.png';
import yamahaLogo from '../../assets/logos/yamaha.png';
import bioconLogo from '../../assets/logos/biocon.png';
import dellLogo from '../../assets/logos/dell.png';
import birlaLogo from '../../assets/logos/ck-birla.png';
import shellLogo from '../../assets/logos/shell.png';

const Hero = () => {
    return (
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">
            A powerful online engagement tool<br />
            that's intuitive and simple to use.
          </h1>
          <p className="hero__description">
            With stellar one-click reports and unmatched support, see how<br />
            Circle will make a difference in your business
          </p>
          <button className="hero__cta">
            Get started free
            <span className="hero__cta-arrow">→</span>
          </button>
  
          <div className="hero__image-container">
            <img src={teamImage} className="hero__team-image"/>
          </div>
  
          <div className="hero__customers">
            <p className="hero__customers-label">OUR CUSTOMERS</p>
            <h2 className="hero__customers-title">
              Trusted by <span>100,000+ customers</span> in <span>90+ countries</span>
            </h2>
            
            <div className="hero__logos">
              <img src={capgeminiLogo} alt="Capgemini" className="hero__logo" />
              <img src={yamahaLogo} alt="Yamaha" className="hero__logo" />
              <img src={bioconLogo} alt="Biocon" className="hero__logo" />
              <img src={dellLogo} alt="Dell" className="hero__logo" />
              <img src={birlaLogo} alt="CK Birla Group" className="hero__logo" />
              <img src={shellLogo} alt="Shell" className="hero__logo" />
            </div>
  
            <div className="hero__badges">
              <div className="hero__badge">
                <span className="hero__badge-check">✓</span>
                <span className="hero__badge-text"><strong>18,281</strong> signed up last month</span>
              </div>
              <div className="hero__badge">
                <span className="hero__badge-check">✓</span>
                <span className="hero__badge-text"><strong>GDPR</strong> & <strong>CCPA</strong>-ready</span>
              </div>
              <div className="hero__badge">
                <span className="hero__badge-check">✓</span>
                <span className="hero__badge-text"><strong>Leader</strong>@G2 Summer</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;