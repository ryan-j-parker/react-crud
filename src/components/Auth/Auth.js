import React, { useState } from 'react';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import { authUser } from '../../services/auth';
import './Auth.css';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import InputAdornment from '@mui/material/InputAdornment';
import Particle from '../Particle/Particle';

function Auth() {
  const { type } = useParams();
  const { user, setUser } = useContext(UserContext);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const signInQ = "Don't have an account?";

  const submitAuth = async () => {
    const userResp = await authUser(email, password, type);

    setUser(userResp);
  };

  if (user) {
    return <Redirect to="/posts" />;
  }

  return (
    <div className="auth-body">
      <div className="main-auth">
        <Particle style={{ zIndex: 1 }} />
        <Box
          className="box"
          sx={{
            bgcolor: '#DFF6FF',
            boxShadow: 4,
            borderRadius: 2,
            pt: 2,
            minWidth: 350,
            minHeight: 400,
            opacity: 1,
            zIndex: 9999,
          }}
        >
          <FormControl className="input-form">
            <div className="input-icons">
              <PersonIcon className="icon"></PersonIcon>
              <TextField
                className="email-input"
                startAdornment={
                  <InputAdornment>
                    <PersonIcon></PersonIcon>
                  </InputAdornment>
                }
                label="Email"
                autoComplete="on"
                margin="dense"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></TextField>
            </div>
            <div className="input-icons">
              <LockIcon className="icon"></LockIcon>
              <TextField
                className="password-input"
                label="Password"
                autoComplete="on"
                margin="dense"
                value={password}
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></TextField>
            </div>
            <Box className="button-box">
              <NavLink to="/create-profile">
                <Button mt={2} variant="contained" className="auth-btn" onClick={submitAuth}>
                  Sign in
                </Button>
              </NavLink>
              <div className="toggle-sign-up">
                <p>{signInQ}</p>
                <NavLink to="/auth/sign-up">
                  <h3>Sign up</h3>
                </NavLink>
              </div>
            </Box>
          </FormControl>
        </Box>
      </div>
    </div>
  );
}

export default Auth;
