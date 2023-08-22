import React from 'react';
import '../styles/App.css';
import { ProfilePage } from './ProfilePage';

import PaymentSubscription from './Payment/Subscription';
import FoodSingleOne from '../components/components/meal/FoodSingleOne';

//import '../style/Style.css';

import MealInfo from './Meal-List-Plan/MealInfo';
import FoodTable from './Meal-List-Plan/FoodTable';
import SearchFood from './Meal-List-Plan/SearchFood';
import '../styles/Style.css';
//import '../styles/FoodSearch.css';
import Subscription from './subscription/Subscription';
import CalculateCalories from './CalculateCalories';



function App() {

  return (

    <>
      <div>
        <ProfilePage />
        <PaymentSubscription/>
        <FoodSingleOne />
        <MealInfo mealName="Meal 1 name" totalCalories={""} />
        <FoodTable foods={[]} />
        <SearchFood/>
        <Subscription />
        <CalculateCalories />

      </div>
    </>
      
      



  );
  
}

export default App;

