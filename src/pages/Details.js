import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Input,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { deleteContent } from "../helpers/firebaseConnect";
import DeleteIcon from "@mui/icons-material/Delete";

const Details = () => {
  const { currentUser } = useContext(AuthContext);
  const { contentId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  //console.log(location.state.content.id);
  const content = location.state.content;
  const [none, setNone] = useState();

  const navigateLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    // if (!currentUser) {
    //   navigateLogin();
    // }else if(currentUser && currentUser.displayName !== content.author){
    //   setNone('none');
    // }

  });


  return (
    <div>
      {currentUser ? (
        <Box sx={{ m: 2, p: 2, display: "flex", justifyContent: "center" }}>
          <Card sx={{ maxWidth: 500, boxShadow: 5 }}>
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
                <Input disabled defaultValue={content.author}/>
                <Typography variant="body2" color="text.secondary">
                  {content.body}
                </Typography>
                
              </CardContent>

              <CardContent sx={{ display: `${none}` }}>
                <Button
                  variant="contained"
                  size="medium"
                  color="success"
                  onClick={() =>
                    navigate(`/edit/${contentId}`, { state: { content } })
                  }
                >
                  EDIT
                </Button>
                <Button
                  variant="contained"
                  size="medium"
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={() => {
                    deleteContent(contentId);
                    navigate("/");
                  }}
                >
                  DELETE
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      ) : (
        navigateLogin()
      )}
    </div>
  );
};

export default Details;
