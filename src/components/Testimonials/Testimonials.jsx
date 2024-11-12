import React from 'react';
import './Testimonials.scss';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials__content">
        <div className="testimonials__header">
          <h2 className="testimonials__title">See how customers drive impact</h2>
          <a href="#" className="testimonials__link">See case studies</a>
        </div>
        <div className="testimonials__list">
          <div className="testimonials__item">
            <div className="testimonials__item-content">
              <img src="/api/placeholder/80/80" alt="PayPal" className="testimonials__item-logo" />
              <p className="testimonials__item-text">"I used to have a bunch of different tools I had to pay for, with Circle you get everything in one bundle."</p>
              <div className="testimonials__item-attribution">
                <img src="/api/placeholder/40/40" alt="Michel Dedrick" className="testimonials__item-avatar" />
                <div>
                  <h3 className="testimonials__item-name">Michel Dedrick</h3>
                  <p className="testimonials__item-role">Senior Conversion Optimizer</p>
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