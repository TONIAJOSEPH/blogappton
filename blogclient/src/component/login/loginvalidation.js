function loginvalidation(loginvalue){
    const errors={};
    if(!loginvalue.email){
        errors.email="email required";
    }
   if(!loginvalue.pass){
        errors.pass="password required";
    }
     
      return errors;

}
export default loginvalidation