import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import usePosts from '../../hooks/usePosts';

import './PostCard.css';

export default function PostCard({ title, description, user_id, id, username, deletePost }) {
  const { user } = useContext(UserContext);

  const owner = user.id === user_id;

  return (
    <div className="post-card">
      <div className="user-select">
        <h3 className="username-display">{username}</h3>
        {owner && (
          <Select>
            <MenuItem value={'edit'}>
              <Link to={`/edit-post/${id}`}>Edit</Link>
            </MenuItem>
            <MenuItem onClick={() => deletePost(id)}>Delete</MenuItem>
          </Select>
        )}
      </div>
      <div className="post-content">
        <h3 className="post-title">{title}</h3>
        <p className="post-description">{description}</p>
      </div>

      <TextField label="Add a comment..."></TextField>
    </div>
  );
}
