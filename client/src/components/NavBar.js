import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 10px;
  background-color: white; 
  font-weight : bold; 
  
`;

const NavLink = styled(Link)`
  color: maroon ; 
  text-decoration: none;
  padding: 12px 24px;
  margin-right: 10px;
  font-size: 18px;
  
  
`;

const NavButton = styled.button`
  background-color: transparent;
  border: none;
  color: maroon;
  text-decoration: none;
  padding: 12px 24px;
  margin-right: 10px;
  font-size: 18px;
  font-weight: bold; 
 
  background-color: white;
`;

const NavDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const NavDropdownContent = styled.div`
  display: ${props => props.showDropdown ? 'block' : 'none'};
  position: absolute;
  background-color: white;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  min-width: 160px;
  `;

const NavDropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #f1f1f1;
  }
  a{
    text-decoration: none; 
    color : maroon ; 
  }
`;

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <NavContainer>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/donate">Donate</NavLink>
      <NavDropdown>
        <NavButton onClick={toggleDropdown}>Join As<FaAngleDown /></NavButton>
        <NavDropdownContent showDropdown={showDropdown}>
          <NavDropdownItem>
            <Link to="/join/donor/register">Donor</Link>
          </NavDropdownItem>
          <NavDropdownItem>
            <Link to="/join/institution/register">Institution</Link>
          </NavDropdownItem>
        </NavDropdownContent>
      </NavDropdown>
    </NavContainer>
  );
};
export default Navbar;