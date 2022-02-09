import React, { useState, useEffect } from 'react'
import { TextField, Button } from '@mui/material';
import Adminheader from './Adminheader';
import { useNavigate, useParams } from 'react-router';

const Editform = (props) => {

     let navigate=useNavigate();
    const {_id} =useParams();

     const [contentedit,setContentedit]=useState([]);
     const [isSubmit,setIsSubmit]=useState(false);



    //fetch update api from server
async function fetchupdate(){
    const title= contentedit.title;
      const des= contentedit.des;
    const response= await fetch(`/api/article/${_id}/blogedit`,{
        method:"post",
        body: JSON.stringify({title,des}),
        headers: {
            "Content-Type":"application/json"
        }
    
    
    })
    console.log(response);
        const body= await response.json();
        // console.log(body);
        setContentedit(body);
          }

    const handlechange=(event)=>{
        // console.log(event.target);
        const {name,value}=event.target;
        setContentedit({...contentedit,[name]:value});
        // console.log(title);
    }


    function handleupdate(event){
        event.preventDefault();
        // setEditerror(editvalidation(contentedit));
         setIsSubmit(true);
    }


   // prefill datas 
    async function fetchdedit(){
        //   const response=await fetch(`/api/article/${_id}/blogedit`)
        const response=await fetch(`/api/article/${_id}`)
            const body= await response.json();
             console.log(body);
            setContentedit(body);
              }


 useEffect(()=>{
 fetchdedit();
            
  },[])



    return (
        <div>
            <Adminheader/>

              { isSubmit ? navigate(`/admin/article/${_id}`) : <p>error occured</p>}

             <form onSubmit={handleupdate}>
            <div className="comment">
            <TextField id="outlined-multiline-flexible" label="title" focused name="title" value={contentedit.title} multiline fullWidth onChange={handlechange}/><br/><br/>
            {/* <p>{blogerrorvalues.title}</p> */}
            <TextField id="outlined-multiline-static" label="description" focused name="des" value={contentedit.des} multiline rows={6} fullWidth onChange={handlechange}  /><br/><br/>
            {/* <p>{blogerrorvalues.des}</p> */}
            <Button variant="contained" fullWidth type="submit" onClick={fetchupdate}  >edit Blog </Button>
            </div>
            </form>
        </div>
    )
}

export default Editform
