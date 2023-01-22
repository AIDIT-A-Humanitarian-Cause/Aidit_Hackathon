import React from 'react';
import './index.css'
const Transaction = (props) => {
  return (
    <div className='transaction'>
      <div className='transaction-name'>{props.name}</div>
      <div className='transaction-amount'>{props.amount}</div>
      <div className='transaction-date'>{props.date}</div>
    </div>
  );
};

export default Transaction;
