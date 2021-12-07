import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from '../src/components/Nav'
import GlaForecast from './components/GlaForecast';
import Footer from '../src/components/Footer'
import LocForecast from './components/LocForecast';
import './App.css'

function App() {

  return (
    <div className="App"
    >
      <Nav />
      <GlaForecast />
      <LocForecast />
      <Footer />
    </div>
  );
}

export default App;
