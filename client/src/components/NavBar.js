import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import styled from "styled-components";
import Logos from "../assets/logo_.png";
const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  flex 3; 
  
  justify-content: end;
  
  font-weight: bold;
  box-shadow : 2px 2px 2px solid gray; 
  
`;

const NavLink = styled(Link)`
  color: maroon;
  text-decoration: none;
  padding: 12px 24px;
  cursor: pointer;
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
  cursor: pointer;

  background-color: rgba(242, 222, 186, .5);
`;

const NavDropdown = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  background-color : rgba(242, 222, 186, .5);
`;

const NavDropdownContent = styled.div`
  display: ${(props) => (props.showDropdown ? "block" : "none")};
  position: absolute;
  background-color: rgba(242, 222, 186, .5);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  min-width: 160px;
`;

const NavDropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
   background-color : rgba(242, 222, 186, .5);
 
  }
  a {
    text-decoration: none;
    color: maroon;
  }
`;
const Logo = styled.img`
  width: 70px;
  height: 70px;
  margin-left: 10px;
  cursor : pointer; 
`;
const Container = styled.div `
  display : flex ; 
  background-color : rgba(242, 222, 186, .5); 

  `
const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSignIn, setSignIn] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(
    localStorage.getItem("authenticated") === "true"
  );
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const signDropDown = () => {
    setSignIn(!showSignIn);
  };
  const handleDropdownHover = (event) => {
    setShowDropdown(event.type === "mouseenter");
  };

  const handleSignInHover = (event) => {
    setSignIn(event.type === "mouseenter");
  };
  function logoutHandle() {
    localStorage.setItem("authenticated", false);
    localStorage.setItem("isInstitution", false);
    setLoggedIn(false);
    <Navigate to="/home" />;
    window.location.reload();
  }

  return (
    
    <Container>


      <Logo src={Logos} />
      <NavContainer>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/donate">Donate</NavLink>
        {isLoggedIn ? (
          <NavLink to="/mydonation">My Donation</NavLink>
        ) : (
          <NavDropdown
            onMouseEnter={handleSignInHover}
            onMouseLeave={handleSignInHover}
          >
            <NavButton onClick={signDropDown}>
              Sign In
              <FaAngleDown />
            </NavButton>
            <NavDropdownContent
              showDropdown={showSignIn}
              style={{ display: showSignIn ? "block" : "none" }}
            >
              <NavDropdownItem>
                <Link to="/join/donor/log">As Donor</Link>
              </NavDropdownItem>
              <NavDropdownItem>
                <Link to="/join/institution/log">As Institution</Link>
              </NavDropdownItem>
            </NavDropdownContent>
          </NavDropdown>
        )}
        {isLoggedIn ? (
          <NavButton onClick={logoutHandle}>Logout</NavButton>
        ) : (
          <NavDropdown
          onMouseEnter={handleDropdownHover}
          onMouseLeave={handleDropdownHover}
          >
            <NavButton onClick={toggleDropdown}>
              Join As
              <FaAngleDown />
            </NavButton>
            <NavDropdownContent
              showDropdown={showDropdown}
              style={{ display: showDropdown ? "block" : "none" }}
            >
              <NavDropdownItem>
                <Link to="/join/donor/register">Donor</Link>
              </NavDropdownItem>
              <NavDropdownItem>
                <Link to="/join/institution/register">Institution</Link>
              </NavDropdownItem>
            </NavDropdownContent>
          </NavDropdown>
        )}
      </NavContainer>
      </Container>
    
  );
};
export default Navbar;
