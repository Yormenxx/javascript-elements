const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:[true,"title is required"],
            trim:true,
        },
        description:{
            type:String,
            required:[true,"Description is required"],
            trim:true,
        },
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        }

    },
    {timestamps:true}
)


modoule.exports = mongoose.model("Post", postSchema);

