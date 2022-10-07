import React, { useState } from 'react';
import './EditPost.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import SendIcon from '@mui/icons-material/Send';
import { deletePost, editPost } from '../../services/posts';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import usePost from '../../hooks/usePost';

export default function EditPost() {
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const editPostId = useParams();
  const { post } = usePost(editPostId.id);
  const editHandler = async () => {
    await editPost(newTitle, newDescription, editPostId.id);
  };

  const deletePostById = useParams();
  const deleteHandler = async () => {
    await deletePost(deletePostById.id);
  };

  return (
    <>
      <div className="container">
        <div className="edit-post">
          <Box
            className="box"
            sx={{
              bgcolor: '#fbf2d5',
              boxShadow: 1,
              borderRadius: 2,
              pt: 2,
              minWidth: 300,
              minHeight: 320,
            }}
          >
            <h2 className="create">Edit post</h2>

            <FormControl className="post-form">
              <TextField
                id="outlined-basic"
                label={post.title}
                variant="outlined"
                className="title"
                margin="dense"
                // placeholder={post.title}
                onChange={(e) => {
                  setNewTitle(e.target.value);
                }}
              ></TextField>
              <TextField
                id="outlined-basic"
                label={post.description}
                variant="outlined"
                className="desc"
                margin="dense"
                // placeholder={post.description}
                onChange={(e) => {
                  setNewDescription(e.target.value);
                }}
              ></TextField>
              <div className="button-div">
                <Link to="/posts">
                  <Button
                    variant="contained"
                    mt={2}
                    className="create-btn"
                    startIcon={<SendIcon />}
                    onClick={editHandler}
                  >
                    Save
                  </Button>
                  <Button
                    variant="contained"
                    mt={2}
                    className="create-btn"
                    startIcon={<SendIcon />}
                    onClick={deleteHandler}
                  >
                    Delete
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
