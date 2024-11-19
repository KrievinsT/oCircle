import React from 'react';
import './assets/App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Promise from './components/Promise/Promise';
import Awards from './components/Awards/Awards';
import Features from './components/Features/Features';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Resources from './components/Resources/Resources';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
     <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="resources">
          <Resources />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;