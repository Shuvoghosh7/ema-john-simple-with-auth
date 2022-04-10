import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    const[user]=useAuthState(auth)
    const handelSingOut=()=>{
        signOut(auth);
    }
    return (
        <nav className='nav-container'>
            <img src={logo} alt="" />
        <div>
            <Link to="/shop">Shop</Link>
            <Link to="/Orders">Orders</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/about">About</Link>
            {  user? <button onClick={handelSingOut}>Sing out</button>
                :
                <a href="/login">Login</a>
            }
        </div>
        </nav>
    );
};

export default Header;