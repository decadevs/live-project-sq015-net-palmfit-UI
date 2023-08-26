import React, { useState, useContext } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import '../styles/App.css';

//context
import { UserContextConsumer } from '../context/UserContext';

//components
import { Header, Footer, Landing, NavigationBar, SignUpPage1, MealPlan, ProfilePage, Subscription, UsersTab, DailyPlanBreakfast, WeeklyPlanbreakfast } from "./index"



function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { userState } = useContext(UserContextConsumer)
  
  return (
   

    <div className="container__app" >
      {/* <div className='___'> */}

        {
          userState.jwt !== "" &&
          <NavigationBar menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
        }
      {/* </div> */}

      <div className="pages">
        <div className='layout_container'>
          <div className='pages_container'>
            {/* <hr /> */}
            <Routes>
              <Route path='/' index element={<Landing />} />
              {/* <Route path='/sign-up' index element={<SignUpPage1 />} /> */}
              <Route path='/login' index element={<Landing />} />
              <Route path='/profile' element={<ProfilePage />} />
              <Route path='/subscription' element={<Subscription />} />
              <Route path='/users' element={<UsersTab />} />
              <Route path='/daily-plan/:id' element={<DailyPlanBreakfast />} />
              <Route path='/meal-plans' element={<MealPlan />} />
              <Route path='/get-plan' element={<WeeklyPlanbreakfast />} />
              


            </Routes>
          </div>
          <Footer />

        </div>

      </div>
    </div>
  );
  
}

export default App;
