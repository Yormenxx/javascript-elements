import mongoose from "mongoose";

const MONGO_URL = 'mongodb+srv://juma:juma@cluster0.fkcua4v.mongodb.net/?appName=Cluster0';

const connectDb = async ()=>{
    try{
        await mongoose.connect(MONGO_URL);
        console.log("Connected to db");

    }catch(err){
        console.log("Imposible to connect",err);
        process.exit(1);
    }
}

export default connectDb;