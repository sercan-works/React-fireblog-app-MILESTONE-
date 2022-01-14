import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useFetch } from "../helpers/firebaseConnect";
import { experimentalStyled as styled } from "@mui/material/styles";
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
  ImageList,
  ImageListItem,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { AuthContext } from "../contexts/AuthContext";
import { AccountCircle } from "@mui/icons-material";

const BlogCard = () => {
  const { contentList } = useFetch();
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const [bgcolor, setBgcolor] = useState("rgba(0,100,255,0.1)");

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  }));

  // useEffect(() => {

  //   if(currentUser.displayName !== content.author){
  //     setBgcolor('rgba(0,255,0,0.3)');
  //   }

  // });
  // console.log(contentList);

  return (
    <div>
     <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
                {contentList?.map((content) => (
                  <Grid item xs={12} sm={4} md={3}>
                  <Card
                    sx={{
                      maxWidth: 300,
                      height:400,
                      m: 1,
                      boxShadow: 6,
                      bgcolor: `${bgcolor}`,
                    }}
                    key={content.id}
                  >
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
                                <AccountCircle sx={{ color: "orange" }} />
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
                          navigate(`/detail/${content.id}`, {
                            state: { content },
                          })
                        }
                      >
                        read MORE
                      </Button>
                    </CardActions>
                  </Card>
                  </Grid>
                ))}
          
          </Grid>
    </div>
  );
};

export default BlogCard;
