import React from "react";
import Footer from "../components/Footer";
import HeroImg from "../components/HeroImg";
import Slider from "../components/Slider";
import CounterUp from "./countUp";

function Home() {
  return (
    <>
      <HeroImg/>
      <Slider />
      <CounterUp />
      <Footer/>
    </>
  );
}

export default Home;
