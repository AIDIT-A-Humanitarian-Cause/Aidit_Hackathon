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
      <NavLink to="/home">Aidit</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <SearchContainer>
        <SearchIcon>
          <AiOutlineSearch onClick={handleSearch} />
        </SearchIcon>
        <SearchInput>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
          />
        </SearchInput>
      </SearchContainer>
      <NavLink to="/login"> Login</NavLink>
      <NavLink to="/signup"> SignUp</NavLink>
    </NavContainer>
  );
}

export default NavBar;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;
const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 6px;
  padding-bottom: 3px;
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
`;

const SearchInput = styled.div`
  input {
    padding: 5px;
    width: 280px;
    margin-right: 10px;
    border: 1px solid gray;
    border-radius: 5px;
    font-size: 16px;
  }
`;
const SearchIcon = styled.div`
  position: absolute;
  top: 12px;
  left: 71%;
  cursor: pointer;
`;
const LogoContainer = styled.div`
  width: 30px;
  padding: 0;
  justify-content: center;

  img {
    width: 100%;
    position: absolute;
    left: 39px;
    width: 30px;
    top: 8px;
  }
`;
