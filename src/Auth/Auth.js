import React, { useState } from 'react';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import { authUser } from '../services/auth';
import './Auth.css';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Auth() {
  const { type } = useParams();
  const { user, setUser } = useContext(UserContext);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  
  if (user) {
    <Redirect to="/posts" />;
  }

  return (<div className='main-auth'>



    <div className='container-input'>
      <div className='links-container'>
        <NavLink to="/auth/sign-up"><p>Sign Up</p></NavLink>
        <NavLink to="/auth/sign-in"><p>Sign In</p></NavLink>
      </div>

      <label>Email</label>

      <input className='email-input' value={email} onChange={(e) => {
        setEmail(e.target.value);
      }}></input>

      <label>Password</label>

      <input className='password-input' value={password} type="password" onChange={(e) => {
        setPassword(e.target.value);
      }}></input>

      <button onClick={() => {
        authUser(email, password, type);
      }}>Submit</button>

    </div>


  </div>
  );
}

export default Auth;
