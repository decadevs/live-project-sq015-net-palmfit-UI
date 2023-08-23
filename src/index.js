import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';
//import { CalculateCalories } from './components/CalculateCalories';

import 'bootstrap/dist/css/bootstrap.min.css';
import DailyPlanBreakfast from './components/DailyPlan/DailyPlanBreakfast';
// import '../../components/DailyPlan/DailyPlanBreakfast.module.css';

import { BrowserRouter } from 'react-router-dom';
//import  CalulateCalories from './components/CalculateCalories';

import 'bootstrap/dist/css/bootstrap.min.css';


//import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <App/>
  </BrowserRouter>

);


