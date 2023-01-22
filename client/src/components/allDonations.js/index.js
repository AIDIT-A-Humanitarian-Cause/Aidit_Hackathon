import React from "react";
import "./index.css";
import { useEffect, useState } from "react";
import axios from "../../api/axios";
import Box from "../../home/box";
const AllDonations = () => {
  const url = "http://localhost:4000";
  const [donations, setDonations] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${url}/donor/exploreDonation`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setDonations(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="donations">
      {donations.length === 0 ? (
        <h1 className="Error">No Donations Currently</h1>
      ) : (
        donations.map((donation) => {
          console.log("here");
          const raisedDonationInNrs = donation.donatedAmount * 128;
          const requiredDonationInNrs = donation.requiredAmount * 128;
          console.log(requiredDonationInNrs, raisedDonationInNrs);
          const data = {
            id: donation._id,
            title: donation.nameOfDonation,
            description: donation.description,
            amountRaised: raisedDonationInNrs,
            progress: donation.donatedAmount / donation.requiredAmount,
            name: donation.nameOfPatient,
            amountRequired: requiredDonationInNrs,
            nameOfCondition: donation.nameOfCondition,
          };
          return <Box props={data} />;
        })
      )}
    </div>
  );
};

export default AllDonations;
