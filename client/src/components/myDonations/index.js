import React from 'react';
import Navbar from '../NavBar';
import './index.css';
import SingleTransaction from '../singleDonationInfo';
import axios from '../../api/axios';
import { useState, useEffect } from 'react';
const MyDonation = () => {
  const url = 'http://localhost:4000';
  const [donations, setDonations] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${url}/donor`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setDonations(response.data.donations);
      console.log(response.data.donations);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <div className='mainDonations'>
        <h1 className='title'>Lives You have Saved</h1>
        <div className='line'></div>
        <div className='myDonations'>
          <div className='titles'>
            <ul>
            <li>S.N</li>
              <li>Name of Donation</li>
              <li>Amount</li>
              <li>Date</li>
              <li>Status</li>
            </ul>
          </div>
          {donations.length === 0 ? (
            <h1 className='error'>No Donations Made till now</h1>
          ) : (
            donations.map((val,index) => {
              return (
                <SingleTransaction
                  props={{
                    index:index+1,
                    name: val.name,
                    date: val.dateCreated,
                    amount: val.amount,
                    status: val.status,
                  }}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default MyDonation;
