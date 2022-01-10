import { Button, FormControl, TextareaAutosize, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { addContent} from "../helpers/firebaseConnect";

const initialValues = {title:"",body:"",image:""}

const NewBlog = () => {
     const [content, setContent] = useState(initialValues)
    // const baseURL = "http://localhost:5000/contents";

    //Send Content
    // const addContent = async () => {
    //     const res = await axios.post(baseURL)
    // }

    const handleInputChange = (e) => {
        const {name,value} = e.target
        setContent({...content,[name]:value})
        }
    const handleFormSubmit= () => {
        console.log(content);
      addContent(content)
        
    }

    
    return (
        <div>
        <FormControl>
            <TextField 
            id="outlined-basic" 
            name="title"
            label="Title" 
            variant="outlined" 
            value = {content.title}
            onChange={handleInputChange}
             />
            <TextField 
            id="outlined-basic" 
            name="image"
            label="Image URL" 
            variant="outlined"
            value={content.image}
            onChange={handleInputChange}
             />
            <TextareaAutosize
                maxRows={20}
                name="body"
                aria-label=""
                placeholder="Please write something..."
                style={{ width: 400, height: 200 }}
                value={content.body}
                onChange={handleInputChange}
            />
            <Button 
            variant="contained"
             onClick={handleFormSubmit}
             >Send</Button>
        </FormControl>
        </div>
    );
};

export default NewBlog;
