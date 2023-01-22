import React from "react";
import styled from "styled-components";
// import HeroImage from "../assets/HeroImage.jpg";
function Donors({props}) {
  console.log(props.images)
  return (
    <Container>
      <DonorList>
      <img src = {props.images} />
      </DonorList>
    </Container>
    );
}
export default Donors;

const Container = styled.div`
  margin: 10px;
`;
const DonorList = styled.div`
  width: 134px;
  height: 129px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
