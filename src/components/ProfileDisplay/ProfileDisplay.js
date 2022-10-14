import React, { useContext, useState } from 'react';
import { Box } from '@mui/system';
import { Avatar } from '@mui/material';
import { getProfileById } from '../../services/profiles';
import './ProfileDisplay.css';
import { UserContext } from '../../context/UserContext';
import useAvatar from '../../hooks/useAvatar';
import useProfile from '../../hooks/useProfile';

export default function ProfileDisplay({ profile, loading }) {
  if (loading) {
    return <h1>Loading...</h1>;
  }

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
            <Avatar src={profile.avatar_url} sx={{ width: 200, height: 200 }} />
          </div>

          <div className="profile-data">
            <div>
              <p>{profile.username}</p>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}
