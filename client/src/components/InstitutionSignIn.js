import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";
const FormContainer = styled.div`
  display: flex;
  border-radius: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  height: 220px;
  box-shadow: 0px 0px 10px 0px #ccc;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;
const FormRow = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: lighter;
  padding-right: 20px;
  display: inline-block;
  margin-bottom: 5px;
  letter-spacing: 0.8px;
  width: 100px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border-radius: 5px;
  border: outline;
  width: 70%;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 5px 5px;
  margin: 3px 0;
  border: outline;
  cursor: pointer;
  border-radius: 5px;
  font-size: 19px;
  margin: 10px 0;
  width: 135px;
  height: 39 px;
  border-radius: 30px;
`;
const SignUpPrompt = styled.div`
  margin-top: 20px;
`;

const ButtonConatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function InstitutionSignIn() {
  // const [iName, setiName] = useState("");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const SignInUrl = "/auth/institution/login";
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(SignInUrl, {
        email,
        password,
      });
      console.log(response);
      if (response.status == 202) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("authenticated", true);
        localStorage.setItem("isInstitution", true);
        setauthenticated(true);
        navigate("/home");
      }
    } catch (err) {
      alert(`${err.message}`);
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <FormRow>
              <Label>Institution Email:</Label>
              <Input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormRow>
            <FormRow>
              <Label>Password:</Label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormRow>
            <ButtonConatiner>
              <Button type="submit">Login</Button>
            </ButtonConatiner>
          </form>
          <SignUpPrompt>
            Don't have an account?
            <Link to="/join/institution/register"> Sign Up!</Link>
          </SignUpPrompt>
        </FormContainer>
      </Container>
    </>
  );
}

export default InstitutionSignIn;
