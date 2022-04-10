import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Login</h1>
                <form action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required/>
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New to ema-josh? <Link className='form-link' to='/singin'>Create an Acount</Link>
                </p>
            <div className='line'>
                <div className='hr'><hr /></div>
                <div>or</div>
                <div className='hr'><hr /></div>
            </div>
            <button className='google-button'>
                <FcGoogle className='google-icon'/> 
                <p>Continue with Google</p>
            </button>

            </div>
 
        </div>
    );
};

export default Login;