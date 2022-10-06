import React from 'react';
import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import usePosts from '../../hooks/usePosts';
import PostCard from '../PostCard/PostCard';
import './PostList.css';
import CircularProgress from '@mui/material/CircularProgress';

export default function PostList() {
  const { posts, loading } = usePosts();
  const { user } = useContext(UserContext);

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  if (loading)
    return (
      <div className="loading-box">
        <CircularProgress className="loading" color="primary" size={100}></CircularProgress>
      </div>
    );

  return (
    <div className="main-posts">
      {posts.map((post) => (
        <PostCard key={post.id} title={post.title} description={post.description} />
      ))}
    </div>
  );
}
