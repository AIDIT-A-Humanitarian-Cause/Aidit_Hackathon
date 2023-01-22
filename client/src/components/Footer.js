import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi'

const FooterContainer = styled.div`
  background-color: #2f2f2f;
  color: white;
  overflow-x : none; 

  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 20px;
  margin-right: 10px;
  margin-left : 10px; 
  text-decoration: none;
  :hover {
    color: #4CAF50;
  }
`
const DateContainer = styled.div`

`

const Footer = () => (
    <FooterContainer>
        <SocialContainer>
            <SocialIcon href="#">
                <FaFacebook />
            </SocialIcon>
            <SocialIcon href="#">
                <FaTwitter />
            </SocialIcon>
            <SocialIcon href="#">
                <FaInstagram />
            </SocialIcon>
            <SocialIcon href="#">
                <GiHamburgerMenu />
            </SocialIcon>
        </SocialContainer>
        <DateContainer>

        <p>Copyright © {new Date().getFullYear()} My Company</p>
        </DateContainer>
    </FooterContainer>
);

export default Footer;