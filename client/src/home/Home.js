import React from "react";
import Footer from "../components/Footer";
import HeroImg from "../components/HeroImg";
import Slider from "../components/Slider";
import CardsDonar from "./CardsDonar";
import CounterUp from "./countUp";
import Donors from "./Donors";
import styled from "styled-components";

function Home() {
  return (
    <>
      <HeroImg/>
      <DonorTitle>
        <h1> Our Donors</h1>
      </DonorTitle>
      <DonorContainer>
        
        <Donors />
        <Donors />
        <Donors />
        <Donors />
        <Donors />
        <Donors />
        <Donors />
        
      </DonorContainer>
      <CardsDonar />
      <CounterUp />
      <Slider />
      <Footer/>
      
     
    
      
    </>
  );
}



export default Home;
const DonorContainer = styled.div`
display: flex; 


`
const DonorTitle = styled.div`
  margin-left: 16px; 

`