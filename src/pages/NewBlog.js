import { Button, TextareaAutosize, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const NewBlog = () => {
     const [title, setTitle] = useState("")
    const baseURL = "http://localhost:5000/contents";

    //Add Content
    const addContent = async (title) => {
        const res = await axios.post(baseURL,title)
    }



    return (
        <div>
            <TextField id="outlined-basic" label="Title" variant="outlined" onChange={(e)=>e.target.value} />
            <TextField id="outlined-basic" label="Image URL" variant="outlined" />
            <TextareaAutosize
                maxRows={20}
                aria-label=""
                placeholder="Please write something..."
                style={{ width: 400, height: 200 }}
            />
            <Button variant="contained" onClick={addContent()}>Send</Button>
        </div>
    );
};

export default NewBlog;
