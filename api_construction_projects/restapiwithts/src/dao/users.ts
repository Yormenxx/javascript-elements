import User,{IUser} from "../models/userSchema";
import { AnyObject } from "mongoose";

type UserData = Partial<Omit<IUser, 'authentication'>> & {
  authentication?: Partial<IUser['authentication']>;
};


export const getUsers = () => User.find();

export const getUserByEmail = (email:string) => User.findOne({email});

export const getUserByToken = (sessionToken:string) => User.findOne({'authentication.sessionToken':sessionToken});

export const getUserById = (id:string) => User.findById(id);

export const createUser = (userData:UserData)=>{
    const newUser = new User(userData as AnyObject);
    return newUser.save().then((user)=> user.toObject());
};

export const updateUser = (id:string, values:UserData) => User.findByIdAndUpdate(id,{$set:values},{new:true});

export const deleteUser = (id:string) => User.findByIdAndDelete({_id:id});


