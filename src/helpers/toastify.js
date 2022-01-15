import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../contexts/AuthContext';

function Toastify(){
  const { currentUser } = useContext(AuthContext);
  const { toastMessage } = useContext(AuthContext);
 
  if(currentUser){
    toast(toastMessage)
    
  }
  


  const notify = () => toast("Wow so easy !");

  return (
    <div>
       {/* <button onClick={notify}>Notify !</button>  */}
      <ToastContainer />
    </div>
  );

  }
export default Toastify