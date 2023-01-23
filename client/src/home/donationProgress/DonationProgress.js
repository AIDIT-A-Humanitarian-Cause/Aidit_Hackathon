import { React, useState } from 'react';
import Navbar from '../../components/NavBar';
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';
import './index.css'
import { useEffect } from 'react';
import SingleDonation from '../../components/singleDonation';
function DonationProgress() {
  const [donations,setDonation] = useState([])
  const fetchDonations = async () => {

    try {
      const response = await axios.get(`/donation/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      console.log(response.data)
      setDonation(response.data.donations)
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchDonations()
  }, []);
  return (
    <>
      <Navbar />
      <div className='mainDonations'>
        <h1 className='title'>Donations You have made till now.</h1>
        <div className='line'></div>
        <div className='myDonations'>
          <div className='titles'>
            <ul>
            <li>S.N</li>
              <li>Name of Donation</li>
              <li>Name of Condition</li>
              <li>Required Amount</li>
              <li>Donated Amount</li>
              <li>Progress</li>
            </ul>
          </div>
          {donations.length === 0 ? (
            <h1 className='error'>No Donations Made till now</h1>
          ) : (
            donations.map((val,index) => {
              const progress = val.donatedAmount/val.requiredAmount
              console.log(progress)
              return <SingleDonation props ={{
                name:val.nameOfDonation,
                index:index+1,
                requiredAmount:val.requiredAmount,
                donatedAmount:val.donatedAmount,
                progress:progress,
                nameOfDonation:val.nameOfCondition
              }}/>
            })
          )}
        </div>
        </div>
    </>
  );
}

export default DonationProgress;
