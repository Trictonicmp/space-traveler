import React from 'react';
import LogoImage from '../../assets/images/logo.png';
import '../../css/components/nav.css';

function BrandLogo() {
  return (
    <div className="brand d-flex">
      <img src={LogoImage} alt="Logo" width="70px" />
      <h2>Space Travelers&rsquo; Hub</h2>
    </div>
  );
}

export default BrandLogo;
