import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/App.scss'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Promise from './components/Promise/Promise';
import Awards from './components/Awards/Awards';
import Features from './components/Features/Features';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Promise />
      <Awards />
      <Features />
    </>
  );
}

export default App