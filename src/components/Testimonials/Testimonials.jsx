import React from 'react';
import { Play } from 'lucide-react';
import './Testimonials.scss';
import paypal from '../../assets/paypal.png';
import girlSit from '../../assets/girl_sit.png';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <div className="testimonials__header">
          <span className="testimonials__label">TESTIMONIALS</span>
          <div className="testimonials__title-group">
            <h2 className="testimonials__title">
              See how customers 
              <span className="testimonials__title-emphasis">drive impact</span>
            </h2>
            <button className="testimonials__cta">
              See case studies
            </button>
          </div>
        </div>

        <div className="testimonials__content">
          <div className="testimonials__media">
            <img
              src={girlSit}
              alt="Testimonial video thumbnail"
              className="testimonials__image"
            />
            <button className="testimonials__play-button">
              <Play className="testimonials__play-icon" />
            </button>
          </div>

          <div className="testimonials__quote">
            <div className="testimonials__quote-content">
              <img
                src={paypal}
                alt="PayPal logo"
                className="testimonials__company-logo"
              />
              <blockquote className="testimonials__quote-text">
                "I used to have a bunch of different tools I had to pay for, with Circle you get everything in one bundle."
              </blockquote>
              <footer className="testimonials__quote-attribution">
                <cite className="testimonials__quote-author">Michel Dedrick</cite>
                <span className="testimonials__quote-role">Senior Conversion Optimizer</span>
              </footer>
            </div>
          </div>

          <div className="testimonials__navigation">
            <button className="testimonials__nav-dot testimonials__nav-dot--active" aria-label="View testimonial 1"></button>
            <button className="testimonials__nav-dot" aria-label="View testimonial 2"></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;