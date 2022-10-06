import React from 'react';
import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import usePosts from '../../hooks/usePosts';
import PostCard from '../PostCard/PostCard';
import './PostList.css';

export default function PostList() {
  const { posts } = usePosts();
  const { user } = useContext(UserContext);

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  return (
    <div className="main-posts">
      {posts.map((post) => (
        <PostCard key={post.id} title={post.title} description={post.description} />
      ))}
    </div>
  );
}
