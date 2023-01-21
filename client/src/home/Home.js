import React from "react";
import Footer from "../components/Footer";
import HeroImg from "../components/HeroImg";
import Slider from "../components/Slider";
import CardsDonar from "./CardsDonar";
import CounterUp from "./countUp";

function Home() {
  return (
    <>
      <HeroImg />
      <Slider />
      <CardsDonar />
      <CounterUp />
      <Footer />
    </>
  );
}

export default Home;
