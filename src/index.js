import React from 'react';
import ReactDOM from 'react-dom/client';
import DailyPlanBreakfast from './components/DailyPlanBreakfast';
import App from './components/App';
import { CalculateCalories } from './components/CalculateCalories';

import 'bootstrap/dist/css/bootstrap.min.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DailyPlanBreakfast/>

    <CalculateCalories />
    {/* <App /> */}
  </React.StrictMode>
);


