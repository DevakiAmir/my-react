import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import App from './App';
import AdminHome from './adminhome';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let id = localStorage.getItem("userid");    // fetching data from browser memory but it does not exist so it will return null 

if(id === null){
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);}
else{
  root.render(
    <React.StrictMode>
      <AdminHome />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
