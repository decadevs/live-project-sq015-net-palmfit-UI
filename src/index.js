import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';
//import { CalculateCalories } from './components/CalculateCalories';

import 'bootstrap/dist/css/bootstrap.min.css';
import DailyPlanBreakfast from './components/DailyPlan/DailyPlanBreakfast';
// import '../../components/DailyPlan/DailyPlanBreakfast.module.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <CalculateCalories /> */}
    <App />
    <DailyPlanBreakfast />
  </React.StrictMode>
);


