import React from 'react';
import './index.css'
const Transaction = ({props}) => {
  const date = new Date(props.date)
  return (
    <div className='transaction'>
    <div className='SN'>{props.index}</div>
      <div className='transaction-name'>{props.name}</div>
      <div className='transaction-amount'>{props.amount}</div>
      <div className='transaction-date'>
        {date.toLocaleDateString('en-US')}
      </div>

      {props.status ? (
        <div className='accepted'>Accepted</div>
      ) : (
        <div className='Cancelled'>Cancelled</div>
      )}
    </div>
  );
};

export default Transaction;
