import React from 'react';
import usePosts from '../../hooks/usePosts';
import PostCard from '../PostCard/PostCard';
import './PostList.css';

export default function PostList() {
  const { posts } = usePosts();
  console.log('postssss', posts);

  return (
    <div className="main-posts">
      {posts.map((post) => (
        <PostCard key={post.id} title={post.title} description={post.description} />
      ))}
    </div>
  );
}
