import React, { useState } from 'react';
import { createPost } from '../../services/posts';
import './CreatePost.css';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const makePost = async () => {
    await createPost(title, description);
  };

  console.log('log', title, description);

  return (
    <>
      <div className="container">
        <div className="create-post">
          <form>
            <label>Title</label>
            <input
              className="title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></input>
            <label>Description</label>
            <input
              className="desc"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></input>
            <button onClick={makePost} className="create-btn">
              Create post
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreatePost;
