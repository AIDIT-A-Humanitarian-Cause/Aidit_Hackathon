import React from 'react'
import styled from "styled-components";
import HeroImage from "../assets/HeroImage.jpg";
function Donors() {
  return (
    
    <Container>
        
        <DonorList> 
            <img src = {HeroImage} alt = "Hello"/>
        </DonorList>
    </Container>
  )
}
export default Donors; 

const Container = styled.div
`
margin : 20px; 
`
const DonorList = styled.div
`
    width: 134px; 
    height: 129px; 
img{
    width: 100%; 
    height: 100%; 
    border-radius : 50%; 
}
`