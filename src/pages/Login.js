import {
  Box,
  Button,
  FormControl,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { firebase } from "../helpers/firebase";
import logo from "../assets/logo.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toastify, { toastMessage } from "../helpers/toastify";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [msg,setMsg] = useState("Başarılı");
  const provider = new GoogleAuthProvider();

  const handleSubmitGoogle = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        // ...
        const auth = getAuth();
        signInWithRedirect(auth, provider);
        navigate("/");
        
      
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const handleSubmit = async () => {
    try {
      let user = await signInWithEmailAndPassword(firebase, email, pass);
      console.log(user);
      navigate("/");
    } catch (err) {
      toast("Username or Password invalid!");
    }
  };
  return (
    <div align="center">
      <ToastContainer />
      <Box sx={{ m: 2, display: "inline-block", justifyContent: "center" }}>
        <img src={logo} alt="" width="250px" />
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            flexGrow: 1,
            display: "flex",
            fontSize: "30px",
            md: "none",
            cursor: "pointer",
            justifyContent: "center",
          }}
          fontFamily="cursive"
        >
          <p style={{ color: "#ff5b45" }}>||</p>
          <p style={{ color: "#a63dfc" }}>Login</p>
          <p style={{ color: "#3dfc9d" }}>Page</p>
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Paper
          variant="outlined"
          sx={{ bgcolor: "#ba7d99", postion: "absolute", width: "5px" }}
        ></Paper>
        <FormControl sx={{ boxShadow: 5 }}>
          <TextField
            id="outlined-basic"
            name="email"
            label="Email"
            variant="outlined"
            sx={{ m: 1 }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            type="password"
            name="password"
            label="Password"
            variant="outlined"
            sx={{ m: 1 }}
            onChange={(e) => setPass(e.target.value)}
          />

          <Button variant="contained" sx={{ m: 1 }} onClick={handleSubmit}>
            LOGIN
          </Button>
          <Button
            variant="contained"
            sx={{ m: 1 }}
            onClick={handleSubmitGoogle}
          >
            GOOGLE LOGIN
          </Button>
        </FormControl>

        <Paper
          variant="outlined"
          sx={{ bgcolor: "#b39029", postion: "absolute", width: "5px" }}
        ></Paper>
      </Box>
    </div>
  );
};

export default Login;
