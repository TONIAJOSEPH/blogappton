const mongoose=require("mongoose")

//  mongoose.connect("mongodb://localhost:27017/articleblog");

const Schema=mongoose.Schema;

 const articleschema=new Schema({
    name:String,
    username:String,
    upvotes:Number,
    comments:Array
 });

 const articleinfo=mongoose.model("articles",articleschema);
 module.exports=articleinfo;