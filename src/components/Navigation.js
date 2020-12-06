import React from 'react';
import Scrollspy from 'react-scrollspy';
import { Navbar, NavItem, NavLink } from 'reactstrap';

export default function Navigation() {
  return (
    <Navbar>
      <Scrollspy className="nav" items={['home', 'projects', 'contact']} currentClassName="is-current">
        <NavItem>
          <NavLink href="#home">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#projects">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contact">Contact</NavLink>
        </NavItem>
      </Scrollspy>
    </Navbar >
  );
}
