import { Box, Button, FormControl, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {firebase} from '../helpers/firebase'
const Login = () => {
    const navigate = useNavigate();
    const[email,setEmail] = useState();
    const[pass,setPass] = useState();


    const handleSubmit = async()=> {
        try{
            let user = await signInWithEmailAndPassword(firebase,email,pass)
            console.log(user);
            navigate("/")
        }catch(err){
            alert(err.message)
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
            sx={{m:1}} 
            onChange={(e)=>setEmail(e.target.value)}
            
             />
            <TextField 
            id="outlined-basic" 
            name="password"
            label="Password" 
            variant="outlined"
            sx={{m:1}} 
            onChange={(e)=>setPass(e.target.value)}
             />
          
            <Button 
            variant="contained"
            sx={{m:1}} 
             onClick={handleSubmit}
             >LOGIN</Button>
        </FormControl>
        </Box>  
        </div>
    )
}

export default Login
