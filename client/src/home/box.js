import { React, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Img2 from "../assets/dhina.jpg";
import ProgressBar from "@ramonak/react-progress-bar";
const Box = ({ props }) => {
  console.log(props);
  const progress = props.progress || 38;
  const Box = styled.div`
    width: 15vw;
    height: 320px;
    border-radius: 40px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    background-color: rgba(242, 222, 186, 0.8);
  `;
  const DiseaseContainer = styled.h4`
    opacity: 0.8;
    font-style: italic;
    margin: 3px 0 4px 0;
    font-weight: 100;
  `;
  const Image = styled.img`
    height: 125px;
    width: 15vw;
    object-fit: cover;
    border-radius: 30px;
    margin-right: ${(props) => props.marginRight};
  `;
  const Name = styled.h4`
    font-size: 14px;
    font-family: "Urbanist", sans-serif;
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.45px;
    color: black;
    margin: 2px auto 6px auto;
  `;
  const NameTitle = styled.h4`
    font-weight: lighter;
    font-size: 12px;
    font-family: "Urbanist", sans-serif;
    text-align: justify;
    letter-spacing: 0.8px;
    margin: 9px 0px;
    color: black;
  `;
  const Button = styled(Link)`
    margin: 10px 0px;
    letter-spacing: 1.8;
    text-decoration: none;
    font-family: "Urbanist", sans-serif;
    border: 0 solid;
    color: whitesmoke;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
    outline: 1px solid;
    outline-color: rgba(255, 255, 255, 0.5);
    outline-offset: 0px;
    padding: 4px 18.45px;
    font-weight: bolder;
    text-shadow: none;
    background-color: darkred;
    border-radius: 10px;
    font-size: 14px;
    transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
    &:hover {
      cursor: pointer;
      border: 1px solid;
      background-color: limegreen;
      box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
        0 0 20px rgba(255, 255, 255, 0.2);
      outline-color: rgba(255, 255, 255, 0);
      outline-offset: 15px;
      text-shadow: 0.3px 0.3px 0.6px #429888;
    }
  `;
  const AmountRaised = styled.h4`
    font-size: 12px;
    font-family: "Urbanist", sans-serif;
    justify-content: left;
    color: ${(props) => props.background};
    letter-spacing: 1.2px;
    margin: 4px 0;
  `;
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("authenticated") === "true"
  );
  return (
    <Box>
      <Image src={props.img || Img2} />
      <DiseaseContainer>
        {props.nameOfCondition ? props.nameOfCondition : "Cancer"}
      </DiseaseContainer>
      {isLoggedIn ? (
        <Button
          to="/individualDonar"
          state={{
            id: props.id,
            name: props.name,
            title: props.title,
            img: props.img ? props.img : Img2,
            description: props.description,
            progress: props.progress,
            amountRequired: props.amountRequired,
            amountRaised: props.amountRaised,
          }}
        >
          DONATE
        </Button>
      ) : (
        <Button to="/join/donor/log">DONATE</Button>
      )}

      <Name>{props.title}</Name>
      <NameTitle>{props.description}</NameTitle>
      <AmountRaised background="darkred">{`NRs. ${props.amountRaised} Raised`}</AmountRaised>
      <ProgressBar
        completed={progress}
        customLabel=" "
        maxCompleted={100}
        height={8}
        width={200}
      />
      <AmountRaised background="green">{`NRs. ${
        props.amountRequired ? props.amountRequired : `5,00,00`
      } Raised`}</AmountRaised>
    </Box>
  );
};

export default Box;
