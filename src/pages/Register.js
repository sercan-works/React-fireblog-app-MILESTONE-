import { Box, Button, FormControl, TextareaAutosize, TextField } from '@mui/material'
import React, { useState } from 'react'

import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import { firebase } from '../helpers/firebase';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate = useNavigate();
    const[email,setEmail] = useState();
    const[pass,setPass] = useState();

    const handleSubmit = async()=> {
        

        try{
            let user = await createUserWithEmailAndPassword(firebase,email,pass)

           await updateProfile(firebase.currentUser,{displayName: email})
            console.log(firebase.currentUser.displayName);
            navigate("/")
        }catch(err){
            console.log(err.message);
        }
    }

    return (
        <div>
            <Box sx={{m:2,p:2, display: 'flex',justifyContent: 'center'}}>
        <FormControl sx={{boxShadow:5,}}>
            <TextField
            id="outlined-basic" 
            name="email"
            label="Email" 
            variant="outlined" 
            onChange={(e)=>setEmail(e.target.value)}
            
             />
            <TextField 
            id="outlined-basic" 
            name="password"
            label="Password" 
            variant="outlined"
            onChange={(e)=>setPass(e.target.value)}
             />
          
            <Button 
            variant="contained"
             onClick={handleSubmit}
             >REGISTER</Button>
        </FormControl>
        </Box>  
        </div>
    )
}

export default Register
