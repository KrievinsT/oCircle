import React from 'react';
import './Contact.scss';
import laptopImage from '../../assets/laptop-typing.png';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <div className="contact__content">
          <div className="contact__info">
            <h2 className="contact__title">
              Looking for a <span className="contact__title-emphasis">solution</span><br />
              for your business?
            </h2>
            <p className="contact__description">
              Check out Sogolytics enterprise feedback and experience management platform.
            </p>
            <div className="contact__buttons">
              <button className="contact__button contact__button--primary">
                Learn more
              </button>
              <button className="contact__button contact__button--secondary">
                Schedule a consultation
              </button>
            </div>
          </div>
          <div className="contact__image-wrapper">
            <img 
              src={laptopImage} 
              alt="Person working on laptop" 
              className="contact__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;