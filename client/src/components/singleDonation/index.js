import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import './index.css';
const SingleDonation = ({ props }) => {
  console.log(props);
  return (
    <div className='transaction1'>
      <div className='SN'>{props.index}</div>
      <div className='transaction-name'>{props.name}</div>
      <div className='nameOfCondition'>{props.nameOfDonation}</div>
      <div className='transaction-amount donated'>{props.requiredAmount}</div>
      <div className='transaction-amount required'>{props.donatedAmount}</div>
        <ProgressBar customLabel=' ' completed={props.progress*100} maxCompleted={100} height= {8} width={100} />
    </div>
  );
};

export default SingleDonation;
