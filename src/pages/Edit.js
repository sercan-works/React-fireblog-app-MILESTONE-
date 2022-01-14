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

  //console.log("edit content=", title, author, image, body);

  //console.log("Edited Content",editedcontent);
  const [counter, setCounter] = useState(0)
  const handleInputChange = (e) => {
    setCounter(counter + 1)
    const {name,value} = e.target
    setEditedContent({ title, author, body, image ,[name]:value})
  };

 
  //console.log(counter);

  const handleFormSubmit = () => {
   if(counter === 0){
      alert("KAYIT GÜNCELLENMEDİ");
   }else{
    updateContent(editedcontent);
    deleteContent(contentId);
    navigate("/");
    alert("KAYIT GÜNCELLENDİ");
   }
  };

  return (
    <div>
      <Box sx={{m:2,p:2, display: 'flex',justifyContent: 'center'}}>
      <FormControl sx={{boxShadow:10,mt:2}}>
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
          sx={{mt:2}}
          onChange={handleInputChange}
        />
        <TextareaAutosize
          maxRows={20}
          name="body"
          aria-label=""
          placeholder="Please write something..."
          style={{ width: 400, height: 200 }}
          defaultValue={body}
          sx={{mt:2}}
          onChange={handleInputChange}
        />
        <Button
          sx={{mt:2}}
          color="success"
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
