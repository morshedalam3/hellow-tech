import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
             <div>
            
            <nav className="nav">
                <ul>
               
                <li className='title-container'>Hello Tech</li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/order">Order</Link>
                    </li>
                    <li>
                        <Link to="/manageProduct">Admin</Link>
                    </li>
                    <li>
                        <Link  to="/contact">Deals</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    {/* <li>
                        <Link to="/addProducts">addProducts</Link>
                    </li> */}
                   
                </ul>
            </nav>
        </div>
        </div>
    );
};

export default Header;