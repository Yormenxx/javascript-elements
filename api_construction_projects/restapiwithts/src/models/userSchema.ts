import mongoose,{Document,Schema} from "mongoose";

export interface IUser extends Document{
    name:string;
    email:string;
    authentication:{
        password?:string;
        sessionToken?:string;
    }
}


const UserSchema:Schema = new mongoose.Schema({

    name:{type:String,required:true},
    email:{type:String, required:true},
    authentication:{
        password:{type:String, required:true, select:false},
        salt:{type:String,select:false},
        sessionToken:{type:String,select:false}
    }


})


export default mongoose.model<IUser>("User",UserSchema);





