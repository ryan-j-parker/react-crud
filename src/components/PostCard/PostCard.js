import React from 'react';
import './PostCard.css';

export default function PostCard({ title, description }) {
  return (
    <div className="post-card">
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
    </div>
  );
}
