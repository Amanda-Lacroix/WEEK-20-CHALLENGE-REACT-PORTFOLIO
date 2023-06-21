import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './style.css';
import Resume from './components/Resume';
// import './Assets';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <main>
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
