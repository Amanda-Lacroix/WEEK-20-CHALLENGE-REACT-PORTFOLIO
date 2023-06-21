import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="box-style">
      <img id="Amanda" src="./Assets/AmandA.jpg" alt="Woman wearing a leopard print coat, flashing the peace sign with a sunset in the background." />
      <h1 className="font-effect-shadow-multiple">Portfolio of Amanda Lacroix</h1>
      <Navigation />
    </header>
  );
};

export default Header;
