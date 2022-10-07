import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { deletePost, getPostById } from '../../services/posts';
import './PostCard.css';
import usePost from '../../hooks/usePost';

export default function PostCard({ title, description, user_id, id }) {
  const { user } = useContext(UserContext);
  const { post } = usePost(id);
  console.log('post!!', post);

  const owner = user.id === user_id;
  console.log('id check', id);
  const getPostDetail = async (id) => {
    return await getPostById(id);
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
    </div>
  );
}
