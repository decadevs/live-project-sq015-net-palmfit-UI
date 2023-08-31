import "../styles/App.css";
import FundWallet from "./Wallet/FundWallet";
import { ProfilePage } from "./ProfilePage";

import PaymentSubscription from "./Payment/Subscription";
import FoodSingleOne from "../components/components/meal/FoodSingleOne";
import LandingPage from "../components/HomePg/LandingPg";

import { NavLink } from "react-router-dom";
import "../styles/App.css";
import FoodSearch from "../components/FoodSearch/FoodSearch.jsx";
import "../styles/FoodSearch.css";

//import '../style/Style.css';

import MealInfo from "./Meal-List-Plan/MealInfo";
import FoodTable from "./Meal-List-Plan/FoodTable";
import SearchFood from "./Meal-List-Plan/SearchFood";
import "../styles/Style.css";
//import '../styles/FoodSearch.css';
import Subscription from "./subscription/Subscription";

import "../styles/App.css";
import React, { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import "../styles/App.css";

//context
import { UserContextConsumer } from "../context/UserContext";

//components
import {
  Header,
  Footer,
  LandingPg,
  ErrorPage,
  NavigationBar,
  SignUpPage1,
  OTPValidationPage,
  MealPlan,
  ProfilePage,
  Subscription,
  UsersTab,
  DailyPlanBreakfast,
  WeeklyPlanbreakfast,
  CaloriesCounter,
  Login,
  FoodSearch,
  LoadingPage
} from "./";

//auth
import Auth from "../utils/Auth";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { userState } = useContext(UserContextConsumer);

  const [loading, setLoading] = useState(true);
  return (
    <>
      {!userState.isLoggedIn ? (
        <div>
          <Header />
          <Routes>
            <Route path="/" index element={<LandingPg />} />
            <Route path="/sign-up" element={<SignUpPage1 />} />
            <Route path="/opt-verification" element={<OTPValidationPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </div>
      ) : (
        <>
          <div className="container__app">
            {userState.jwt !== "" && (
              <NavigationBar
                menuIsOpen={menuIsOpen}
                setMenuIsOpen={setMenuIsOpen}
              />
            )}
            <div className="pages">
              <div className="layout_container">
                <div className="pages_container">
                  <hr />
                  <Routes>
                    <Route
                      path="/profile"
                      element={
                        <Auth>
                          <ProfilePage />
                        </Auth>
                      }
                    />
                    <Route
                      path="/subscription"
                      element={
                        <Auth>
                          <Subscription />
                        </Auth>
                      }
                    />
                    <Route
                      path="/users"
                      element={
                        <Auth>
                          <UsersTab />
                        </Auth>
                      }
                    />
                    <Route
                      path="/meal-plans"
                      element={
                        <Auth>
                          <MealPlan />
                        </Auth>
                      }
                    />

                    <Route
                      path="/weekly-plan/:id"
                      element={
                        <Auth>
                          <DailyPlanBreakfast />
                        </Auth>
                      }
                    />
                    <Route
                      path="/get-plan/:page"
                      element={
                        <Auth>
                          <WeeklyPlanbreakfast />
                        </Auth>
                      }
                    />
                    <Route
                      path="/calorie-calulator"
                      element={
                        <Auth>
                          <CaloriesCounter />
                        </Auth>
                      }
                    />
                    <Route
                      path="/meal-diary"
                      element={
                        <Auth>
                          <FoodSearch />
                        </Auth>
                      }
                    />
                    <Route
                      path="/loading"
                      element={<LoadingPage state={loading} />}
                    />

                    <Route path="*" element={<ErrorPage />} />
                  </Routes>
                </div>
                <Footer />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
