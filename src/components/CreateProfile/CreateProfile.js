import React, { useContext, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './CreateProfile.css';
import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import useAvatar from '../../hooks/useAvatar';
import Particle from '../Particle/Particle';
import Avatar from '@mui/material/Avatar';
import { createProfile, getProfileById, uploadProfileImage } from '../../services/profiles';
import { Button } from '@mui/material';
import { UserContext } from '../../context/UserContext';
import useProfile from '../../hooks/useProfile';
import { useHistory } from 'react-router-dom';

export default function CreateProfile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [imageFile, setImageFile] = useState('');
  const history = useHistory();

  const imageRef = useRef(null);

  const { user } = useContext(UserContext);
  const { setProfile, profile } = useProfile();

  const { result, uploader } = useAvatar();

  const handleCreateProfile = async () => {
    let url = null;
    if (imageFile.name) {
      const randomFolder = Math.floor(Date.now() * Math.random());
      const imagePath = `profile-pictures/${randomFolder}/${imageFile.name}`;

      url = await uploadProfileImage(imagePath, imageFile);
    }
    await createProfile(firstName, lastName, username, url);
    const prof = await getProfileById(user.id);
    history.push('/posts');
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
          <form>
            <FormControl className="input-form">
              <div className="photo-container">
                <label>Add Profile photo:</label>
                <input
                  className="photo-input"
                  name="image"
                  type="file"
                  accept="*/"
                  onChange={(e) => {
                    setImageFile(e.target.files[0]);
                    uploader(e);
                  }}
                ></input>
                <Avatar src={result} ref={imageRef} sx={{ width: 100, height: 100 }} />
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
                  <Button onClick={handleCreateProfile}>Create Profile</Button>
                </div>
              </Box>
            </FormControl>
          </form>
        </Box>
      </div>
    </div>
  );
}
