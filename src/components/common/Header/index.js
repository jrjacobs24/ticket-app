import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav>
    <NavLink to="/" activeClassName="active">Home</NavLink>
    {" | "}
    <NavLink to="theaters" activeClassName="active">Theaters</NavLink>
  </nav>
);

export default Header;
