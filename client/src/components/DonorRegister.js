
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FormContainer = styled.div`
  display: flex;
  background-color: lightgray;
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

const Select = styled.select`
  padding: 8px;
  font-size: 16px;
  border-radius: 5px;
  border: outline;
  width: 100%;
`;

const Button = styled.button`
  background-color: pink;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: outline;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
`;

const LoginPrompt = styled.div`
  margin-top: 20px;
`;

const LoginLink = styled.a`
  color: blue;
  text-decoration: none;
`;

function DonorRegister() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
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
          <Label>Gender:</Label>
          <Select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value=""></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Select>
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
          <Label>Phone Number:</Label>
          <Input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </FormRow>
        <FormRow>
          <Label>Address:</Label>
          <Input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
          <Label>Password:</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormRow>
        <Button type="submit">Register</Button>
      </form>
      <LoginPrompt>
        Already have an account? <Link to="/join/donor/log"> Log in</Link>
      </LoginPrompt>
    </FormContainer>
  );
}

export default DonorRegister;
