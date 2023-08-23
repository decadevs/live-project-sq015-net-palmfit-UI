import React from "react";
import CardDetail from "./Card-detail";
import SelectedFeatures from "./Selected-Feature";
import { useState } from "react";
import personalizedWorkoutPlansImage from "../../../src/images/Checkout/personalized-workout-plans.jpg";
import nutritionTrackingImage from "../../../src/images/Checkout/nutrition-tracking.jpg";
import progressTrackingImage from "../../../src/images/Checkout/progress-tracking.jpg";

import "../../styles/CheckOut.css";

const Checkout = () => {
  const initialFeatures = [
    {
      name: "Personalized Workout Plans",
      description:
        "Customized workout plans tailored to your goals and fitness level.",
      image: personalizedWorkoutPlansImage,
      quantity: 1,
      price: 9.99
    },
    {
      name: "Nutrition Tracking",
      description:
        "Keep track of your daily meals and calories to support your fitness journey.",
      image: nutritionTrackingImage,
      quantity: 1,
      price: 7.99
    },
    {
      name: "Progress Tracking",
      description:
        "Track your progress with weight, body measurements, and fitness achievements.",
      image: progressTrackingImage,
      quantity: 1,
      price: 5.99
    }
  ];

  const [features, setFeatures] = useState(initialFeatures);
  const [couponCode, setCouponCode] = useState("");
  const [subtotal, setSubtotal] = useState(
    features.reduce((total, feature) => total + feature.price, 0)
  );
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [total, setTotal] = useState(subtotal - couponDiscount);

  const handleDeleteFeature = (index) => {
    const updatedFeatures = features.filter((_, i) => i !== index);
    setFeatures(updatedFeatures);
    recalculateTotals(updatedFeatures, couponCode);
  };

  const handleCouponApply = () => {
    // Apply coupon logic here, update couponDiscount and recalculate totals
    setCouponDiscount(5); // Example: Apply a fixed $5 discount
    recalculateTotals(features, couponCode);
  };

  const handleCouponCodeChange = (code) => {
    setCouponCode(code);
  };

  const recalculateTotals = (updatedFeatures, couponCode) => {
    const updatedSubtotal = updatedFeatures.reduce(
      (total, feature) => total + feature.price,
      0
    );
    setSubtotal(updatedSubtotal);

    // Calculate the discount based on the couponCode and update couponDiscount
    let updatedCouponDiscount = 0;
    if (couponCode === "DISCOUNT5") {
      updatedCouponDiscount = 5; // Example: Apply a fixed $5 discount for coupon code DISCOUNT5
    }
    setCouponDiscount(updatedCouponDiscount);

    const updatedTotal = updatedSubtotal - updatedCouponDiscount;
    setTotal(updatedTotal);
  };

  return (
    <div className="row">
      <div className="col-md-6 mb-4">
        <SelectedFeatures
          features={features}
          onDeleteFeature={handleDeleteFeature}
        />
      </div>
      <div className="col-md-6">
        <CardDetail
          subtotal={subtotal}
          couponDiscount={couponDiscount}
          total={total}
          onCouponApply={handleCouponApply}
          couponCode={couponCode}
          onCouponCodeChange={handleCouponCodeChange}
        />
      </div>
    </div>
  );
};

export default Checkout;
