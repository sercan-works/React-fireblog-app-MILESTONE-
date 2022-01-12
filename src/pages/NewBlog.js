import { Box, Button, Container, FormControl, TextareaAutosize, TextField } from "@mui/material";
import axios from "axios";
import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

import { addContent} from "../helpers/firebaseConnect";

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
        <div>
            
        <Box sx={{m:2,p:2, display: 'flex',justifyContent: 'center'}}>
        <FormControl sx={{boxShadow:5,}}>
            <TextField
            id="outlined-basic" 
            name="title"
            label="Title" 
            variant="outlined" 
            sx={{m:1}}
            value = {content.title}
            onChange={handleInputChange}
            
             />
            <TextField 
            id="outlined-basic" 
            name="image"
            label="Image URL" 
            variant="outlined"
            sx={{m:1}}
            value={content.image}
            onChange={handleInputChange}
             />
            <TextareaAutosize
                maxRows={20}
                name="body"
                aria-label=""
                placeholder="Please write something..."
                style={{ width: 400, height: 200,margin:2 }}
                
                value={content.body}
                onChange={handleInputChange}

            />
             <TextField 
            id="outlined-basic" 
            name="author"
            label="Creator" 
            variant="outlined"
            value={null}
            onChange={handleInputChange}
            sx={{m:1}}
             />
            <Button 
            variant="contained"
             onClick={handleFormSubmit}
             >Send</Button>
        </FormControl>
        </Box>  
         
        </div>
    );
};

export default NewBlog;
