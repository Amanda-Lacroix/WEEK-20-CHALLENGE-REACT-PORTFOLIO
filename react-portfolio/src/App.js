import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';


import './style.css';



function App() {
  const [activeSection, setActiveSection] = useState('about');

  const handleNavLinkClick = (section) => {
    setActiveSection(section);
  };

  function renderSection() {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'resume':
        return <Resume />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  }

  return (
    <div className="App">
      <Header />
      <Navigation onNavLinkClick={handleNavLinkClick} activeSection={activeSection} />
      <main>
      {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
