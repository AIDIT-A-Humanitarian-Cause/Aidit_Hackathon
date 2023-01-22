import React from "react";
import styled from "styled-components";
import HeroImage from "../assets/Donation.jpg";
import Quote from "../assets/Quote.png";

function WhyDonate() {
  return (
    <Container>
      <TextContainer>
        <Heading>Why Donate?</Heading>
        <Body>
          <img src={Quote} alt="" />
        </Body>
      </TextContainer>
      <ImgContainer>
        <img src={HeroImage} alt="" />
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
  margin-bottom: 0px;
`;
const Body = styled.div`
  img {
    width: 100%;
    height: 20%;
    margin-top: 0px;
    object-fit: contain;
  }
`;

const ImgContainer = styled.div`
  margin-bottom: 6px;
  margin-top: 30px;
  width: 525px;
  height: 319px;
  img {
    border-radius: 40px 40px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
