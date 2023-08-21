import React, { useState } from "react";
import Checkout from "./CheckOutPage";

const CheckoutSuccess = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(true);

  return (
    <div className="payment-success-container">
      {showSuccessMessage ? (
        <>
          <h1>Payment Successful!</h1>
          <p>Your order has been successfully processed.</p>
          <button
            onClick={() => setShowSuccessMessage(false)}
            className="back-to-dashboard-button"
          >
            Back to Dashboard
          </button>
        </>
      ) : (
        <Checkout />
      )}
    </div>
  );
};

export default CheckoutSuccess;
