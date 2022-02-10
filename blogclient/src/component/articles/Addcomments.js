import React, { useState } from 'react'
import { TextField, Button } from '@mui/material';
import "./Articles.css";

const Addcomments = (props) => {
    const { id , setArticledata }=props;

    const[commentvalues,setCommentvalues]=useState({username:"",text:""})

     function handlechange(event){
         console.log(event.target);
         const {name,value}=event.target;
         setCommentvalues({...commentvalues,[name]: value})
     }



async function fetchcomment(){
    const username=commentvalues.username;
    const text=commentvalues.text;
    if(username && text){
    const response=await fetch(`/api/article/${id}/comments`,{
        method:"post",
        body:JSON.stringify({username,text}),
        headers:{
            "Content-Type":"application/json"
        }
    
    })
    const body=await response.json();
    setArticledata(body);
    setCommentvalues({username:"",text:""})
}
else{
    console.log("error");
}
}


    return (
        <div>
             <div className="comment">
            <h5 className="comtitle">comments*</h5>
            <TextField id="outlined-multiline-flexible" label="name" name="username" multiline value={commentvalues.username} onChange={handlechange}/><br/><br/>
            <TextField id="outlined-multiline-static" label="comment" name="text" multiline rows={4} value={commentvalues.text} onChange={handlechange}/><br/><br/>
            <Button variant="contained" onClick={fetchcomment}>Send </Button>
            </div>
           
        </div>
    )
}

export default Addcomments
