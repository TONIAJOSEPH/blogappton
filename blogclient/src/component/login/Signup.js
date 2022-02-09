import React, { useState, useEffect } from 'react'
import { TextField , Button} from '@mui/material';
import './Login.css'
import Home from '../home/Home';
import Homeheader from '../homeheader/Homeheader';
import validation from './validation';
import { useNavigate } from 'react-router';
import Login from './Login';

const Signup = (props) => {

     let navigate=useNavigate();
    const {name}=props; 

          
const[formvalues,setFormvalues]=useState({uname:"",email:"",pass:"",cpass:""});
const[errorvalues,setErrorvalues]=useState({});
const[isSubmit,setIsSubmit]=useState(false);

const handlechange=(event)=>{
const {name,value}=event.target;
setFormvalues({...formvalues,[name]:value})
}


const handlesubmit=(event)=>{
event.preventDefault();
setErrorvalues(validation(formvalues));
setIsSubmit(true);

 }
 
 useEffect(() => {
     if(Object.keys(errorvalues).length===0 && isSubmit){
         alert("signup successfully");
     }
    
 },[errorvalues]);

 //fetching register to server
 async function fetchregister(){
    const uname= formvalues.uname;
    const em= formvalues.email;
    const pwd= formvalues.pass;
    const cpwd= formvalues.cpass;
    if(uname && em && pwd && cpwd){
    const response=await fetch("http://localhost:5001/api/register",{
      method: "post",
      body: JSON.stringify({uname,em,pwd,cpwd}),
      headers: {
          "Content-Type":"application/json"
      }})
  const body=await response.json();
  console.log(body);
}

else{
    console.log("error occured")
}

 }

    return (
        <div>
            <Homeheader/>
            {Object.keys(errorvalues).length===0 && isSubmit ? navigate("/"): <p>error</p>}
        <h4 className="regtitle">Register</h4>
       
        <div className="register">
        <form onSubmit={handlesubmit}>
            <TextField id="outlined-basic" label="username" variant="outlined" size="small" name="uname" value={formvalues.uname} onChange={handlechange} /><br/><br/>
            <p>{errorvalues.uname}</p>
            <TextField  label="email" variant="outlined" size="small" name="email" value={formvalues.email} onChange={handlechange}/><br/><br/>
            <p>{errorvalues.email}</p>
            <TextField id="outlined-password-input" label="Password"type="password" size="small" name="pass" value={formvalues.pass} onChange={handlechange}/><br/><br/>
            <p>{errorvalues.pass}</p>
            <TextField  label="confirm Password"type="password" size="small" name="cpass" value={formvalues.cpass} onChange={handlechange}/><br/><br/>
            <p>{errorvalues.cpass}</p>
            <Button variant="contained" type="submit" onClick={fetchregister}> signup</Button>
        </form>
        </div>
        </div>
    )
}

export default Signup
