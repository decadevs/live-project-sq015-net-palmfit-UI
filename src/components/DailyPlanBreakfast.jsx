import React, { useState } from 'react';
import './DailyPlanBreakfast.css';

function DailyPlan () {
  const planName = 'Name of daily Plan';
  const totalCalories = 1874;
  const breakfastCalories = 692;
  const breakfastFoods = [
    { food: 'Plain white rice', quantity: '2.5 cups', calories: 605 },
    { food: 'Efo riro', quantity: '100 grams', calories: 87 },
  ];
  const lunchCalories = 723;
  const dinnerCalories = 491;

  const [showBreakfastDetails, setShowBreakfastDetails] = useState(false);
  const [showLunchDetails, setShowLunchDetails] = useState(false);
  const [showDinnerDetails, setShowDinnerDetails] = useState(false);
  const [rotateArrow, setRotateArrow] = useState(false);


  const handleToggleBreakfastDetails = () => {
    setShowBreakfastDetails(!showBreakfastDetails);
    setRotateArrow(!rotateArrow);
  };

  const handleToggleLunchDetails = () => {
    setShowLunchDetails(!showLunchDetails);
  };

  const handleToggleDinnerDetails = () => {
    setShowDinnerDetails(!showDinnerDetails);
  };

  const handleGetPlan = () => {
    console.log('Button clicked');
  };

  return (
    <>      
      <div className="dailyplancontainer">
        <div className="meal-header">
          <div className="plancal">
            <h1 className="dailyplantitle">{planName}</h1>
            <p>Total Calories: {totalCalories}</p>
          </div>
          <button className="getplanbutton" onClick={handleGetPlan}>Get Plan</button>
        </div>
          <div className="mealsection">
            <div className="meal-header">
              <h2 className="mealtitle">Breakfast</h2>
              <div className="show-details-wrapper">
                <p className="mcalories">{breakfastCalories} calories</p>
                <select
                  className={`showdetailsselect ${rotateArrow ? 'rotated' : ''}`}
                  onClick={handleToggleBreakfastDetails}
                ></select>
              </div>
            </div>
            {showBreakfastDetails && (
              <div className="mealdetails-row">
                {breakfastFoods.map((food, index) => (
                  <div className="mealdetailsactive-row" key={index}>
                    <div className="food-name">{food.food}</div>
                    <div className="food-quantity">{food.quantity}</div>
                    <div className="food-calories">{food.calories} calories</div>
                  </div>
                ))}
              </div>
            )}
          </div>

        <div className="mealsection">
          <div className="meal-header">
            <h2 className="mealtitle">Lunch</h2>
            <div className="show-details-wrapper">
              <p className="mcalories">{lunchCalories} calories</p>
              <select
                  className={`showdetailsselect ${rotateArrow ? 'rotated' : ''}`}
                  onClick={handleToggleLunchDetails}
                ></select>
            </div>
          </div>
            {showLunchDetails && (
            <div>
                {/* Add lunch food details here */}
            </div>
            )}
        </div>

        <div className="mealsection">
          <div className="meal-header">
            <h2 className="mealtitle">Dinner</h2>
            <div className="show-details-wrapper">
              <p className="mcalories">{dinnerCalories} calories</p>
              <select
                  className={`showdetailsselect ${rotateArrow ? 'rotated' : ''}`}
                  onClick={handleToggleDinnerDetails}
                ></select>
            </div>
          </div>
            {showDinnerDetails && (
            <div>
                {/* Add dinner food details here */}
            </div>
            )}
        </div>
      </div>
      
    </>
  );
};

export default DailyPlan;
