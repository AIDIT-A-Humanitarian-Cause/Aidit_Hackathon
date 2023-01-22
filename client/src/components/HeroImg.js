import React from "react";
import styled from "styled-components";
import HeroImage from "../assets/home_img.png";
import { Link } from "react-router-dom";
const HeroContainer = styled.div`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Urbanist";
  margin: 0px;
  object-fit: cover;
  overflow-x: none;
`;
const ImageContainer = styled.img`
  object-fit: cover;
  width: 100%;
  padding-top: 30px;
`;
const HeroButton = styled.button`
  background-color: transparent;
  color: white;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 6px;
  padding-bottom: 6px;
  border-radius: 4px;
  margin: 0;
  width: 150px;

  font-size: 18px;
  border-radius: 30px;
  text-shadow: 2px 2px 4px #000000;
  cursor: pointer;
  font-family: "Urbanist";
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
  top: 10px;
  right: 2px;

  &:hover {
    cursor: pointer;
    border: 1px solid;
    background-color: limegreen;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
      0 0 20px rgba(255, 255, 255, 0.2);
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    text-shadow: 0.3px 0.3px 0.6px #429888;
  }
`;
const NavLink = styled(Link)`
  position: absolute;
`;
const HeroImg = () => (
  <HeroContainer>
    <ImageContainer src={HeroImage} />
    <NavLink to="/donate">
      <HeroButton>DONATE NOW</HeroButton>
    </NavLink>
  </HeroContainer>
);

export default HeroImg;
