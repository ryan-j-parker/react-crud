import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Avatar } from '@mui/material';

import './PostCard.css';

export default function PostCard({
  title,
  description,
  user_id,
  id,
  username,
  deletePost,
  profile,
}) {
  const { user } = useContext(UserContext);

  const owner = user.id === user_id;

  return (
    <div className="post-card">
      <div className="user-select">
        <div className="user-post-section">
          <Avatar src={profile.avatar_url} sx={{ width: 100, height: 100 }} />
          <h3 className="username-display">{username}</h3>
        </div>
        <div className="dropdown-section">
          {owner && (
            <Select className="post-options">
              <MenuItem value={'edit'}>
                <Link to={`/edit-post/${id}`}>Edit</Link>
              </MenuItem>
              <MenuItem onClick={() => deletePost(id)}>Delete</MenuItem>
            </Select>
          )}
        </div>
      </div>
      <div className="post-content">
        <h3 className="post-title">{title}</h3>
        <p className="post-description">{description}</p>
      </div>
      <div className="like-comment">
        <TextField className="comment-input" label="Add a comment..."></TextField>
        <div className="like">
          <img className="like-icon" src={require('./like.png')} />
        </div>
      </div>
    </div>
  );
}
