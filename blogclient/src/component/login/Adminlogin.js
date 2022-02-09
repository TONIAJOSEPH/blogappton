import React ,{ useState ,useEffect } from 'react'
import { TextField , Button} from '@mui/material';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import adminvalidation from "./adminvalidation"
import Homeheader from '../homeheader/Homeheader';

const Login = (props) => {
    let navigate=useNavigate();

    const {name}=props;

    const [loginvalue,setLoginvalue]=useState({email:"",pass:""});
    const [issubmit,setIssubmit]=useState(false);
    const[errorvalues,setErrorvalues]=useState({});
   


    function handlechange(event){
         const {name,value}=event.target;
         setLoginvalue({...loginvalue,[name]:value});
    }


    const handlesubmitlogin = (event)=>{
        event.preventDefault();
        setErrorvalues(adminvalidation(loginvalue));
      setIssubmit(true);
        
        }


    return (
        <div>
            <Homeheader/>
              {Object.keys(errorvalues).length===0 && issubmit ? navigate("/adminhome"): <p></p>}
            <h3 className="admintitle">admin Login</h3> 
           
      <div className="adminlogin">
      <form onSubmit={handlesubmitlogin}>

            <TextField id="outlined-basic" label="admin" variant="outlined" size="small" name="email" value={loginvalue.email} onChange={handlechange} /><br/><br/>
            <p>{errorvalues.email}</p>
            <TextField id="outlined-password-input" label="admin123"type="password" size="small" name="pass" value={loginvalue.pass} onChange={handlechange}/><br/><br/>
            <p>{errorvalues.pass}</p>
            <Button variant="contained"  type="submit">login</Button>
          
     </form> 
        </div>
        </div>
       
    )
}

export default Login
