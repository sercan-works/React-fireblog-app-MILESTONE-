import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import {deleteContent} from '../helpers/firebaseConnect'

const Details = () => {
    const {contentId} = useParams();
    const location = useLocation();
    
    const navigate = useNavigate();
    //console.log(location.state.content.id);
    const content = location.state.content;
    
    return (
        <div>
             <h1>Overview</h1> {content.id}
            <img src={content.image} alt="detay resmi"/>
            <h1>{content.title}</h1>
            <p>{content.body}</p>
            <button onClick={()=>navigate(`/edit/${contentId}`,{state:{content}})}>Edit</button>
            <button
            onClick={()=>deleteContent(contentId)}
            >Delete</button>
        </div>
    )
}

export default Details
