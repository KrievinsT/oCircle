import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/App.scss'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Promise from './components/Promise/Promise';
import Awards from './components/Awards/Awards';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Promise />
      <Awards />
    </>
  );
}

export default App