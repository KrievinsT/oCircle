import React from 'react';
import './Promise.scss';
import teamImage from '../../assets/team-collaboration.png';

const Promise = () => {
  return (
    <section className="promise">
      <div className="promise__content">
        <div className="promise__text">
          <p className="promise__label">OUR PROMISE</p>
          <h2 className="promise__title">
            Tool built for people.
          </h2>
          <p className="promise__description">
            Whether you want to edit your Google Docs,<br />
            resolve Jira issues, or collaborate over Zoom.
          </p>
          <p className="promise__description">
            Circle has 100+ integrations with tools you<br />
            already use and love.
          </p>
          <button className="promise__cta">
            Get started free
          </button>
        </div>
        <div className="promise__image">
          <img src={teamImage} alt="Team collaboration" />
        </div>
      </div>
    </section>
  );
};

export default Promise;