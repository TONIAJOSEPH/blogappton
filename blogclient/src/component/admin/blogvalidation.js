
function blogvalidation(blog){
    const errors={};
  

   
    if(!blog.title){
       errors.title="title required";
   }

  else if(!blog.des){
      errors.des="add something";
   }

   return errors;

}
export default blogvalidation