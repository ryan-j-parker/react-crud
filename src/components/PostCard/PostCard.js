import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import './PostCard.css';

export default function PostCard({ title, description, user_id }) {
  const { user } = useContext(UserContext);

  const owner = user.id === user_id;

  return (
    <div className="post-card">
      <h3 className="post-title">{title}</h3>
      <p className="description">{description}</p>
      {owner && <button>edit</button>}
    </div>
  );
}
