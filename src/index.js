import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
//import  CalulateCalories from './components/CalculateCalories';

import 'bootstrap/dist/css/bootstrap.min.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* <CalulateCalories /> */}
    <App />
  </React.StrictMode>
);


