function validation(formvalues){
    const errors={};
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!formvalues.uname){
        errors.uname="username required";
    }
    if(!formvalues.email){
        errors.email="email required";
    }
       else if(!regex.test(formvalues.email)){
        errors.email=" invalid email";
      }
   if(!formvalues.pass){
        errors.pass="password required";
    }
      else if(formvalues.pass.length<5){
        errors.pass="password is too short";
      }
 if(!formvalues.cpass){
    errors.cpass=" confirm password required";
    }
      else if(formvalues.cpass!=formvalues.pass){
        errors.cpass="enter the same password";
      }
     
      return errors;

}
export default validation