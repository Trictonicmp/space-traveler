import React from 'react';
import { Link } from 'react-router-dom';

function NavLinks() {
  return (
    <ul>
      <Link to="/">Rockets</Link>
      <Link to="/mission">Missions</Link>
      <Link to="/profile">Profile</Link>
    </ul>
  );
}

export default NavLinks;
