import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Logos from "../assets/logo_.png";
const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  font-weight: bold;
`;

const NavLink = styled(Link)`
  color: maroon;
  text-decoration: none;
  padding: 12px 24px;
  cursor: pointer;
  opacity: 0.85;
  margin-right: 10px;
  font-size: 18px;
  &:hover {
    color: maroon;
    opacity: 1;
    transform: scale(1.05);
    transition: 0.2s ease-in-out;
  }
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
  background-color: white;
`;

const NavDropdown = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const NavDropdownContent = styled.div`
  display: ${(props) => (props.showDropdown ? "block" : "none")};
  position: absolute;
  background-color: white;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  min-width: 160px;
`;

const NavDropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  a {
    text-decoration: none;
    color: maroon;
  }
`;
const Logo = styled.img`
  width: 70px;
  height: 70px;
  margin-left: 10px;
`;

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSignIn, setSignIn] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(
    localStorage.getItem("authenticated") === "true"
  );
  const [isInstitute, setInstitute] = useState(
    localStorage.getItem("isInstitution") === "true"
  );
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const navigate = useNavigate();
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
    navigate("/");
    window.location.reload();
    setLoggedIn(false);
  }

  return (
    <>
      <NavContainer>
        <Logo src={Logos} />
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        {!isLoggedIn || !isInstitute ? (
          <NavLink to="/donate">Donate</NavLink>
        ) : (
          <></>
        )}

        {!isInstitute ? (
          isLoggedIn ? (
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
          )
        ) : (
          <></>
        )}

        {isInstitute ? (
          <NavLink to="/createDonation">Create Donation</NavLink>
        ) : (
          <></>
        )}
        {isInstitute ? (
          <NavLink to="/donationProgress">Donation Progress</NavLink>
        ) : (
          <></>
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
    </>
  );
};
export default Navbar;
