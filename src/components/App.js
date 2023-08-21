import React from 'react';
import '../styles/App.css';
import { ProfilePage } from './ProfilePage';
import PaymentSubscription from './Payment/Subscription';
import FoodSingleOne from '../components/components/meal/FoodSingleOne';
import MealInfo from './Meal-List-Plan/MealInfo';
import FoodTable from './Meal-List-Plan/FoodTable';
import SearchFood from './Meal-List-Plan/SearchFood';
import '../styles/Style.css';
import Subscription from './subscription/Subscription';
import { AddAndRemoveRoles } from './components/AddAndRemoveRoles';

function App() {
  const foods = [
    { name: 'Plain white rice', amount: 2.5, measurement: 'cup', calories: 600, caloriesPerMeasurement: { cup: 100, tablespoon: 50, ounce: 75 } },
    // Add more food items
  ];

  return (
    <>
      <ProfilePage />
      <PaymentSubscription />
      <FoodSingleOne />

      <div className="App">
        <MealInfo mealName="Meal 1 name" totalCalories={foods.reduce((total, food) => total + parseFloat(food.calories), 0)} />
        <FoodTable foods={foods} />
        <SearchFood />
      </div>

      <div>
        <Subscription />
      </div>

      <div><AddAndRemoveRoles /></div>
    </>
  );
}

export default App;
