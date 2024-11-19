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

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Promise />
      <Awards />
      <Features />
      <Testimonials />
      <Contact />
      <Resources />
    </>
  );
}

export default App;