const mongoose = require("mongoose");


const connectionDb = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Connection stablished on ${process.env.MONGODB_URI}`);
    }catch(error){
        console.error(`Error trying to connect... ${error.message}`);
        process.exit(1);    
    }
}

module.exports=connectionDb;