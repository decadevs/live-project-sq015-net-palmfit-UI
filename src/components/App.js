import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
import Navigation from "./navigation/Navigation"
import { logo_dark_svg, menu } from "./navigation/assets"





function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (

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
      
      



  );
  
}

export default App;

