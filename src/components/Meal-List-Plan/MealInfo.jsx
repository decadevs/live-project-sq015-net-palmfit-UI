import React from "react";
//import './MealInfo.css';


const MealInfo = ({ mealName, totalCalories }) => {
  return (
    <div className="meal-info">
           <p>MEAL</p>
          <h1 className="meal-name">{mealName}</h1>
    
      </div>
  );  
 
}; 

export default MealInfo;