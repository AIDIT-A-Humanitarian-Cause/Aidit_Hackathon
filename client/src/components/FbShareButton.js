import React from 'react'
import {FacebookShareButton} from 'react-share';
import {FacebookIcon} from 'react-share';
import styled from 'styled-components';
function FbShareButton() {
  return (
    <Container>


    <FacebookShareButton url = "custom url" quote = {"Please help them out"} hashtag = "#Donate">
        <FacebookIcon logofillColor = "white " round = "true"></FacebookIcon>
    </FacebookShareButton>
    </Container>
  )
}

export default FbShareButton
const Container = styled.div   `
display : flex; 
`