import LandingPage from '../components/HomePg/LandingPg';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/App.css';
import FoodSearch from '../components/FoodSearch/FoodSearch.jsx';
import '../styles/FoodSearch.css'
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
import WeeklyPlanbreakfast from './weeklyplanbreakfast/WeeklyPlanbreakfast';
import styles from '../styles/WeeklyPlanbreakfast.module.css';
import { CalulateCalories } from '../components/CalculateCalories';




function App() {
  const foods = [

    { name: 'Plain white rice', amount: 2.5, measurement: 'cup', calories: 600, caloriesPerMeasurement: { cup: 100, tablespoon: 50, ounce: 75 } },

    //{ name: 'Food 2', amount: 2, measurement: 'tablespoon', calories: 50, caloriesPerMeasurement: { cup: 100, tablespoon: 50, ounce: 75 } },
   //{ name: 'Food 3', amount: 2, measurement: 'tablespoon', calories: 50, caloriesPerMeasurement: { cup: 100, tablespoon: 50, ounce: 75 } },
    //{ name: 'Food 3', amount: 2, measurement: 'tablespoon', calories: 50, caloriesPerMeasurement: { cup: 100, tablespoon: 50, ounce: 75 } },
    // Add more food items

    ];
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <>
   <FoodSearch/>


    <ProfilePage />
    <>
    <PaymentSubscription/>
    </>


    <FoodSingleOne />

    <div className="App">
      <MealInfo mealName="Meal 1 name" totalCalories={foods.reduce((total, food) => total + parseFloat(food.calories), 0)} />
      <FoodTable foods={foods} />
      <SearchFood/>

      </div>
      

    <div>
      <Subscription/>

    </div>
    
  <div className='container'>
    <div className="App">  
      <LandingPage/>  
    </div>


    <div className='container'>

      <div className="nav">
        <NavLink to={"/"}>
          <img src={logo_dark_svg} alt="svg logo" className="nav-logo" />
        </NavLink>
        <Navigation menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
        <div className="toggle_btn_con" style={{ display: menuIsOpen ? "none" : "block" }} onClick={() => setMenuIsOpen(prev => !prev)}>
          {
            !menuIsOpen && <img src={menu} alt="" className="menu_open" />
          }
        </div>
      </div>

      <div className='pages'>
        <ProfilePage />
        <PaymentSubscription/>
        <FoodSingleOne />
        <MealInfo mealName="Meal 1 name" totalCalories={""} />
        <FoodTable foods={[]} />
        <SearchFood/>
        <Subscription />
        <CalculateCalories />

      </div>

    </div>
    </div>
    </>
  );
}

export default App;

