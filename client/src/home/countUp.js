import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
function CounterUp() {
  const [on, setOn] = useState(false);
  const Container = styled.div`
    height: 26vh;
    background-color: rgba(242, 222, 186, 0.9);
    opacity: 0.85;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: "Urbanist", sans-serif;
    color: white;
    padding: 0px 88.45px;
    color: black;
  `;
  const Event = styled.h3`
    font-family: "Urbanist", sans-serif;
    font-size: 16.45px;
    font-weight: bold;
    letter-spacing: 1.45px;
    line-height: 30.45px;
  `;
  const NumberContainer = styled.div`
    display: flex;
    letter-spacing: 1.1px;
    flex-direction: column;
    align-items: center;
    font-family: "Urbanist", sans-serif;
    font-size: 48.45px;
  `;

  return (
    <ScrollTrigger
      onEnter={() => {
        setOn(true);
      }}
      onExit={() => {
        setOn(true);
      }}
    >
      <Container>
        <NumberContainer>
          {on && (
            <CountUp
              suffix="+"
              prefix="Rs. "
              start={0}
              end={120980}
              duration={1.8}
              delay={0}
              style={{
                fontFamily: "Urbanist",
                fontWeight: "bold",
                letterSpacing: "2.8px",
              }}
            />
          )}
          <Event>AMOUNT RAISED</Event>
        </NumberContainer>
        <NumberContainer>
          {on && (
            <CountUp
              suffix="+"
              start={0}
              end={1123}
              duration={1.8}
              delay={0}
              style={{
                fontFamily: "Urbanist",
                fontWeight: "bold",
                letterSpacing: "2.8px",
              }}
            />
          )}
          <Event>PEOPLES AFFECTED</Event>
        </NumberContainer>
        <NumberContainer>
          {on && (
            <CountUp
              suffix="+"
              start={0}
              end={500}
              duration={1.8}
              delay={0}
              style={{
                fontFamily: "Urbanist",
                fontWeight: "bold",
                letterSpacing: "2.8px",
              }}
            />
          )}
          <Event>PATIENTS </Event>
        </NumberContainer>
        <NumberContainer>
          {on && (
            <CountUp
              suffix="+"
              start={0}
              end={1000}
              duration={1.8}
              delay={0}
              style={{
                fontFamily: "Urbanist",
                fontWeight: "bold",
                letterSpacing: "2.8px",
              }}
            />
          )}
          <Event>VOLUNTEERS</Event>
        </NumberContainer>
      </Container>
    </ScrollTrigger>
  );
}
export default CounterUp;
