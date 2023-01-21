import React from "react";
import { HiUserGroup } from "react-icons/hi";
import styled from "styled-components";
function Card(props) {
  const Card = styled.div`
    transition: transform 0.25s;
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0px 30px;
    cursor: pointer;
    box-shadow: 0 13px 0 -5px hsla(240, 30.1%, 28%, 0.55);
  `;
  const Box = styled.div`
    width: 180px;
    border-radius: 4.45%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const Image = styled.img`
    height: 200px;
    padding-top: 4px;
    width: 170px;
    border-radius: 4.45%;
    object-fit : cover; 
  `;
  const Name = styled.h4`
    font-size: 18px;
    font-family: "Urbanist", sans-serif;
    padding: 10px;
    text-align: center;
    line-height: 130%;
    letter-spacing: 1.45px;
  `;

  return (
    <Card>
      <Box>
        <Image src={props.img} />
        <hr />
        <HiUserGroup sx={{ fontSize: "55.45px", color: "#00baa3" }} />
        <Name>{props.title}</Name>
      </Box>
    </Card>
  );
}
export default Card;
