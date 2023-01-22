import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
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
  background-color: #4caf50;
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
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const SignInUrl = "/donor/auth/login";
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
        setauthenticated(true);
        navigate("/home");
      }
    } catch (err) {
      alert(`${err.message}`);
      console.log(err);
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormRow>
          <Label>email:</Label>
          <Input
            type="text"
            value={email}
            onChange={(e) => setemail(e.target.value)}
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
        <Link to="/join/donor/register"> Sign Up!</Link>
      </SignUpPrompt>
    </FormContainer>
  );
}

export default DonorSignIn;
