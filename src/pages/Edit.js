

import { Button, FormControl, TextareaAutosize, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { updateContent } from '../helpers/firebaseConnect';


const Edit = () => {
    //const {contentId} = useParams();
    const location = useLocation();
    const content = location.state.content;

    const [title, setTitle] = useState("d")
    


    //console.log(contentId);
    return (
        <div>
            Edit sayfası {content.id}
            <FormControl>
            <TextField 
            id="outlined-basic" 
            name="title"
            label="Title" 
            variant="outlined" 
            defaultValue = {content.title}
            onChange={null}
             />
            <TextField 
            id="outlined-basic" 
            name="image"
            label="Image URL" 
            variant="outlined"
            defaultValue={content.image}
            onChange={null}
             />
            <TextareaAutosize
                maxRows={20}
                name="body"
                aria-label=""
                placeholder="Please write something..."
                style={{ width: 400, height: 200 }}
                defaultValue={content.body}
                onChange={null}
            />
            <Button 
            variant="contained"
             onClick={()=>updateContent(
                 content.title,
                 content.image,
                 content.body
             )}
             >Send</Button>
        </FormControl>
        </div>
    )
}

export default Edit
