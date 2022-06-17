import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/components/nav.css';

function NavLinks() {
  return (
    <ul className="nav-links">
      <NavLink to="/">Rockets</NavLink>
      <NavLink to="/mission">Missions</NavLink>
      <NavLink className="profile-link" to="/profile">Profile</NavLink>
    </ul>
  );
}

export default NavLinks;
