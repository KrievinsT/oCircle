import React from 'react';
import './Testimonials.scss';
import PaypalLogo from '../../assets/paypal.png';
import GirlImage from '../../assets/girl_sit.png';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials__content">
        <div className="testimonials__title-container">
          <h2 className="testimonials__title">Testimonials</h2>
        </div>
        <div className="testimonials__container">
          <div className="testimonials__left">
            <h2 className="testimonials__title">See how customers drive impact</h2>
            <a href="#" className="testimonials__link">See case studies</a>
          </div>
          <div className="testimonials__right">
            <div className="testimonials__item">
              <div className="testimonials__item-content">
                <img src={GirlImage} alt="Michel Dedrick" className="testimonials__item-avatar" />
                <img src={PaypalLogo} alt="PayPal" className="testimonials__item-logo" />
                <p className="testimonials__item-text">"I used to have a bunch of different tools I had to pay for, with Circle you get everything in one bundle."</p>
                <div className="testimonials__item-attribution">
                  <div>
                    <h3 className="testimonials__item-name">Michel Dedrick</h3>
                    <p className="testimonials__item-role">Senior Conversion Optimizer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;