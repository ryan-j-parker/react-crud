import React, { useState } from 'react';
import './EditPost.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import { deletePost, editPost } from '../../services/posts';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import usePost from '../../hooks/usePost';
import Particle from '../Particle/Particle';

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
        <Particle />
        <div className="edit-post">
          <Box
            className="box"
            sx={{
              bgcolor: '#fbf2d5',
              boxShadow: 1,
              borderRadius: 2,
              pt: 2,
              minWidth: 300,
              minHeight: 340,
              opacity: 1,
              zIndex: 9999,
            }}
          >
            <h2 className="create">Edit post</h2>

            <FormControl className="post-form">
              <div className="title-field">
                <TextField
                  id="outlined-basic"
                  label={post.title}
                  variant="outlined"
                  className="title"
                  margin="dense"
                  onChange={(e) => {
                    setNewTitle(e.target.value);
                  }}
                ></TextField>
              </div>
              <div className="desc-field">
                <TextField
                  id="outlined-basic"
                  label={post.description}
                  variant="outlined"
                  className="desc"
                  margin="dense"
                  onChange={(e) => {
                    setNewDescription(e.target.value);
                  }}
                ></TextField>
              </div>
              <div className="button-div">
                <Link to="/posts">
                  <Button
                    variant="contained"
                    mt={2}
                    id="del-btn"
                    style={{ backgroundColor: '#d32f2f' }}
                    className="create-btn"
                    startIcon={<DeleteIcon />}
                    onClick={deleteHandler}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="contained"
                    mt={2}
                    id="edit-btn"
                    style={{ backgroundColor: '#2e7d32' }}
                    className="create-btn"
                    startIcon={<SendIcon />}
                    onClick={editHandler}
                  >
                    Save
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
