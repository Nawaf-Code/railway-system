import React, { useState } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

const NavMenu = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <header>
      <Navbar className="navbar-expand-sm  " container light>
        <NavbarBrand tag={Link} to="/" className='navlogo'>Railway System</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
          <ul className="navbar-nav flex-grow">
            <NavItem>
              <NavLink tag={Link} className="navtext" to="/">Home |</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="navtext" to="/fetch-data">Sign in |</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="navtext" to="/rank-travels">Create Account</NavLink>
            </NavItem>
          </ul>
        </Collapse>
      </Navbar>
    </header>
  );
};

NavMenu.displayName = 'NavMenu';

export default NavMenu;
