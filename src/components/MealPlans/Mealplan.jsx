import React from 'react';
import "../../styles/MealPlan.css";
import MealCard from './Mealcard';

const MealPlan = () => {
    const mealImageUrl = ["mealplans.svg", "mealplans.svg", "mealplans.svg", "mealplans.svg", "mealplans.svg"];
    const mealPlan = ["Breakfast", "Dinner", "Lunch", "Breakfast", "dinner"];
    const mealText = [
        "Take your breakfast early.",
        "Take your dinner early.",
        "Take your lunch early.",
        "Take your breakfast early.", "take your dinner late"
    ];

    const cards = mealPlan.map((plan, index) => (
        <div className="meal-card" key={index}>
            <MealCard imageUrl={mealImageUrl[index]} cardLabel={plan} cardText={mealText[index]} />
        </div>
    ));

    return (
        <>
          <h1 className="mealname"> Meal plans</h1>
            <div className='meal-card-group'>
                {cards}
            </div>
        </>
    );
};

export default MealPlan;
