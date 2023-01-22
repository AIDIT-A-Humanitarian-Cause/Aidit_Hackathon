import React from "react";
import styled from "styled-components";
import HeroImage from "../assets/Donation.jpg";

function WhyDonate() {
  return (
    <Container>
      <TextContainer>
        <Heading>Why Donate?</Heading>
        <Body>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
          pariatur eos, beatae ullam expedita molestiae id illum, esse assumenda
          alias architecto voluptatum quod quaerat, eveniet praesentium! Aliquid
          quam itaque temporibus.
        </Body>
      </TextContainer>
      <ImgContainer>
        <img src={HeroImage} alt="Hello" />
      </ImgContainer>
    </Container>
  );
}

export default WhyDonate;

const Container = styled.div`
  padding: 20px;
  font-family: "Urbanist";
  display: grid;
  grid-template-columns: 55% 50%;
  background-color: rgba(255, 253, 250, 0.95);
`;
const TextContainer = styled.div`
  margin-left: 30px;
  margin-right: 10px;
  letter-spacing: 1.8px;
  margin-bottom: 10px;
`;

const Heading = styled.h2`
  margin-left: 10px;
`;
const Body = styled.div`
  margin-left: 10px;
`;

const ImgContainer = styled.div`
  margin-bottom: 6px;
  margin-top: 6px;
  width: 525px;
  height: 319px;
  img {
    border-radius: 40PX 40PX;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
