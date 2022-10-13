import React from 'react';
import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import usePosts from '../../hooks/usePosts';
import PostCard from '../PostCard/PostCard';
import './PostList.css';
import CircularProgress from '@mui/material/CircularProgress';
import Particle from '../Particle/Particle';
import ProfileDisplay from '../ProfileDisplay/ProfileDisplay';

export default function PostList() {
  const { posts, loading } = usePosts();
  const { user } = useContext(UserContext);
  const [userProfile, setUserProfile] = useState('');

  const getProfile = async () => {
    const userName = await getProfile()
  }

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
    <>
      <div className="particle-bg">
        <Particle />
      </div>
      <div className="posts-body">
        <div className="profile-section">
          <ProfileDisplay />
        </div>
        <div className="posts-container">
          <div className="main-posts">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                title={post.title}
                description={post.description}
                user_id={post.user_id}
                id={post.id}
                username={}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
