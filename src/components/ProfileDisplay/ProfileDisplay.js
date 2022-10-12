import React, { useContext, useState } from 'react';
import { Box } from '@mui/system';
import { Avatar } from '@mui/material';
import { getProfile } from '../../services/profiles';
import './ProfileDisplay.css';
import { UserContext } from '../../context/UserContext';

export default function ProfileDisplay() {
  const [profileName, setProfileName] = useState('');

  const { user } = useContext(UserContext);

  const loadProfile = async () => {
    const resp = await getProfile(user.id);

    setProfileName(`${resp.first_name} ${resp.last_name}`);
  };

  loadProfile();
  return (
    <div className="main-profile-display">
      <Box
        className="profile-box"
        sx={{
          boxShadow: 4,
          borderRadius: 2,
          pt: 2,
          minWidth: 350,
          minHeight: 400,
          opacity: 1,
          zIndex: 9999,
        }}
      >
        <div className="profile-container">
          <div className="photo-container">
            <Avatar src="*" sx={{ width: 100, height: 100 }} />
          </div>

          <div className="profile-data">
            <div>
              <p>{profileName}</p>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}
