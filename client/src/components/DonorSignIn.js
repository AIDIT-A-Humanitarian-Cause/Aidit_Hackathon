import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 0px 10px 0px #ccc;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 0;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border-radius: 5px;
  border: outline;
  width: 100%;
`;

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: outline;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
`;

const SignUpPrompt = styled.div`
  margin-top: 20px;
`;

const SignUpLink = styled.a`
  color: blue;
  text-decoration: none;
`;

function DonorSignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Username: ${username} Password: ${password}`);
    }

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <FormRow>
                    <Label>Username:</Label>
                    <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </FormRow>
                <FormRow>
                    <Label>Password:</Label>
                    <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </FormRow>
                <Button type="submit">Login</Button>
            </form>
            <SignUpPrompt>
                Don't have an account?
                <Link to="/join/donor/register"> Sign Up!</Link>
            </SignUpPrompt>
        </FormContainer>
    );
}

export default DonorSignIn;