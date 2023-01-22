import React from "react";
import Footer from "../components/Footer";
import HeroImg from "../components/HeroImg";
import Slider from "../components/Slider";
import CardsDonar from "./CardsDonar";
import CounterUp from "./countUp";
import Donors from "./Donors";
import styled from "styled-components";
import WhyDonate from "./WhyDonate";

function Home() {
  return (
    <>
      <HeroImg />
      <DonorTitle>Our Top Donors</DonorTitle>
      <DonorContainer>
        <Donors />
        <Donors />
        <Donors />
        <Donors />
        <Donors />
        <Donors />
        <Donors />
      </DonorContainer>
      <WhyDonate />
      <CardsDonar />
      <CounterUp />
      <Slider />
      <Footer />
    </>
  );
}

export default Home;
const DonorContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgba(250, 236, 214, 0.5);
  padding-bottom: 40px;
`;
const DonorTitle = styled.h1`
  padding: 25px 0px;
  background-color: rgba(250, 236, 214, 0.5);
  text-align: center;
  font-size: 38.45px;
  font-family: "Urbanist", sans-serif;
  letter-spacing: 1.8px;
  margin: 0px;
`;
