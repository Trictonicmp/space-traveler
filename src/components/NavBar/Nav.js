import React from 'react';
import BrandLogo from './BrandLogo';
import NavLinks from './NavLinks';
import '../../css/components/nav.css';

function Nav() {
  return (
    <nav className="nav">
      <BrandLogo />
      <NavLinks />
    </nav>
  );
}

export default Nav;
