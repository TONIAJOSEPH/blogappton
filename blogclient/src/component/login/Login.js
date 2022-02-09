import React ,{ useState ,useEffect } from 'react'
import { TextField , Button} from '@mui/material';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import loginvalidation from "./loginvalidation"

const Login = (props) => {
    let navigate=useNavigate();

    const {name}=props;

    const [loginvalue,setLoginvalue]=useState({email:"",pass:""});
    const [issubmit,setIssubmit]=useState(false);
    const[errorvalues,setErrorvalues]=useState({});
    const[registers,setRegisters]=useState([]);


    function handlechange(event){
         const {name,value}=event.target;
         setLoginvalue({...loginvalue,[name]:value});
    }


    const handlesubmitlogin = (event)=>{
        event.preventDefault();
        setErrorvalues(loginvalidation(loginvalue));
        // alert("hello");
        fetchregisters();
        //  setIssubmit(false);
        
        }

       


//     async function fetchlogin(){
//         const email= loginvalue.email;
//         const pass= loginvalue.pass;
//  if(email && pass){
//         const response=await fetch("http://localhost:5001/api/login",{
//           method: "post",
//           body: JSON.stringify({email,pass}),
//           headers: {
//               "Content-Type":"application/json"
//           }
//         })
//         const body=await response.json();
//         console.log(body);
//         }
//         else{
//             console.log("error occured");
//         }
  
//   }
async function fetchregisters(){
const response=await fetch("/api/registers");
const body=await response.json();
console.log(body);
setRegisters(body);
console.log(registers);

registers.map((i,key)=>{

if((i.email == loginvalue.email) && (i.pass == loginvalue.pass)){
    setIssubmit(true);

}


})
}





    return (
        <div>
              
            <h3 className="userlogin">Login</h3> 

           {Object.keys(errorvalues).length===0 && issubmit ? navigate("/articlelist"): <p></p>}
           {/* {!issubmit ? <p>invalid</p>:<p></p>} */}
      <div className="login">
      <form onSubmit={handlesubmitlogin}>

            <TextField id="outlined-basic" label="email" variant="outlined" size="small" name="email" value={loginvalue.email} onChange={handlechange} /><br/><br/>
            <p>{errorvalues.email}</p>
            <TextField id="outlined-password-input" label="Password"type="password" size="small" name="pass" value={loginvalue.pass} onChange={handlechange}/><br/><br/>
            <p>{errorvalues.pass}</p>
            <Button variant="contained"  type="submit">login</Button>
          
     </form> 
        </div>
        </div>
       
    )
}

export default Login
