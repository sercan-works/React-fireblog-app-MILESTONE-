import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import {deleteContent} from '../helpers/firebaseConnect'

const Details = () => {
    const {contentId} = useParams();
    const location = useLocation();
    
    const navigate = useNavigate();
    //console.log(location.state.content.id);
    const content = location.state.content;
    
    return (
        <div>
{/*              
            <img src={content.image} alt="detay resmi"/>
            <h1>{content.title}</h1>
            <p>{content.body}</p> */}
      <Box sx={{m:2,p:2, display: 'flex',justifyContent: 'center'}}>  
     <Card sx={{ maxWidth: 500,boxShadow:5, }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={content.image}
          alt="pics"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {content.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {content.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box> 
    <center>
    <button onClick={()=>navigate(`/edit/${contentId}`,{state:{content}})}>Edit</button>
            <button
            onClick={()=>{
              deleteContent(contentId)
              navigate("/")
            }}
            >Delete</button>
           </center>
        </div>
    )
}

export default Details
