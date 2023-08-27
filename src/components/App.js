import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/App.css';

//images
import { logo_dark_svg, menu } from "./navigation/assets";

//components
import {Header, Footer, Landing} from "./index"






// import LandingPage from '../components/HomePg/LandingPg';
// import FoodSearch from './FoodSearch';
// import '../styles/App.css';
// import { ProfilePage } from './ProfilePage';

// import PaymentSubscription from './Payment/Subscription';
// import FoodSingleOne from '../components/components/meal/FoodSingleOne';

// import "../styles/App.css";
// import "../styles/FoodSearch.css";

// import MealInfo from "./Meal-List-Plan/MealInfo";
// import FoodTable from "./Meal-List-Plan/FoodTable";
// import SearchFood from "./Meal-List-Plan/SearchFood";
// import Subscription from "./subscription/Subscription";

// import CalculateCalories from "./CalculateCalories";
import Navigation from "./navigation/Navigation";
// import MealPlan from "./MealPlans/Mealplan";
// import WeeklyPlanbreakfast from "./weeklyplanbreakfast/WeeklyPlanbreakfast";
// import styles from "../styles/WeeklyPlanbreakfast.module.css";
// import { CalulateCalories } from "../components/CalculateCalories";
// import DailyPlanBreakfast from "./DailyPlan/DailyPlanBreakfast";

function App() {
  const foods = [
    {
      name: "Plain white rice",
      amount: 2.5,
      measurement: "cup",
      calories: 600,
      caloriesPerMeasurement: { cup: 100, tablespoon: 50, ounce: 75 },
    },

 
  ];
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
   

    <div className="container__app">
          {/* <div className="nav">
            <NavLink to={"/"}>
              <img src={logo_dark_svg} alt="svg logo" className="nav-logo" />
            </NavLink>
            <Navigation menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
            <div
              className="toggle_btn_con"
              style={{ display: menuIsOpen ? "none" : "block" }}
              onClick={() => setMenuIsOpen((prev) => !prev)}
            >
              {!menuIsOpen && <img src={menu} alt="" className="menu_open" />}
            </div>
          </div> */}

      <div className="pages">
        <Landing/>
            {/* <ProfilePage /> */}
            {/* <PaymentSubscription />
            <FoodSingleOne />
            <MealInfo mealName="Meal 1 name" totalCalories={""} />
            <FoodTable foods={[]} />
            <SearchFood />
            <DailyPlanBreakfast />
            <Subscription />
            <CalculateCalories />
            <MealPlan /> */}
          </div>
        </div>
  );
  
}

export default App;
