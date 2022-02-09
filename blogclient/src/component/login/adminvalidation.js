function adminvalidation(loginvalue){
    const errors={};
    if(!loginvalue.email){
        errors.email="email required";
    }
    else if(loginvalue.email !== "admin"){
        errors.email="admin invalid";
    }
   if(!loginvalue.pass){
        errors.pass="password required";
    }
    else if(loginvalue.pass !== "admin123"){
        errors.pass="password invalid";
    }
     
      return errors;

}
export default adminvalidation