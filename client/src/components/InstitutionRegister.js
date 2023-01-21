import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  border: outline; 
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
  border: none;
  width: 100%;
`;

const Select = styled.select`
  padding: 8px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  width: 100%;
`;

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
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

function InstitutionRegister() {
    const [institutionalName, setInstitutionalName] = useState('');
    const [province, setProvince] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [panNo, setPanNo] = useState('');
    const [panCertificate, setPanCertificate] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Institutional Name: ${institutionalName} Province: ${province} City: ${city} District: ${district} PAN No: ${panNo} PAN Certificate: ${panCertificate} Email: ${email} Password: ${password}`);
    };

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <FormRow>
                    <Label>Institutional Name:</Label>
                    <Input type="text" value={institutionalName} onChange={(e) => setInstitutionalName(e.target.value)} />
                </FormRow>
                <FormRow>
                    <Label>Province:</Label>
                    <Input type="text" value={province} onChange={(e) => setProvince(e.target.value)} />
                </FormRow>
                <FormRow>
                    <Label>City:</Label>
                    <Input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                </FormRow>
                <FormRow>
                    <Label>District:</Label>
                    <Input type="text" value={district} onChange={(e) => setDistrict(e.target.value)} />
                </FormRow>
                <FormRow>
                    <Label>PAN No:</Label>
                    <Input type="text" value={panNo} onChange={(e) => setPanNo(e.target.value)} />
                </FormRow>
                <FormRow>
                    <Label>PAN Certificate:</Label>
                    <Input type="file" onChange={(e) => setPanCertificate(e.target.files[0])} />
                </FormRow>
                <FormRow>
                    <Label>Email:</Label>
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormRow>
                <FormRow>
                    <Label>Password:</Label>
                    <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </FormRow>
                <Button type="submit">Register</Button>
            </form>
            <LoginPrompt>
                Already have an account? <LoginLink href="#">Log in</LoginLink>
            </LoginPrompt>
        </FormContainer>
    );
}

export default InstitutionRegister;