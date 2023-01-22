import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  margin-right: 20px;
  box-shadow: 0px 0px 10px 0px #ccc;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top: 20px;

  padding-top: 20px;
`;

const FormRow = styled.div`
  display: flex;

  align-items: flex-start;
  margin: 10px 0;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
  width: 200px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border-radius: 5px;
  border: outline;
  width: 100%;
`;

const Button = styled.button`
  background-color: gray;
  color: white;
  padding: 14px 20px;
  height: 40px;
  margin-top: 20px;
  border: outline;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
<<<<<<< HEAD
  align-text : center;
  
  align-items : center;    
  justify-content : center; 
  align-items : center ; 
 margin-left : 126px;
=======
  align-text: center;

  align-items: center;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
>>>>>>> 9ad142c534456e6f3d21482eda97cc123573b3cd
  width: 135px;
  border-radius: 30px;
`;

const SignUpPrompt = styled.div`
  margin-top: 20px;
`;

const SignUpLink = styled.a`
  color: blue;
  text-decoration: none;
`;
const ImageContainer = styled.div`
  margin: 20px;
  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
  }
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
        <ImageContainer>
          <img
            src="https://images.pexels.com/photos/128299/pexels-photo-128299.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="hello"
          />
        </ImageContainer>
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
            <Button type="submit">Login</Button>
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
