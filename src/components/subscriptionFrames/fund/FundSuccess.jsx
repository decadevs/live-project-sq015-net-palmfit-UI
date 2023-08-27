import React, { useState } from 'react';
import FundNow from './FundNow';

const PaymentSuccess = ({setModal}) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(true);

  return (
    <div className="payment-success-container">
      
        <>
          <h1>Your wallet has been funded</h1>
          <p>You have successfully funded your wallet on Palmfit. We are happy to have you on board.</p>
          <button onClick={() => setModal(false)} className="back-to-dashboard-button">
            Back to Dashboard
          </button>
        </>
      
      
    </div>
  );
};

export default PaymentSuccess;


