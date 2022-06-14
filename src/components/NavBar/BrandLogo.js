import React from 'react';
import LogoImage from '../../assets/images/logo.png';

function BrandLogo() {
  return (
    <div className="d-flex">
      <img src={LogoImage} alt="Logo" width="70px" />
      <h2>Space Travelers' Hub</h2>
    </div>
  )
}

export default BrandLogo;
