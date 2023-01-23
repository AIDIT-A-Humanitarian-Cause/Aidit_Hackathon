import React from "react";
import styled from "styled-components";
import Needy from "../home/Needy.js";
import AllDonations from "./allDonations.js/index.js";

import Navbar from "./NavBar.js";

function Donate() {
  return (
    <>
      <Navbar />
      <Container>
        <Needy />
      </Container>
      <Title>Needy Peoples</Title>
      <hr
        style={{
          width: "150px",
          height: "5px",
          backgroundColor: "#033b4a",
          borderRadius: "10px",
          border: "none",
        }}
      />
      <AllDonations />
    </>
  );
}

export default Donate;

const Container = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 30px;
`;
const Title = styled.h1`
  color: #033b4a;
  margin: 35px 0px;
  font-weight: 600;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  font-family: "Ubuntu", sans-serif;
  margin-bottom: 14.45px;
`;
