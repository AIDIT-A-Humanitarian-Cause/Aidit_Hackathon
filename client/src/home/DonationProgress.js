import { React, useState } from "react";
import Navbar from "../components/NavBar";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
function DonationProgress() {
  const [donationId, setDonationId] = useState("");
  const fetchDonationProgress = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`/donation/${donationId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response);
      if (response.data.success) {
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Navbar />
    </>
  );
}

export default DonationProgress;
