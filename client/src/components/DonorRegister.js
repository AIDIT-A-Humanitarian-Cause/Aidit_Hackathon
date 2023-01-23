import React, { useState } from "react";
import styled from "styled-components";
import { json, Link } from "react-router-dom";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";
const FormContainer = styled.div`
  display: flex;
  border-radius: 15px;
  margin-top: 38px;
  margin-left: 38px;
  margin-bottom: 10px;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 150px;
  width: 250px;
  box-shadow: 0px 0px 10px 0px #ccc;
`;

const FormRow = styled.div`
  display: flex;

  align-items: flex-start;
  margin: 10px 0;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
  padding-right: 20px;
  width: 80px;
  display: inline-block;
`;

const Input = styled.input`
  padding-left: 18px;
  padding-right: 19px;
  padding-top: 15px;
  font-size: 16px;
  border-radius: 5px;
  border: outline;
  width: 300px;
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

const LoginPrompt = styled.div`
  margin-top: 20px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;

  align-items: center;
`;

const ButtonConatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImageContainer = styled.div``;
function DonorRegister() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [email, setemail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const RegisterUrl = "/donor/auth/register";
  const navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(RegisterUrl, {
        firstName,
        lastName,
        gender,
        country,
        city,
        email,
        username,
        password,
      });
      if (response.data.success) {
        navigate("/home");
        localStorage.setItem("token", response.data.token);
        setauthenticated(true);
      }
      console.log(response);
      response.data.success && alert("User is registered successfully!");
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
              <Label>First Name:</Label>
              <Input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormRow>
            <FormRow>
              <Label>Last Name:</Label>
              <Input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormRow>
            <FormRow>
              <Label>Gender: </Label>
              <Input
                type="text"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </FormRow>
            <FormRow>
              <Label>Country:</Label>
              <Input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </FormRow>
            <FormRow>
              <Label>City:</Label>
              <Input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </FormRow>
            <FormRow>
              <Label>Username:</Label>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormRow>

            <FormRow>
              <Label>Email:</Label>
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
            <ButtonConatiner>
              <Button type="submit">Register</Button>
            </ButtonConatiner>
          </form>
          <LoginPrompt>
            Already have an account? <Link to="/join/donor/log"> Log in</Link>
          </LoginPrompt>
        </FormContainer>
      </Container>
    </>
  );
}

export default DonorRegister;
