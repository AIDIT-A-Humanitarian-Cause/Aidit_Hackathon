import React from "react";
import styled from "styled-components";
import HeroImage from "../assets/HeroImage.jpg";
import { Link } from "react-router-dom";
const HeroContainer = styled.section`
  background-image: ${`url(${HeroImage})`};
  background-size: cover;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Urbanist";
`;

const HeroButton = styled.button`
  background-color: maroon;
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 18px;
  border-radius: 30px;
  text-shadow: 2px 2px 4px #000000;
  cursor: pointer;
  font-family: "Urbanist";
`;
const HeroText = styled.div`
  font-size: 20px;
  color: white;
`;

const HeroImg = () => (
  <HeroContainer>
    <HeroText>
      <h3>Help the Elderly in their Battle!</h3>
    </HeroText>
    <Link to="/">
      <HeroButton>Donate Now</HeroButton>
    </Link>
  </HeroContainer>
);

export default HeroImg;
