import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";

const BlogCard = () => {
  const [contents, setContents] = useState([]);
  const baseURL = "http://localhost:5000/contents";

  const fetchContents = async () => {
    const { data } = await axios.get(baseURL);
    setContents(data);
    console.log(data);
  };
  useEffect(() => {
    fetchContents();
  }, []);

  return (
    <div>
      {contents.map((content) => (
        <Card sx={{ maxWidth: 300 }} key={content.id}>
          <CardMedia
            component="img"
            height="140"
            image={content.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">{content.title}</Typography>
            <Typography variant="body2" color="text.secondary">
            <p>{content.body.slice(0,150)}</p>
            </Typography>
            <Typography>
              Author: {content.author}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Like</Button>
            <Button size="small">Read</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default BlogCard;
