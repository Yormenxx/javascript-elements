import mongoose from "mongoose";


export const dbConnection = async ()=>{

    const URI = 'mongodb://127.0.0.1:27017/restapibasic1';

    try{
        
        await mongoose.connect(URI);
        console.log("MongoDb has been connected");

    }catch(error){

        console.log("Something went wrong on database", error.message);
        process.exit(1);

    }

}

dbConnection();
