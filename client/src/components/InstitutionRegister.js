import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import Navbar from "./NavBar";
const FormContainer = styled.div`
  display: flex;
  padding-top: 10px;
  background-color: white;
  flex-direction: column;
  align-items: center;
  padding: 30px 180px;
  border-radius: 15px;
  width: 322px;
  box-shadow: 0px 0px 10px 0px #ccc;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 10px 0;
  border: outline;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
  width: 166px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border-radius: 5px;
  width: 400px;
  border: outline;
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
  padding: 10px;
  margin-top: 20px;
  padding-top: 20px;
`;
const ButtonConatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
function InstitutionRegister() {
  const [institutionName, setinstitutionName] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [panNo, setPanNo] = useState("");
  const [panCertificate, setPanCertificate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const REGISTERUrl = "/auth/institution/register";
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(
        institutionName,
        province,
        city,
        district,
        panCertificate.name,
        panNo,
        email,
        password
      );
      const response = await axios.post(REGISTERUrl, {
        institutionName,
        province,
        city,
        district,
        panNo,
        panCertificate: panCertificate.name,
        email,
        password,
      });
      console.log(response);
      if (response.data.success) {
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
              <Label>Institutional Name:</Label>
              <Input
                type="text"
                value={institutionName}
                onChange={(e) => setinstitutionName(e.target.value)}
              />
            </FormRow>
            <FormRow>
              <Label>Province:</Label>
              <Input
                type="text"
                value={province}
                onChange={(e) => setProvince(e.target.value)}
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
              <Label>District:</Label>
              <Input
                type="text"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              />
            </FormRow>
            <FormRow>
              <Label>PAN No:</Label>
              <Input
                type="text"
                value={panNo}
                onChange={(e) => setPanNo(e.target.value)}
              />
            </FormRow>
            <FormRow>
              <Label>PAN Certificate:</Label>
              <Input
                type="file"
                onChange={(e) => setPanCertificate(e.target.files[0])}
              />
            </FormRow>
            <FormRow>
              <Label>Email:</Label>
              <Input
                type="email"
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
              <Button type="submit">Register</Button>
            </ButtonConatiner>
          </form>
          <LoginPrompt>
            Already have an account?{" "}
            <Link to="/join/institution/log"> Log in</Link>
          </LoginPrompt>
        </FormContainer>
      </Container>
    </>
  );
}

export default InstitutionRegister;
