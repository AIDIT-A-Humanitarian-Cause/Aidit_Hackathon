import React from 'react'
import Navbar from '../NavBar'
import './index.css'
import SingleTransaction from '../singleDonationInfo'
import axios from '../../api/axios'
import { useState,useEffect } from 'react'
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
        setDonations(response.data.data);
        console.log(response);
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
        </div>
      </div>
    </>
  );
}

export default MyDonation