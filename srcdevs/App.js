import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Mydashboard from './reacthooks/dashboard';
import Newproduct from './reacthooks/newproduct.js';
import Productlist from './reacthooks/productlist';
import MyCart from './reacthooks/cart';
import Login from './reacthooks/login';
import Home from './reacthooks/home';
import { useState } from 'react';
function App() {
  return (
    <HashRouter>
      <div className=' navbar navbar-expand-lg p-2 bg-dark'>
        <div className='col-xl-3 text-light fs-5 ms-5'>
          <i className='fa-solid fa-bag-shopping'></i>  React Shopping
        </div>
        <div className='col-xl-8 text-end'>
          <div className='btn-group'>
            <Link className='btn me-3  text-light' to='/'>
              <i className='fa-solid fa-home'></i> Home
            </Link>
            <Link className='btn me-3  text-light' to='/mycart'>
              <i className='fa-solid fa-shopping-cart'></i> My Cart
            </Link>
            <Link className='btn me-3  text-light' to='/login'>
              <i className='fa-solid fa-lock'></i> Login
            </Link>
            <Link className='btn me-3  text-light' to='/'>
              <i className='fa-solid fa-user-plus'></i> Create Account
            </Link>
          </div>
        </div>
      </div>
      <Routes>
        <Route exact path='/mycart' element={<MyCart />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/' element={<Home />} />
      </Routes>

    </HashRouter>
  );
}

export default App;
