import React, { useState } from 'react';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';

const Navigation = () => {
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
    <nav className="navigation">
      <ul>
      <li>
  <a href="#contact" onClick={() => handleNavLinkClick('contact')}>CONTACT</a>
</li>
<li>
  <a href="#resume" onClick={() => handleNavLinkClick('resume')}>RESUME</a>
</li>
<li>
  <a href="#projects" onClick={() => handleNavLinkClick('projects')}>PORTFOLIO</a>
</li>
<li>
  <a href="#about" onClick={() => handleNavLinkClick('about')}>ABOUT</a>
</li>
      </ul>
    </nav>
  );
};

export default Navigation;
