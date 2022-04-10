import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='nav-container'>
            <img src={logo} alt="" />
        <div>
            <a href="/shop">Shop</a>
            <a href="/Orders">Orders</a>
            <a href="/inventory">Inventory</a>
            <a href="/about">About</a>
            <a href="/login">Login</a>
        </div>
        </nav>
    );
};

export default Header;