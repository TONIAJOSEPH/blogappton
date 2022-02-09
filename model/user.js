const mongoose=require("mongoose")

//  mongoose.connect("mongodb://localhost:27017/articleblog")
 mongoose.connect("mongodb+srv://tonia:tonia@ictakfiles.5h8in.mongodb.net/blogDatabase?retryWrites=true&w=majority",{ useNewUrlParser: true , useUnifiedTopology: true});

const Schema=mongoose.Schema

const userschema=new Schema({
    uname:String,
    email:String,
    pass:String,
    cpass:String
})

const userdata=mongoose.model("users",userschema);

module.exports=userdata;