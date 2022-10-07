import React, { useState } from 'react';
import { createPost } from '../../services/posts';
import './CreatePost.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import Particle from '../Particle/Particle';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const makePost = async () => {
    await createPost(title, description);
  };

  return (
    <>
      <div className="container">
        <Particle />
        <div className="create-post">
          <Box
            className="box"
            sx={{
              bgcolor: '#256D85',
              boxShadow: 1,
              borderRadius: 2,
              pt: 2,
              minWidth: 300,
              minHeight: 320,
            }}
          >
            <h2 className="create">Create a post</h2>

            <FormControl className="post-form">
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
              <div className="button-div">
                <Link to="/posts">
                  <Button
                    variant="contained"
                    mt={2}
                    onClick={makePost}
                    className="create-btn"
                    startIcon={<SendIcon />}
                  >
                    Post it
                  </Button>
                </Link>
              </div>
            </FormControl>
          </Box>
        </div>
      </div>
    </>
  );
}
export default CreatePost;
