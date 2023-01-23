import React, { useState } from "react";
import Navbar from "../components/NavBar";
import styled from "styled-components";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
const FormContainer = styled.div`
  width: 58%;
  height: 92vh;
  margin: 15px auto;
  padding-top: 40px;
  padding-bottom: 40px;
  box-shadow: 0px 0px 10px 0px grey;
  border-radius: 10px;
  font-family: "Urbanist";
  background-color: #f2deba;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  color: darkred;
`;

const Input = styled.input`
  padding: 12px 20px;
  border: 1px solid #174d1b;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 16px;
  margin-left: 15px;
  background-color: #faecd6;
`;

const TextArea = styled.textarea`
  padding: 12px 20px;
  border: 1px solid #174d1b;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 16px;
  resize: none;
  width: 50%;
  height: 100px;
  background-color: #faecd6;
`;

const Select = styled.select`
  padding: 12px 20px;
  border: 1px solid #174d1b;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 16px;
  background-color: #faecd6;
`;

const SubmitButton = styled.button`
  background-color: #174d1b;
  color: white;
  padding: 14px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`;

const DonationPage = () => {
  const [nameOfDonation, setnameOfDonation] = useState("");
  const [requiredAmount, setrequiredAmount] = useState("");
  const [nameOfPateint, setnameOfPateint] = useState("");
  const [age, setage] = useState("");
  const [nameOfCondition, setnameOfCondition] = useState("");
  const [description, setdescription] = useState("");
  const [documents, setdocuments] = useState("");
  const [currency, setcurrency] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(nameOfCondition, documents, currency);
      const response = await axios.post(
        "/donation",
        {
          nameOfDonation,
          requiredAmount,
          nameOfCondition,
          age,
          nameOfPateint,
          description,
          documents,
          currency,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.status);
      if (response.data.success) {
        alert("Donation created successfully");
        navigate("/success", {
          state: {
            desc: "Your Donation has been added successfully!",
          },
        });
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <FormItem>
            <Label>
              Name of Donation:
              <Input
                type="text"
                name="nameOfDonation"
                value={nameOfDonation}
                onChange={(e) => setnameOfDonation(e.target.value)}
                required
              />
            </Label>
            <Label>
              Required Amount:
              <Input
                type="number"
                name="requiredAmount"
                value={requiredAmount}
                onChange={(e) => setrequiredAmount(e.target.value)}
                required
              />
            </Label>
            <Label>
              Name of Patient:
              <Input
                type="text"
                name="nameOfPatient"
                value={nameOfPateint}
                onChange={(e) => setnameOfPateint(e.target.value)}
                required
              />
            </Label>
            <Label>
              Age:
              <Input
                type="number"
                name="age"
                value={age}
                onChange={(e) => setage(e.target.value)}
                required
              />
            </Label>
            <Label>
              Name of Disease:
              <Input
                type="text"
                name="nameOfCondition"
                value={nameOfCondition}
                onChange={(e) => setnameOfCondition(e.target.value)}
                required
              />
            </Label>
            <Label
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              Description:
              <TextArea
                name="description"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
                required
              />
            </Label>
            <Label>
              Documents for the verification:
              <Input
                type="file"
                name="documents"
                value={documents}
                onChange={(e) => setdocuments(e.target.value)}
                multiple
                required
              />
            </Label>
            <Label>
              Currency:
              <Select
                name="currency"
                value={currency}
                onChange={(e) => setcurrency(e.target.value)}
                required
              >
                <option value="usd">USD</option>
                <option value="nrs">NRS</option>
              </Select>
            </Label>

            <SubmitButton type="submit">Submit</SubmitButton>
          </FormItem>
        </Form>
      </FormContainer>
    </>
  );
};

export default DonationPage;
