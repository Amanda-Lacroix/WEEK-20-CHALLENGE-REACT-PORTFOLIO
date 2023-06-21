// Importing React & Components & CSS
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

import './style.css';

function App() {
  // Changing what happens during an event
  const [activeSection, setActiveSection] = useState('about');

  const handleNavLinkClick = (section) => {
    setActiveSection(section);
  };

  function renderSection() {
    switch (activeSection) {
      // Rendering the components when clicked in navigation
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
    // the rendering section
    <div className="App">
      <Header handleNavLinkClick={handleNavLinkClick} />
      <main>{renderSection()}</main>
      <Footer />
    </div>
  );
}

export default App;
