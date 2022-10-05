import React from 'react';
import { NavLink } from 'react-router-dom';
import './Auth.css';

function Auth() {
  return <div className='main-auth'>



    <div className='container-input'>
      <div className='links-container'>
        <NavLink to="/auth/sign-up"><p>Sign Up</p></NavLink>
        <NavLink to="/auth/sign-in"><p>Sign In</p></NavLink>
      </div>
      <label>Email</label>
      <input className='email-input'></input>
      <label>Password</label>
      <input className='password-input'></input>
      <button>Submit</button>
    </div>


  </div>;
}

export default Auth;
