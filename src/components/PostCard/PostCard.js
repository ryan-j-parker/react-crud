import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { getPostById, getPosts } from '../../services/posts';
import { getProfile } from '../../services/profiles';
import './PostCard.css';
// import usePost from '../../hooks/usePost';

export default function PostCard({ title, description, user_id, id }) {
  const { user } = useContext(UserContext);

  const owner = user.id === user_id;

  const getPostDetail = async (id) => {
    const resp = await getPostById(id);
    console.log('post detail', resp);
    return resp;
  };

  // const setPosterName = async () => {
  //   const singlePost = await getPostById(id);
  //   const resp = await getPosts();
  //   console.log(resp);
  //   resp.map((post) => {
  //     if (post.user_id === singlePost.user_id) {
  //       return post.user_id;

  //     }
  //   });
  // };
  const handleProfile = async () => {
    const profile = await getProfile(user_id);
    console.log(profile);
  };

  handleProfile();

  return (
    <div className="post-card">
      <div className="posted-by">
        <h3></h3>
      </div>
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
