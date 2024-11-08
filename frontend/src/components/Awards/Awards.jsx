import React from 'react';
import './Awards.scss';

// Import images directly as modules
import g2LeaderLogo from '../../assets/awards/g2-leader-2022.png';
import trustRadiusLogo from '../../assets/awards/trustradius-most-loved-2021.png';
import getAppLogo from '../../assets/awards/getapp-leader-2022.png';
import softwareAdviceLogo from '../../assets/awards/software-advice-recommended-2021.png';
import surveyChampionLogo from '../../assets/awards/survey-champion-2022.png';
import sourceForgeSpringLogo from '../../assets/awards/sourceforge-spring-2021.png';

const Awards = () => {
  return (
    <section className="awards">
      <div className="awards__content">
        <p className="awards__label">AWARDS</p>
        <h2 className="awards__title">
          An <span>award winning</span> platform, <span>loved by customers</span>.
        </h2>
        
        <div className="awards__grid">
          <div className="awards__item" style={{ backgroundColor: '#FFF1F2' }}>
            <img 
              src={g2LeaderLogo} 
              alt="G2 Leader 2022" 
              className="awards__icon"
            />
            <h3 className="awards__item-title">Market leader across</h3>
            <p className="awards__item-subtitle">18 categories</p>
          </div>

          <div className="awards__item" style={{ backgroundColor: '#FDF2F8' }}>
            <img 
              src={trustRadiusLogo} 
              alt="TrustRadius Most Loved 2021" 
              className="awards__icon"
            />
            <h3 className="awards__item-title">Most loved SaaS tool</h3>
            <p className="awards__item-subtitle">in 2021</p>
          </div>

          <div className="awards__item" style={{ backgroundColor: '#F0FDFF' }}>
            <img 
              src={getAppLogo} 
              alt="GetApp Category Leader 2022" 
              className="awards__icon"
            />
            <h3 className="awards__item-title">Category leader in</h3>
            <p className="awards__item-subtitle">2022</p>
          </div>

          <div className="awards__item" style={{ backgroundColor: '#F5F3FF' }}>
            <img 
              src={softwareAdviceLogo} 
              alt="Software Advice Most Recommended 2021" 
              className="awards__icon"
            />
            <h3 className="awards__item-title">Most recommended</h3>
            <p className="awards__item-subtitle">tool in 2021</p>
          </div>

          <div className="awards__item" style={{ backgroundColor: '#FEFCE8' }}>
            <img 
              src={surveyChampionLogo} 
              alt="Champion in Survey Tool 2022" 
              className="awards__icon"
            />
            <h3 className="awards__item-title">Champion in survey</h3>
            <p className="awards__item-subtitle">tool 2022</p>
          </div>

          <div className="awards__item" style={{ backgroundColor: '#FFF7ED' }}>
            <img 
              src={sourceForgeSpringLogo} 
              alt="SourceForge Top Performer Spring 2021" 
              className="awards__icon"
            />
            <h3 className="awards__item-title">Top performer spring</h3>
            <p className="awards__item-subtitle">2021</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;