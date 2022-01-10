import firebase from './firebase'
import {child, getDatabase, onValue, push, query, ref, set, update} from 'firebase/database'
import { useEffect, useState } from 'react';

export const addContent=(content)=>{
    const db = getDatabase();
    const contentRef = ref(db,"content")
    const newContentRef = push(contentRef)
    set(newContentRef,{
        title:content.title,
        image:content.image,
        body:content.body,
        author:"",
        like:null,
    })
        console.log("veri eklendi");
}

export const useFetch = () => {
    //const [isLoading, setIsLoading] = useState();
    const [contentList,setContentList] = useState();
    useEffect(() => {
      //setIsLoading(true)
      const db = getDatabase();
      const contentRef = ref(db,"content")
      
      onValue(query(contentRef),snapshot=>{

        const contents = snapshot.val()

        const contentArray=[];
        for(let id in contents){
            contentArray.push({id,...contents[id]})
        }
        setContentList(contentArray)
      })
    }, [])
    return {contentList}
}

export const deleteContent = (id) => {
    
}

export const updateContent = (content) =>{
  const db = getDatabase();
  const newContentKey = push(child(ref(db),"edit/")).key

  const updates={};
  updates["edit/" + newContentKey] = content;
  return update(ref(db),updates)
 
}