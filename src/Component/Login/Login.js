import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import auth from '../../Firebase.init'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate =useNavigate()
      const location=useLocation()
      const from=location.state?.from?.pathname || '/'
    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }
    if(user){
        navigate(from,{replace:true})
    }
    const handelUserSingin =(event)=>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password)

    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Login</h1>
                <form onSubmit={handelUserSingin}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
                    </div>
                    <p style={{color:'red'}}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New to ema-josh? <Link className='form-link' to='/singup'>Create an Acount</Link>
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