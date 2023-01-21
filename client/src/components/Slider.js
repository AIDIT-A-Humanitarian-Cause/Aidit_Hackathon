import React from "react";
import styled from "styled-components";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { ItemsToBeInSlide } from "../home/datas";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  background-color: #23272b;
  position: relative;
  overflow: hidden;
  margin-top: 20px;
`;

const Arrow = styled.div`
  width: 45px;
  height: 45px;
  background-color: whitesmoke;
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
  transition: all 1s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 85vh;
  display: flex;
  align-items: center;
  background-color: #23272b;
`;
const ImgContainer = styled.div`
  flex: 0.8;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  height: 50%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 65.45px;
  font-family: "Urbanist", sans-serif;
  color: whitesmoke;
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 22px;
  color: whitesmoke;
  font-weight: bold;
  font-family: "Urbanist", sans-serif;
  letter-spacing: 3.45px;
`;
const Button = styled.button`
  font-family: "Urbanist", sans-serif;
  border: 0 solid;
  color: whitesmoke;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, 0.5);
  outline-offset: 0px;
  padding: 14.45px;
  font-weight: bolder;
  text-shadow: none;
  background-color: transparent;
  font-size: 15px;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
  &:hover {
    cursor: pointer;
    border: 1px solid;
    background-color: limegreen;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
      0 0 20px rgba(255, 255, 255, 0.2);
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    text-shadow: 0.3px 0.3px 0.6px #427388;
  }
`;

const Slider = () => {
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
              <Title>{itemSlide.title}</Title>
              <Description>{itemSlide.description}</Description>
              <Button>DONATE NOW</Button>
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
