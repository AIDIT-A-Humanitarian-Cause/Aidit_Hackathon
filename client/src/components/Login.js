import React, { useState } from 'react';
import styled from 'styled-components';




function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Username: ${username} Password: ${password}`);
    }

    return (
        <Container>
            <TextContainer>
                Hello. Let's Log In.
            </TextContainer>
            <FormContainer>
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </label>
                    <label>
                        Password:
                        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <Button type="submit">Login</Button>
                </form>
            </FormContainer>
        </Container>


    );
}
export default Login

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 30px; 
  align-items: center;
  padding: 20px;
  margin-top : 60px;
  margin-left: 1%;  
  width: 28%; 
  justify-content: center; 
  border: outline; 
  position: absolute; 
  left: 40%; 
     box-shadow: 5px 5px 5px gray;
  
`

const Button = styled.button`
  background-color: maroon;
  color: white;
  padding: 6px 20px;
  margin: 6px 0;
  border: none; 
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
`
const Input = styled.input`
  margin: 10px 0;
  padding: 6px;
  font-size: 16px;
  border-radius: 5px;
  border: outline; 

  `

const Container = styled.div`
    display: grid; 
    grid-template-columns: 100px auto; 
`


const TextContainer = styled.div`
height: 30%; 
margin-top: 111px; 
justify-content : center; 
text-align : center; 
position: absolute; 
left: 25%;
top: 20%; 
`