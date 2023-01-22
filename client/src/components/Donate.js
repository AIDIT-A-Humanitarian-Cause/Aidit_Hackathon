import React from "react";
import styled from "styled-components";
import Needy from '../home/Needy.js';
import Footer from "./Footer.js";
import Navbar from "./NavBar.js";

function Donate() {
  return <>
  <Navbar/>
  <Container>

    <Needy />
    
  </Container>
  </>;
}

export default Donate;

const Container = styled.div`
  
  justify-content : center; 
  display : flex; 
  align-items : center; 


  border-radius : 30px; 
`
