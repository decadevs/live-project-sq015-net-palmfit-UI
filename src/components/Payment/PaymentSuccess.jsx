import React, { useState } from 'react';
import Payment from './Payment';

const PaymentSuccess = (props) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(true);

  return (
    <div className="payment-success-container">
      {showSuccessMessage ? (
        <>
          <h1>Thank you for subscribing!</h1>
          <p>You have successfully subscribed to our platform. We are happy to have you on board.</p>
          <button onClick={() => {
            //setShowSuccessMessage(false)
            props.onHideModal(false)
          } } className="back-to-dashboard-button">
            Back to Dashboard
          </button>
        </>
      ) : (
        <Payment/>
      )}
    </div>
  );
};

export default PaymentSuccess;