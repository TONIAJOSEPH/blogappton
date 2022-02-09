const mongoose=require("mongoose");


// mongoose.connect("mongodb://localhost:27017/articleblog");

const Schema=mongoose.Schema;
var blogschema=new Schema(
    {
        // name:String,
        title:String,
        des:String,
        upvotes:Number,
        comments:[
            {
                username:String,
                text:String
            }
        ]
       
   });


var bloginfo=mongoose.model("blogs",blogschema);
module.exports=bloginfo;