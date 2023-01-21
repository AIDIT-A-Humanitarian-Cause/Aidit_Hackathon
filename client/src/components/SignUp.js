import React, { useState } from "react";
import styled from "styled-components";

function SignUp() {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username} Password: ${password}`);
  };

  return (
    <Container>
      <TextContainer>Hello. Let's Sign Up!</TextContainer>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <label>
            Full Name:
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            UserName:
            <Input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </label>
          <label>
            Password:
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <Button type="submit">Sign Up</Button>
        </form>
      </FormContainer>
    </Container>
  );
}

export default SignUp;

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 30px;
  align-items: center;
  padding: 20px;
  margin-top: 40px;
  margin-left: 10;
  width: 28%;
  justify-content: center;
  border: outline;
  position: absolute;
  left: 42%;

  box-shadow: 5px 5px 5px gray;
`;

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
`;
const Input = styled.input`
  margin: 10px 0;
  padding: 6px;
  font-size: 16px;
  border-radius: 5px;
  border: outline;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
`;

const TextContainer = styled.div`
  height: 30%;
  margin-top: 111px;
  justify-content: center;
  text-align: center;
  position: absolute;
  left: 25%;
  top: 20%;
`;
