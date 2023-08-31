import React, { useState } from 'react';
import FundSuccess from './FundSuccess';
import "./Fund-styles.css"

const FundNow = ({setModal}) => {
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);

  const handlePayment = (props) => {
    setPaymentSuccessful(true);
  };

  if (paymentSuccessful) {
    return <FundSuccess setModal={setModal} />;
  }

  return (
    <div className="pay-now-container">
            <h1>Get unlimited access to everything</h1>
      <p>Enter your credit card details to complete wallet funding</p>
      <label>Amount</label>
      <input type="text" placeholder="Enter amount in number" />
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
      <button onClick={handlePayment} className="pay-now-button">Pay Now</button>
    </div>
  );
};

export default FundNow;

