import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const FormContainer = styled.div`
  display: flex;
  width: 25%;
  border-radius: 4px;
  height: 100%;
  box-shadow: 2px 2px 2px gray;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 20px;
  border: outline;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const Label = styled.label`
  font-size: 16px;
  margin-right: 10px;
  width: 100px;
  text-align: right;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border-radius: 5px;

  flex-grow: 1;
`;

const Select = styled.select`
  padding: 8px;
  font-size: 16px;
  border-radius: 5px;

  flex-grow: 1;
`;
const ButtonContainer = styled.div`
  width: 320px;

  justify-content: center;

  text-align: center;
`;
const Button = styled.button`
  background-color: maroon;
  color: white;
  padding: 12px 19px;
  margin: 8px 0;
  height: 37px;

  text-align: center;
  justify-content: center;

  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px;
`;

const TextContainer = styled.div``;

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
    console.log(
      `First Name: ${firstName} Last Name: ${lastName} Gender: ${gender} Country: ${country} Phone Number: ${phoneNumber} Address: ${address} Username: ${username} Password: ${password}`
    );
  };

  return (
    <Container>
      <TextContainer>
        <p>
          If you have already joined in as Donor , you can
          <NavLink to="/join/donor/log"> Join Here!</NavLink>
        </p>
      </TextContainer>
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
              <option value="">Select Gender</option>
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
              type="text"
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
          <ButtonContainer>
            <Button type="submit">Sign Up</Button>
          </ButtonContainer>
        </form>
      </FormContainer>
    </Container>
  );
}

export default DonorRegister;
