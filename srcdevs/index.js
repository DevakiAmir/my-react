import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AdminHome from './AdminHome';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

let id =localStorage.getItem("userid");

if(id === null)
{
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}else{
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
