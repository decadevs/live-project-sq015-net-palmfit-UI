import React, { useState, useContext } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import '../styles/App.css';

//context
import { UserContextConsumer } from '../context/UserContext';

//images
import { logo_dark_svg, menu } from "./navigation/assets";

//components
import { Header, Footer, Landing, Navigation, SignUpPage1, MealPlan, ProfilePage, Subscription } from "./index"



function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { userState } = useContext(UserContextConsumer)
  


  return (
   

    <div className="container__app" >
      {
        userState.jwt !== "" &&

          <div className="nav">
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
          </div>

      }

      <div className="pages">
        <Routes>
          <Route path='/' index element={<Landing />} />
          <Route path='/sign-up' index element={<SignUpPage1 />} />
          <Route path='/login' index element={<Landing />} />
          <Route path='/meal-plans' element={<MealPlan />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/subscription' element={<Subscription/>} />


        </Routes>
        

        <Footer />
      </div>
    </div>
  );
  
}

export default App;
