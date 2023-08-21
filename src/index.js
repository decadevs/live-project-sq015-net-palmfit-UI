import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import App from './components/App';
//import { CalculateCalories } from './components/CalculateCalories';

import 'bootstrap/dist/css/bootstrap.min.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* <CalculateCalories /> */}
    <App />
  </React.StrictMode>
);


