import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/components/nav.css';

function NavLinks() {
  return (
    <ul className="nav-links">
      <Link to="/">Rockets</Link>
      <Link to="/mission">Missions</Link>
      <Link to="/profile">Profile</Link>
    </ul>
  );
}

export default NavLinks;
