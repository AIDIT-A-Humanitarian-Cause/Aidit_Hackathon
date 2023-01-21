import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import Logo from "../assets/Logo.PNG";
function NavBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <NavContainer>
      <LogoContainer>
        <img src={Logo} alt="Logo" />
        
      </LogoContainer>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Donate</NavLink>
      <NavLink to="/join">Join</NavLink>
      
      
    </NavContainer>
  );
}

export default NavBar;

const NavContainer = styled.nav`
  display: flex;
  font-family: "Urbanist", sans-serif;
  justify-content: end;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 1px;
  border-radius: 6px;
  padding-left: 2px;
  background-color: #f5f5f5;
  box-shadow: 2px 2px 2px gray;
  width: 99.5%;
  
`;
const NavLink = styled(Link)`
  margin-right: 15px;
  text-decoration: none;
  color: #333;
  &:hover {
    color: #0066c0;
  }
  margin-left: 3px;
color: #820000;
font-family : 
Spartan; 
font-weight: bold; 
`;


const LogoContainer = styled.div`
  width: 30px;
  padding: 0;
  justify-content: start;

  img {
    width: 100%;
    position: absolute;
    left: 39px;
    width: 30px;
    top: 8px;
  }
`;
