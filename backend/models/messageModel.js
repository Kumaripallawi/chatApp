const mongoose=require("mongoose");

const messageModel= mongoose.Schema(
    {
        sender:{type:mongoose.Schema.Type.ObjectId,ref:"user"},
        content:{type:string,trim:true},
        chat:{type:mongoose.Schema.Types.ObjectId,ref:"Chat"},
    },
    {
        timestamps:true,
    }
);

const Message=mongoose.model("Message",messageModel);

module.exports=Message;
