import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const FooterContainer = styled.div`
  background-color: #2f2f2f;
  color: white;
  overflow-x: none;
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 24px;
  margin-right: 10px;
  margin-left: 10px;
  text-decoration: none;
  :hover {
    color: #4caf50;
  }
`;
const DateContainer = styled.div`
  font-family: "Urbanist";
  letter-spacing: 1.8px;
`;

const Footer = () => (
  <FooterContainer>
    <SocialContainer>
      <SocialIcon href="https://www.facebook.com/profile.php?id=100089776567340&is_tour_dismissed=true">
        <FaFacebook />
      </SocialIcon>
      <SocialIcon href="https://twitter.com/IshanPanta1">
        <FaTwitter />
      </SocialIcon>
      <SocialIcon href="https://www.instagram.com/aidit3000/">
        <FaInstagram />
      </SocialIcon>
    </SocialContainer>
    <DateContainer>
      <p> © {new Date().getFullYear()} AID IT</p>
    </DateContainer>
  </FooterContainer>
);

export default Footer;
