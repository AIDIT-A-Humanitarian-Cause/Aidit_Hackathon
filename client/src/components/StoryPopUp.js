import { joinPaths } from '@remix-run/router';
import React, {useEffect, useState} from 'react'
import { RxCross2 } from 'react-icons/rx';
import styled from 'styled-components';


function StoryPopUp(props) {
    const[isOpen , setOpen] = useState(false); 
    const closePopup = (e) =>{
        e.stopPropagation(); 
        setOpen(!isOpen) ;
        console.log(isOpen);
    }
    console.log(props.trigger);
    useEffect(()=>{
        console.log("asdf")
        setOpen(props.trigger)
    },[props.trigger])
  return ( isOpen&& (

      <Container>
        <CrossContainer>

        <RxCross2 onClick = {closePopup}/>
        </CrossContainer>
        <ImgContainer>
            <img src = {props.image} alt = " this one"/>
        </ImgContainer>
        <hr/>
        <TextContainer>
            <TextTitle>
                {props.title}'s Story   
            </TextTitle>
            <TextBody>

        <p>{props.text} </p> 
            </TextBody>

        </TextContainer>
    </Container>
        )
  ); 
}

export default StoryPopUp
const CrossContainer = styled.div `
position : absolute ;
top : 6px; 
left : 6px; 

border-radius : 40%; 
justify-content : center; 
text-align : center; 
align-items : center; 
object-fit : cover; 
svg{
    object-fit : cover; 
    padding-top : 2px;
    cursor : pointer;  
}
`

const TextTitle = styled.h1 `

padding-left: 20px; 
`
const TextBody = styled.div `
padding-left : 20px; 
`
const Container = styled.div `
    position : absolute;
    display: flex; 
    flex-direction : column ;
    width: 450px; 
    height : 400px; 
    border-radius : 20px; 
    background-color : white;
    top : 10px; 
    margin-bottom : 10px; 

    font-family : Utilatarian ;
  

    
   

`
const ImgContainer = styled.div` 
    padding-top : 20px; 
    width : 350px;
    height : 250px;  
    justify-content : end;
    
    padding-left: 25px; 
    img {
       width: 100%; 
       height : 100%;
       border-radius : 10px; 
    object-fit : cover; 
    }
`
const TextContainer = styled.div `
width : 340px; 
height : 250px;     
padding-left : 10px; 
p{

      
    font-family : Utilitarian; 


}

`