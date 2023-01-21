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
      <HeroImg/>
      <DonorTitle>
         Our Donors
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
      <WhyDonate/>
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
padding-top :20px; 
background-color :  rgba(255, 253, 250, 0.95); 
padding-bottom : 40px; 

`
const DonorTitle = styled.h1`
   background-color :  rgba(255, 253, 250, 0.95);  
  padding-left : 20px;  
  margin: 0px; 

`