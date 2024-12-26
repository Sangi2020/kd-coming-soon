import React from 'react';
import '../styles/Logo.css';
import logoImage from './KD Logo.png';

const Logo = () => {
  return (
    <div className="logo">
      <img className="logo-image" src={logoImage} alt="Kerala Drives Logo" />
    </div>
  );
};

export default Logo;