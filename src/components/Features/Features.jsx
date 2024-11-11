import React, { useState } from 'react';
import './Features.scss';
import laptopImage from '../../assets/laptop-user.png';
import searchIcon from '../../assets/search-icon.png';
import collectIcon from '../../assets/collect-icon.png';
import distributeIcon from '../../assets/distribute-icon.png';
import analyzeIcon from '../../assets/analyze-icon.png';

const Features = () => {
  const [activeTab, setActiveTab] = useState('create');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section id="features" className="features">
      <div className="features__tag">BUILT FOR PEOPLE</div>
      <nav className="features__nav">
        <button 
          className={`features__nav-btn ${activeTab === 'create' ? 'active' : ''}`}
          onClick={() => handleTabClick('create')}
        >
          <img src={searchIcon} alt="Create" className="features__nav-icon" />
          Create
        </button>
        <button 
          className={`features__nav-btn ${activeTab === 'distribute' ? 'active' : ''}`}
          onClick={() => handleTabClick('distribute')}
        >
          <img src={distributeIcon} alt="Distribute" className="features__nav-icon" />
          Distribute
        </button>
        <button 
          className={`features__nav-btn ${activeTab === 'collect' ? 'active' : ''}`}
          onClick={() => handleTabClick('collect')}
        >
          <img src={collectIcon} alt="Collect" className="features__nav-icon" />
          Collect
        </button>
        <button 
          className={`features__nav-btn ${activeTab === 'analyze' ? 'active' : ''}`}
          onClick={() => handleTabClick('analyze')}
        >
          <img src={analyzeIcon} alt="Analyze" className="features__nav-icon" />
          Analyze
        </button>
      </nav>

      <div className="features__background">
        <div className="features__content">
          <div className="features__info">
            <h2 className="features__title">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
            <h3 className="features__subtitle">Advanced research software</h3>
            <p className="features__description">
              Ask the right questions and get the answers you need with the most secure and collaborative survey platform on the market featuring powerful logic, sophisticated analytics, and built-in automation and integration.
            </p>
            <button className="features__cta">
              Get started for free
            </button>
          </div>
          <div className="features__image-wrapper">
            <img 
              src={laptopImage} 
              alt="User working on laptop" 
              className="features__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;