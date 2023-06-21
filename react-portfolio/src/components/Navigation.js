// Importing React
import React from 'react';

const Navigation = ({ handleNavLinkClick }) => {
  return (
    // Trigger handleNavLinkClick when the link is clicked
    <nav className="navigation">
      <ul>
        <li>
          <a href="#contact" onClick={() => handleNavLinkClick('contact')}>CONTACT</a>
        </li>
        <li>
          <a href="#resume" onClick={() => handleNavLinkClick('resume')}>RESUME</a>
        </li>
        <li>
          <a href="#projects" onClick={() => handleNavLinkClick('projects')}>PORTFOLIO
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => handleNavLinkClick('about')}>ABOUT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

