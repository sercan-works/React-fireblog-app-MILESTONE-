import {
  Box,
  Button,
  FormControl,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { deleteContent, updateContent } from "../helpers/firebaseConnect";

const initialValues = { title: "", body: "", image: "", author: "" };
const Edit = () => {
  const navigate = useNavigate();  
  const { contentId } = useParams();
  const location = useLocation();

  const { title, author, body, image } = location.state.content;
  const [editedcontent, setEditedContent] = useState(initialValues);

  console.log("edit content=", title, author, image, body);

  console.log("Edited Content",editedcontent);

  const handleInputChange = (e) => {
    const {name,value} = e.target
    setEditedContent({ title, author, body, image ,[name]:value})

  };


  const handleFormSubmit = () => {
    updateContent(editedcontent);
    deleteContent(contentId);
    navigate("/");
  
  };

  return (
    <div>
      <Box sx={{m:2,p:2, display: 'flex',justifyContent: 'center'}}>
      <FormControl sx={{boxShadow:10,}}>
        <TextField
          id="outlined-basic"
          name="title"
          label="Title"
          variant="outlined"
          defaultValue={title}
          onChange={handleInputChange}
        />
        <TextField
          id="outlined-basic"
          name="image"
          label="Image URL"
          variant="outlined"
          defaultValue={image}
          onChange={handleInputChange}
        />
        <TextareaAutosize
          maxRows={20}
          name="body"
          aria-label=""
          placeholder="Please write something..."
          style={{ width: 400, height: 200 }}
          defaultValue={body}
          onChange={handleInputChange}
        />
        <Button
          variant="contained"
          onClick={() =>
            updateContent(
              // content.title,content.image,content.body
              handleFormSubmit()
            )
          }
        >
          UPDATE
        </Button>
      </FormControl>
      </Box>
    </div>
  );
};

export default Edit;
