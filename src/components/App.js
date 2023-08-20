import React from 'react';
import '../styles/App.css';
import FoodSingleOne from '../components/components/meal/FoodSingleOne';

//import '../style/Style.css';

import MealInfo from './Meal-List-Plan/MealInfo';
import FoodTable from './Meal-List-Plan/FoodTable';
import SearchFood from './Meal-List-Plan/SearchFood';
import '../styles/Style.css';
//import '../styles/FoodSearch.css';
import Subscription from './subscription/Subscription';


function App() {
  const foods = [
    { name: 'Plain white rice', amount: 2.5, measurement: 'cup', calories: 600, caloriesPerMeasurement: { cup: 100, tablespoon: 50, ounce: 75 } },
    //{ name: 'Food 2', amount: 2, measurement: 'tablespoon', calories: 50, caloriesPerMeasurement: { cup: 100, tablespoon: 50, ounce: 75 } },
   //{ name: 'Food 3', amount: 2, measurement: 'tablespoon', calories: 50, caloriesPerMeasurement: { cup: 100, tablespoon: 50, ounce: 75 } },
    //{ name: 'Food 3', amount: 2, measurement: 'tablespoon', calories: 50, caloriesPerMeasurement: { cup: 100, tablespoon: 50, ounce: 75 } },
    // Add more food items
  ];

  return (

    <FoodSingleOne />

    <div className="App">
      <MealInfo mealName="Meal 1 name" totalCalories={foods.reduce((total, food) => total + parseFloat(food.calories), 0)} />
      <FoodTable foods={foods} />
      <SearchFood/>

      
      

    <div>
      <Subscription/>

    </div>

  );
  
}

export default App;

