import React, { useState } from "react";
import Navbar from "../components/NavBar";
import styled from "styled-components";
import axios from "../api/axios";
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 0px 10px 0px #ccc;
`;

const Label = styled.label`

`;

const Input = styled.input`
  
  


`;
const DonationPage = () => {
  const [formData, setFormData] = useState({
    nameOfDonation: "",
    requiredAmount: "",
    nameOfPatient: "",
    age: "",
    nameOfCondition: "",
    description: "",
    documents: "",
    currency: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post(
        "/donation",
        {
          formData,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response);
      console.log(response.status);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <Label>
            Name of Donation:
            <Input
              type="text"
              name="nameOfDonation"
              value={formData.nameOfDonation}
              onChange={handleChange}
              required
            />
          </Label>
          <label>
            Required Amount:
            <input
              type="number"
              name="requiredAmount"
              value={formData.requiredAmount}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Name of Patient:
            <input
              type="text"
              name="nameOfPatient"
              value={formData.nameOfPatient}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Name of Disease:
            <input
              type="text"
              name="nameOfCondition"
              value={formData.nameOfCondition}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Documents for the verification:
            <input
              type="file"
              name="documents"
              onChange={handleChange}
              value={formData.documents}
              multiple
              required
            />
          </label>
          <label>
            Currency:
            <select
              name="currency"
              value={formData.currency == null ? "usd" : formData.currency}
              onChange={(e) =>
                setFormData({ ...formData, currency: e.target.value })
              }
              required
            >
              <option value="usd">USD</option>
              <option value="nrs">NRS</option>
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
      </FormContainer>
    </>
  );
};

export default DonationPage;
