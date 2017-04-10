import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'react-bootstrap';

import Container from '../Container';

const Header = () => (
  <Container>
    <Nav>
      <li className="nav-item">
        <NavLink className="nav-link" to="/" activeClassName="active">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link"  to="movies" activeClassName="active">Movies</NavLink>
      </li>
    </Nav>
  </Container>
);

export default Header;
