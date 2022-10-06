import React, { useState } from 'react';
import { createPost } from '../../services/posts';
import './CreatePost.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';

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
          <Box component="span" sx={{ p: 2, m: -5, border: '1px dashed grey' }}>
            <FormControl>
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                className="title"
                margin="dense"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              ></TextField>
              <TextField
                id="outlined-basic"
                label="Description"
                variant="outlined"
                className="desc"
                margin="dense"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></TextField>
              <Button variant="contained" onClick={makePost} className="create-btn">
                Create post
              </Button>
            </FormControl>
          </Box>
        </div>
      </div>
    </>
  );
}

export default CreatePost;
