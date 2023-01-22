import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CheckmarkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const CheckmarkCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Checkmark = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
`;

const Description = styled.p`
  font-size: 16px;
  margin-top: 10px;
  text-align: center;
`;

const LinkContainer = styled(Link)`
  color: #0000ee;
  text-decoration: none;
`;

function CheckmarkComponent() {
  return (
    <CheckmarkContainer>
      <CheckmarkCircle>
        <Checkmark />
      </CheckmarkCircle>
      <Description>
        Your task has been completed.{" "}
        <LinkContainer to="/">Click here</LinkContainer> to view the result.
      </Description>
    </CheckmarkContainer>
  );
}

export default CheckmarkComponent;
