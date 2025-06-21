import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Mydashboard from './reacthooks/dashboard';
import Newproduct from './reacthooks/newproduct.js';
import Productlist from './reacthooks/productlist';


function AdminHome() {
    return (
        <HashRouter>
            <div className=' navbar navbar-expand-lg p-2 bg-dark'>
                <div className='col-xl-3 text-light ms-5'>
                    React Shopping
                </div>

                <div className='col-xl-8 text-end'>
                    <div className='btn-group'>
                        <Link className='btn me-3  text-light' to='/dashboard'>
                            Dashboard
                        </Link>
                        <Link className='btn me-3  text-light' to='/productlist'>
                            Inventory
                        </Link>
                        <Link className='btn me-3  text-light' to='/newproduct'>
                            New Inventory
                        </Link>
                        <Link className='btn me-3  text-light' to='/'>
                            Manage Order
                        </Link>
                        <Link onClick={Logout} className='btn me-3 text-warning' to='/'>
                            Welcome - {localStorage.getItem("name")} - <i className="fa-solid fa-power-off"></i> Logout
                        </Link>
                    </div>
                </div>
            </div>
            
            <Routes>
                <Route exact path='/dashboard' element={<Mydashboard />} />
                <Route exact path='/newproduct' element={<Newproduct />} />
                <Route exact path='/productlist' element={<Productlist />} />
            </Routes>

        </HashRouter>
    );
}

export default AdminHome;


const Logout = () =>{
    localStorage.clear()
    window.location.reload()
}