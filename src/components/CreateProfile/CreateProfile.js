import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './CreateProfile.css';
import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';

import Particle from '../Particle/Particle';
import Avatar from '@mui/material/Avatar';
import { createProfile, uploadProfileImage } from '../../services/profiles';
import { Button } from '@mui/material';
import { UserContext } from '../../context/UserContext';

export default function CreateProfile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [imageFile, setImageFile] = useState('');
  const [imageName, setImageName] = useState('');
  console.log(imageFile);

  const { user } = useContext(UserContext);

  const handleCreateProfile = async () => {
    await createProfile(firstName, lastName, username);
  };

  const handleUpload = async () => {
    setImageName(`${user.id}/${imageFile.name}}`);
    const response = await uploadProfileImage(imageName, imageFile[0]);
    console.log(response);
  };

  return (
    <div className="profile-body">
      <div className="main-profile">
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
            <div className="photo-container">
              <label>Add Profile photo:</label>
              <input
                className="photo-input"
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.value.files[0].name)}
              ></input>
              <Avatar src={imageFile} sx={{ width: 75, height: 75 }} />
            </div>

            <div className="input-icons">
              <TextField
                className="first-name-input"
                label="First name"
                margin="dense"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              ></TextField>
            </div>
            <div className="input-icons">
              <TextField
                className="last-name-input"
                label="Last name"
                margin="dense"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              ></TextField>
            </div>
            <div className="input-icons">
              <TextField
                className="username-input"
                label="Username"
                margin="dense"
                value={username}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              ></TextField>
            </div>
            <Box className="button-box">
              <div className="toggle-sign-up">
                <NavLink to="/postlist">
                  <Button
                    onClick={(e) => {
                      handleCreateProfile(e);
                      handleUpload(e);
                    }}
                  >
                    Submit
                  </Button>
                </NavLink>
              </div>
            </Box>
          </FormControl>
        </Box>
      </div>
    </div>
  );
}
