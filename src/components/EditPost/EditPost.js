import React from 'react';
import './EditPost.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import SendIcon from '@mui/icons-material/Send';

export default function EditPost() {
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
                label="Title"
                variant="outlined"
                className="title"
                margin="dense"
              ></TextField>
              <TextField
                id="outlined-basic"
                label="Description"
                variant="outlined"
                className="desc"
                margin="dense"
              ></TextField>
              <div className="button-div">
                <Button variant="contained" mt={2} className="create-btn" startIcon={<SendIcon />}>
                  Post it
                </Button>
              </div>
            </FormControl>
          </Box>
        </div>
      </div>
    </>
  );
}
