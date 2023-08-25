import React, { useState } from 'react';
import PaymentSuccess from './PaymentSuccess';

const Payment = ({bill}) => {
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);

  // for the total amount
  const amount = 1000;

  const handlePayment = () => {
    setPaymentSuccessful(true);
  };

  if (paymentSuccessful) {
    return <PaymentSuccess />;
  }

  return (
    <div className="pay-now-container">
      <h1>Get unlimited access to everything</h1>
      {
        bill &&
        <label>Total billed: {bill}{amount}</label>
      }
      <p>Enter your credit card details to complete subscription</p>
      <label>Card Number</label>
      <input type="text" placeholder="1234 1234 1234 1234" />
      <div className="input-group">
        <div>
        <label>Expiration date</label>
        <input type="text" placeholder="MM/YY" />
        </div>
        <div>
        <label>Security code</label>
        <input type="text" placeholder="123" />
        </div>
      </div>
      <p className="terms">
        By subscribing you agree to our Use of Service and you'll have access to all locked features until 20 Oct 2021.
      </p>
      <button onClick={handlePayment} className="pay-now-button_">Pay Now</button>
    </div>
  );
};

export default Payment;