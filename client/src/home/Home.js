import { React, useState } from "react";
import Footer from "../components/Footer";
import HeroImg from "../components/HeroImg";
import Slider from "../components/Slider";
import CardsDonar from "./CardsDonar";
import CounterUp from "./countUp";
import Donors from "./Donors";
import styled from "styled-components";
import WhyDonate from "./WhyDonate";
import image1 from "../assets/donor1.jpg";
import image2 from "../assets/donor7.jpg";
import image3 from "../assets/donor5.jpg";
import image4 from "../assets/donor6.jpg";
import image5 from "../assets/donor4.jpg";
import Navbar from "../components/NavBar";

function Home() {

  const images = [image1, image2, image3, image4, image5];
  return (
    <>
      <Navbar />
      <HeroImg />
      <CardsDonar />
      <CounterUp />
      <Slider />
      <DonorTitle>Our Top Donors</DonorTitle>
      <DonorContainer>
        {images.map((val) => {
          return <Donors props={{ images: val }} />;
        })}
      </DonorContainer>
      <WhyDonate />
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
