import { Box, Button, FormControl, Paper,  TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import logo from "../assets/logo.png";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import { firebase } from '../helpers/firebase';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
    const navigate = useNavigate();
    const[email,setEmail] = useState();
    const[pass,setPass] = useState();

    const handleSubmit = async()=> {
        

        try{
            await createUserWithEmailAndPassword(firebase,email,pass)

           await updateProfile(firebase.currentUser,{displayName: email})
            console.log(firebase.currentUser.displayName);
            toast("Kayıt Başarılı !")
            navigate("/")
        }catch(err){
            toast(`${err}`);
            
        }
    }

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
            fontSize:'30px',
            md: "none",
            cursor: "pointer",
            justifyContent: "center",
          }}
          fontFamily="cursive"
        >
          <p style={{ color: "#ff5b45" }}>||</p>
          <p style={{ color: "#a63dfc" }}>Register</p>
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
            REGISTER
          </Button>
        </FormControl>
        <Paper
          variant="outlined"
          sx={{ bgcolor: "#b39029", postion: "absolute", width: "5px" }}
        ></Paper>
      </Box>    

        </div>
    )
}

export default Register
