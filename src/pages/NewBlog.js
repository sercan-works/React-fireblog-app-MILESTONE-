import { Box, Button, FormControl, Paper,  TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";

import { addContent, updateContent} from "../helpers/firebaseConnect";

const initialValues = {title:"",body:"",image:"",author:""}

const NewBlog = () => {
    const navigate = useNavigate();
     const [content, setContent] = useState(initialValues)
     const{currentUser} = useContext(AuthContext);
     
    
    const handleInputChange = (e) => {
        const {name,value} = e.target
        
        setContent({...content,[name]:value})
        
        }

    const handleFormSubmit= () => {
      console.log(content);
      addContent(content,currentUser)
      navigate("/")  
    }

    
    return (
        <div align="center">
      <ToastContainer />
      <Box sx={{ m: 2,display: "inline-block", justifyContent: "center" }}>
        
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            flexGrow: 1,
            fontSize:'45px',
            display: "flex",
            md: "none",
            cursor: "pointer",
            justifyContent: "center",
      
          }}
          fontFamily="cursive"
        >
          <p style={{ color: "#ff5b45", }}>||</p>
          <p style={{ color: "#a63dfc" }}>New</p>
          <p style={{ color: "#3dfc9d" }}>Blog</p>
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
            value={content.title}
            onChange={handleInputChange}
          />
          <TextField
            id="outlined-basic"
            name="image"
            label="Image URL"
            variant="outlined"
            sx={{ m: 1 }}
            value={content.image}
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
            value={content.body}
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
            SAVE
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

export default NewBlog;
