import React, { useContext, useEffect, useState } from "react";
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
import {
  Box,
  Collapse,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { AuthContext } from "../contexts/AuthContext";
import { AccountCircle } from "@mui/icons-material";

const BlogCard = () => {
  const { contentList } = useFetch();
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <Box sx={{ flexGrow: 1, m: 2, boxShadow: 6 }}>
        <Grid
          container
          spacing={2}
          sx={{ alignContent: "space-between", flexGrow: 1, m: 3 }}
        >
          {contentList?.map((content) => (
            <Card sx={{ maxWidth: 300, m: 1, boxShadow: 6 }} key={content.id}>
              <CardMedia
                component="img"
                height="140"
                image={content.image}
                alt={content.image?.slice(4, 15)}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  backgroundColor=""
                >
                  {content.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <p>{content.body?.slice(0, 150)}</p>
                </Typography>
                <Typography>
                  <TextField
                  disabled
                    id="input-with-icon-textfield"
                    label=""
                    value={content.author}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle sx={{color:'orange'}}/>
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  />
                </Typography>
              </CardContent>
              <CardActions>
                {/* <Button size="small">Like</Button> */}
                <Button
                  size="small"
                  onClick={() =>
                    navigate(`/detail/${content.id}`, { state: { content } })
                  }
                >
                  read MORE
                </Button>
              </CardActions>
            </Card>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default BlogCard;
