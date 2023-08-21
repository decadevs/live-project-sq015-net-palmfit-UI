import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcMastercard,
  faCcVisa,
  faCcPaypal
} from "@fortawesome/free-brands-svg-icons";
import CheckoutSuccess from "./CheckOutSuccess";

const CardDetail = ({
  subtotal,
  couponDiscount,
  total,
  onCouponApply,
  couponCode,
  onCouponCodeChange
}) => {
  const cardTypes = ["Mastercard", "Visa", "PayPal", "PayStack", "Payoneer"];

  const cardTypeIcons = {
    Mastercard: faCcMastercard,
    Visa: faCcVisa,
    PayPal: faCcPaypal
    //PayStack: faSomePayStackIcon,
    //Payoneer: faSomePayoneerIcon
    // ... Add other icons for each card type
  };

  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const [cardType, setCardType] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCVV] = useState("");

  const handlePayment = () => {
    // Perform payment processing logic
    setPaymentSuccessful(true);
  };

  if (paymentSuccessful) {
    return (
      <div>
        <CheckoutSuccess />
      </div>
    );
  }

  return (
    <>
      <div
        className="card-details text-muted"
        style={{
          color: "#000000",
          fontFamily: "Nunito Sans-SemiBold, Helvetica",
          fontSize: "28px",
          fontWeight: 600,
          marginBottom: "20px",
          textAlign: "center"
        }}
      >
        Card details
      </div>

      <div
        className="check-out mb-3"
        style={{
          backgroundColor: "#1A8D8D",
          padding: "20px",
          borderRadius: "5px"
        }}
      >
        <div className="mb-3">
          {/* Card Type */}
          <div className="mb-3">
            <label>Card type</label>
            <div className="d-flex">
              {cardTypes.map((type) => (
                <a
                  href="#!"
                  className="text-white me-2"
                  key={type}
                  onClick={() => setCardType(type)}
                >
                  <FontAwesomeIcon icon={cardTypeIcons[type]} size="2x" />
                </a>
              ))}
            </div>
          </div>

          {/* Cardholder's Name */}
          <input
            type="text"
            className="form-control form-control-lg mb-3"
            placeholder="Cardholder's Name"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
          />

          {/* Card Number */}
          <input
            type="text"
            className="form-control form-control-lg mb-3"
            placeholder="1234 5678 9012 3457"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength="19"
          />

          {/* Expiration and CVV */}
          <div className="mb-3">
            <div className="d-flex justify-content-between mb-md-0">
              <div className="me-md-3 mb-3 mb-md-0">
                <label>Expiration</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="MM/YY"
                  value={expiration}
                  onChange={(e) => setExpiration(e.target.value)}
                  maxLength="5"
                />
              </div>
              <div>
                <label>CVV</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => setCVV(e.target.value)}
                  maxLength="3"
                />
              </div>
            </div>
          </div>

          {/* Line Separator */}
          <hr className="my-4" style={{ backgroundColor: "white" }} />

          {/* Price and Total */}
          <div className="mb-3 subtotal">
            <div className="mb-3 d-flex justify-content-between">
              <label>Subtotal</label>
              <div className="subtotal-amount">
                ${parseFloat(subtotal.toFixed(2))}
              </div>
            </div>
            <div className="mb-3 d-flex justify-content-between">
              <label>Coupon</label>
              <div className="d-flex justify-content-between">
                <input
                  type="text"
                  className="form-control coupon-input"
                  placeholder="Enter coupon code"
                  value={couponCode}
                  onChange={(e) => onCouponCodeChange(e.target.value)}
                />
                <button
                  className="btn btn-info btn-sm ms-2 coupon-button"
                  onClick={onCouponApply}
                >
                  Apply
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <label>Total (Incl. taxes)</label>
              <div>${parseFloat(total.toFixed(2))}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        {/* Checkout Button */}
        <button
          type="button"
          className="btn btn-info btn-block btn-lg checkout-button"
          onClick={handlePayment}
        >
          <div className="d-flex justify-content-between">
            <span className="text-end">Checkout</span>
          </div>
        </button>
      </div>
    </>
  );
};

export default CardDetail;
