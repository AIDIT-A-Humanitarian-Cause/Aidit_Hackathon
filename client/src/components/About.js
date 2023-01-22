import React from 'react';
import styled from 'styled-components';
import Logoe from '../assets/home_img.png';
import Logoer from '../assets/logo_.png'

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;

`;

const Description = styled.p`
  font-size: 16px;
  text-align: center;
  margin: 20px;
  font-family: utilatarian;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.h1 `
font-family : utalitarian ;

`
const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;
  background-color : transparent;
`;

function About() {
  return (
    <AboutContainer>
      <HeroImage src={Logoe} alt="Hero Image" />
      <Title> 
        Our Story
      </Title>
      <Container>
        <Logo src={Logoer}alt="Logo" />
        <Description>
           We believe in the importance of customer satisfaction and strive to exceed expectations.
        </Description>
      </Container>
    </AboutContainer>
  );
}

export default About;