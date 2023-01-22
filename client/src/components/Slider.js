import React from "react";
import styled from "styled-components";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { ItemsToBeInSlide } from "../home/datas";
import { useState } from "react";
import { RxCross2 } from 'react-icons/rx';

import StoryPopUp from "./StoryPopUp";

const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  position: relative;

  overflow: hidden;
`;
const Arrow = styled.div`
  width: 45px;
  height: 45px;
  background-color: grey;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 40%;
  left: ${(props) => props.setDirection === "left" && "14.5px"};
  right: ${(props) => props.setDirection === "right" && "14.5px"};
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }
  opacity: 0.75;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  background-color: rgba(250, 236, 214, 0.5);
  transition: all 1s ease;

  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 85vh;
  display: flex;
  align-items: center;
`;
const ImgContainer = styled.div`
  flex : 0.5
  ; 
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  height: 60%;
  margin-top: 20px; 
  width: 60%; 
  border-radius : 40px ;
  object-fit : cover; 
  
`;
const InfoContainer = styled.div`
  flex: .8;
  padding: 0px; 
  margin: 0px; 

`;
const Title = styled.h1`
  font-size: 25.45px;
  font-family: "Urbanist", sans-serif;
  color: black;
  margin: 0;
`;
const Description = styled.p`
  margin: 40px 0px;
  font-size: 22px;
  color: black;
  font-weight: bold;
  font-family: "Urbanist", sans-serif;
`;
const Button = styled.button`
  font-family: "Urbanist", sans-serif;
  border: 0 solid;
  color: black;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid black;
  outline-offset: 0px;
  padding: 14.45px;
  font-weight: bolder;
  text-shadow: none;
  background-color: transparent;
  font-size: 15px;
  border-radius : 30px; 
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
  &:hover {
    cursor: pointer;
    border: 1px solid grey;
  }
`;
const TitleName = styled.h1`
  font-family: "Urbanist", sans-serif;
  color: black;
  font-size: 55px;
  font-weight: bold;
  letter-spacing: 3.45px;
  `

  const Slider = () => {
    const[triggered , setTriggered] = useState(false); 
    
    function showFullstory() 
    {
      setTriggered(!triggered); 
    }
  const [slideIndex, setSlideIndex] = useState(0);
  const OnClick = (SlideDirection) => {
    if (SlideDirection === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow setDirection="left" onClick={() => OnClick("left")}>
        <BsChevronLeft />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {ItemsToBeInSlide.map((itemSlide) => (
          <Slide bg={itemSlide.bg} key={itemSlide.id}>
            <ImgContainer>
              <Image src={itemSlide.img} />
            </ImgContainer>
            <InfoContainer>
              <TitleName>{itemSlide.name}</TitleName>
              <Title>{itemSlide.title}</Title>
              <Description>{itemSlide.description}</Description>
              <Button onClick={showFullstory}  >Read More...</Button>
              
             { triggered && <StoryPopUp trigger = {triggered}  title ={ itemSlide.name}image = {itemSlide.img} text = {itemSlide.progress}/>}
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow setDirection="right" onClick={() => OnClick("right")}>
        <BsChevronRight />
      </Arrow>
    </Container>
  );
};

export default Slider;
