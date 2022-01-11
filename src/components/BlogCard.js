import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useFetch } from "../helpers/firebaseConnect";
import {
  Link,
  Navigate,
  Route,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Details from "../pages/Details";
import { Box, Collapse, Grid } from "@mui/material";

const BlogCard = () => {
  const { contentList } = useFetch();
  const navigate = useNavigate();

  return (
    <div style={{width:'100%'}}>

<Box sx={{
  display: 'flex',
  justifyContent: 'wrap',
  alignContent:'flex-start',
  p:1,
  m:1,
  bgcolor:'background.paper',
  borderRadius: 1,
}}>

      {contentList?.map((content) => (
        <Card sx={{ maxWidth: 300, m:1, }} key={content.id}>
          <CardMedia
            component="img"
            height="140"
            image={content.image}
            alt={content.image?.slice(4, 15)}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {content.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>{content.body?.slice(0, 150)}</p>
            </Typography>
            <Typography>Author: {content.id}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Like</Button>
            <Button
              size="small"
              onClick={() =>
                navigate(`/detail/${content.id}`, { state: { content } })
              }
            >
              read
            </Button>
          </CardActions>
        </Card>
      ))}

</Box>      
    </div>
  );
};

export default BlogCard;
