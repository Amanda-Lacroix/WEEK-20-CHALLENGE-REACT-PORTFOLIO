// Importing React & Components
import React from 'react';
import Navigation from './Navigation';
import ProfilePicture from '../Images/AmandA.jpg';

const Header = ({ handleNavLinkClick }) => {
  return (
    <header className="box-style">
      <img id="Amanda" src={ProfilePicture} alt={"Woman wearing a leopard print coat, flashing the peace sign with a sunset in the background"}/>
      <h1 className="font-effect-shadow-multiple">Portfolio of Amanda Lacroix</h1>
      {/* Render the Navigation component and pass the handleNavLinkClick function as a prop */}
      <Navigation handleNavLinkClick={handleNavLinkClick} />
    </header>
  );
};

      //  <img id="Amanda" src={require("../Images/Amanda.jpg")} alt={"Woman wearing a leopard print coat, flashing the peace sign with a sunset in the background"}

export default Header;
