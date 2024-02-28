import React, { useState } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link, Navigate } from 'react-router-dom';
import './NavMenu.css';

const NavMenu = ({userStatus, updateUserStatus, setUserInfo}) => {
  const [collapsed, setCollapsed] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const handleLogout = () =>{
    updateUserStatus("invalid");
    setUserInfo(null);

    return <Navigate to='/' />
  
  }
  console.log("userStatus from nav menu: ",userStatus);
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
              {(userStatus === "valid")? (
                <NavLink tag={Link} className="navtext" to="/bookings">Your Bookings |</NavLink>
              ):(
                <NavLink tag={Link} className="navtext" to="/sign-in">Sign in |</NavLink>
                
              )}
            </NavItem>
            <NavItem>
              {(userStatus === "valid")? (
                <NavLink tag={Link} className="navtext" to="/" onClick={handleLogout}>Log out</NavLink>
              ):(
                <NavLink tag={Link} className="navtext" to="/create-account">Create Account</NavLink>
              )}
              
            </NavItem>
          </ul>
        </Collapse>
      </Navbar>
    </header>
  );
};

NavMenu.displayName = 'NavMenu';

export default NavMenu;
