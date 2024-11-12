import React, { useState } from 'react';
import './Features.scss';
import laptopImage from '../../assets/laptop-user.png';
import distributeImage from '../../assets/distribute.png';
import collectImage from '../../assets/collect.png';
import analyzeImage from '../../assets/analyze.png';
import searchIcon from '../../assets/search-icon.png';
import collectIcon from '../../assets/collect-icon.png';
import distributeIcon from '../../assets/distribute-icon.png';
import analyzeIcon from '../../assets/analyze-icon.png';

const Features = () => {
  const [activeTab, setActiveTab] = useState('create');

  const getContent = (tab) => {
    const contents = {
      create: {
        title: 'Create',
        subtitle: 'Advanced research software',
        description: 'Ask the right questions and get the answers you need with the most secure and collaborative survey platform on the market featuring powerful logic, sophisticated analytics, and built-in automation and integration.',
        image: laptopImage
      },
      distribute: {
        title: 'Distribute',
        subtitle: 'Seamless survey distribution',
        description: 'Share your surveys across multiple channels with our intelligent distribution system. Reach your target audience through email campaigns, social media, embedded forms, or custom API integrations while maintaining complete control over your data collection process.',
        image: distributeImage
      },
      collect: {
        title: 'Collect',
        subtitle: 'Real-time data collection',
        description: 'Gather responses efficiently with our advanced collection tools. Whether youre conducting academic research, market analysis, or employee feedback, our platform ensures secure, organized, and instant data collection with powerful validation and verification features.',
        image: collectImage
      },
      analyze: {
        title: 'Analyze',
        subtitle: 'Powerful analytics suite',
        description: 'Transform raw data into actionable insights with our comprehensive analytics tools. Visualize trends, identify patterns, and generate detailed reports with automated analysis features that help you make data-driven decisions quickly and confidently.',
        image: analyzeImage
      }
    };
    return contents[tab];
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const content = getContent(activeTab);

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
            <h2 className="features__title">{content.title}</h2>
            <h3 className="features__subtitle">{content.subtitle}</h3>
            <p className="features__description">{content.description}</p>
            <button className="features__cta">
              Get started for free
            </button>
          </div>
          <div className="features__image-wrapper">
            <img 
              src={content.image} 
              alt={`${content.title} feature illustration`} 
              className="features__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;