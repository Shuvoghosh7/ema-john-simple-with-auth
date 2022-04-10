import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import './Singin.css'
const Singin = () => {
    return (
        <div className='form-container'>
        <div>
            <h1 className='form-title'>Sing Up</h1>
            <form action="">
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name="confirm-password" id=""required/>
                </div>
                <input className='form-submit' type="submit" value="Sing UP" />
            </form>
            <p>
            Already have an account?  <Link className='form-link' to='/login'>Login</Link>
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

export default Singin;