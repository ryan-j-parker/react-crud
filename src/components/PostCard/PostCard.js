import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { deletePost, getPostById } from '../../services/posts';
import './PostCard.css';

export default function PostCard({ title, description, user_id, id }) {
  const { user } = useContext(UserContext);

  const owner = user.id === user_id;

  const getPostDetail = (id) => {
    return getPostById(id);
  };

  const deleteHandler = (id) => {
    return deletePost(id);
  };

  return (
    <div className="post-card">
      <h3 className="post-title">{title}</h3>
      <p className="description">{description}</p>
      {owner && (
        <Link to={`/edit-post/${id}`}>
          <button onClick={() => getPostDetail(id)}>edit</button>
        </Link>
      )}
      {owner && <button onClick={() => deleteHandler(id)}>delete</button>}
    </div>
  );
}
