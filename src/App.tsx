import React from 'react';
import './styles/global.scss';
import Header from './components/Header'
import Hero from './components/BackgroundHero';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero />
      <Container />
    </div>
  );
}

export default App;
