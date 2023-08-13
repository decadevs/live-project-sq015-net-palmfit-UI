import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import FundWallet from './components/Wallet/FundWallet';
//import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <FundWallet/>
  </React.StrictMode>
);


