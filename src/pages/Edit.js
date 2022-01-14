import {
  Box,
  Button,
  FormControl,
  Paper,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { deleteContent, updateContent } from "../helpers/firebaseConnect";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValues = { title: "", body: "", image: "", author: "" };
const Edit = () => {
  const navigate = useNavigate();
  const { contentId } = useParams();
  const location = useLocation();

  const { title, author, body, image } = location.state.content;
  const [editedcontent, setEditedContent] = useState(initialValues);

  //console.log("edit content=", title, author, image, body);

  //console.log("Edited Content",editedcontent);
  const [counter, setCounter] = useState(0);
  const handleInputChange = (e) => {
    setCounter(counter + 1);
    const { name, value } = e.target;
    setEditedContent({ title, author, body, image, [name]: value });
  };

  //console.log(counter);

  const handleFormSubmit = () => {
    if (counter === 0) {
      //alert("KAYIT GÜNCELLENMEDİ");
    } else {
      updateContent(editedcontent);
      deleteContent(contentId);
      navigate("/");
      //alert("KAYIT GÜNCELLENDİ");
    }
  };

  return (
    <div align="center">
      <ToastContainer />
      <Box sx={{ m: 2, display: "inline-block", justifyContent: "center" }}>
        
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            flexGrow: 1,
            display: "flex",
            md: "none",
            cursor: "pointer",
            justifyContent: "center",
          }}
          fontFamily="cursive"
        >
          <p style={{ color: "#ff5b45" }}>||</p>
          <p style={{ color: "#a63dfc" }}>Edit</p>
          <p style={{ color: "#3dfc9d" }}>Page</p>
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Paper
          variant="outlined"
          sx={{ bgcolor: "#ba7d99", postion: "absolute", width: "5px" }}
        ></Paper>
        <FormControl sx={{ boxShadow: 5}}>
          <TextField
            id="outlined-basic"
            name="title"
            label="Title"
            variant="outlined"
            sx={{ m: 1, width:[400,600,600]}}
            defaultValue={title}
            onChange={handleInputChange}
          />
          <TextField
            id="outlined-basic"
            name="image"
            label="Image URL"
            variant="outlined"
            sx={{ m: 1 }}
            defaultValue={image}
            onChange={handleInputChange}
          />
             <TextField
            id="outlined-basic"
            name="body"
            label="Content"
            multiline
            rows={10}
            //variant="outlined"
            sx={{ m: 1}}
            defaultValue={body}
            onChange={handleInputChange}
          />
          <Button 
         
          sx={{ m: 1 }}
            color="success"
            variant="contained"
            onClick={() =>
              updateContent(
                // content.title,content.image,content.body
                handleFormSubmit()
              )}
          >
            UPDATE
          </Button>
        </FormControl>
        <Paper
          variant="outlined"
          sx={{ bgcolor: "#b39029", postion: "absolute", width: "5px" }}
        ></Paper>
      </Box>




      
    </div>
  );
};

export default Edit;
