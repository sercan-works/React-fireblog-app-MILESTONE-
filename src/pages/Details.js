import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useFetch } from '../helpers/firebaseConnect';

const Details = () => {
    const {contentId} = useParams();
    const location = useLocation();
    
    const navigate = useNavigate();
    //console.log(location.state.content.id);
    const content = location.state.content;
    
    return (
        <div>
             <h1>Overview</h1> {contentId}
            <img src={content.image} alt="detay resmi"/>
            <h1>{content.title}</h1>
            <p>{content.body}</p>
            <button onClick={()=>navigate(`/edit/${content.id}`,{state:{content}})}>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default Details
