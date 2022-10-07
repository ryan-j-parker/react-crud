import { Input } from '@mui/material';
import React from 'react';
import { uploadImage } from '../../services/client';

function Avatar() {
  const addAvatar = async (data, user) => {
    const imageFile = data.get('avatar');
    let url = '';

    if (imageFile.size) {
      const imageName = `${user.id}/${imageFile.name}`;

      url = await uploadImage(imageName, imageFile);
      profileUpdate.avatar_url = url;
    }
  };

  return (
    <div className="image-container">
      <form id="profile-form">
        <label>
          Avatar:
          <Input
            type="file"
            name="avatar"
            id="avatar-input"
            placeholder="upload an avatar"
            accept="image/*"
          />
        </label>
        <p>
          <img className="hidden" id="preview" alt="avatar preview" />
        </p>

        <button id="update-btn" name="update" onClick={addAvatar}>
          Add avatar
        </button>
      </form>
    </div>
  );
}

export default Avatar;
