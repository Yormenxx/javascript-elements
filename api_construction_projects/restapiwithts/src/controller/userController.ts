
import {Request, Response, NextFunction} from "express";
import * as dao from "../dao/users";
import bcrypt from "bcryptjs";

// interface AuthenticatedRequest extends Request{
//     user:{
//         email:string;
//         id:string;
//     }
// }

interface createUser {
    name:string;
    email:string;
    password?:string;

}


const SALT_ROUNDS = 10;


export const createUser = async(req:Request, res:Response, next:NextFunction)=>{
    try{
        const {name,email,password}=req.body;

        if(!name || !email || !password){
            return res.status(400).json({message:"Name, email and password are required"});
        }

        const existingUser = await dao.getUserByEmail(email);

        if(existingUser){
            return res.status(409).json({message:"User already exists"});
        }

        const hashedPassword = await bcrypt.hash(password,SALT_ROUNDS);
        const newUser = await dao.createUser({name,email,authentication:{password:hashedPassword}});

        const userResponse = newUser.toObject();
        delete userResponse.authentication.password;

        return res.status(201).json({ 
            message: 'User created successfully',
        });

    }catch(error){
        console.error('Error creating user', error);
        return res.status(500).json({ message: 'Error on server', error });
    }
}


export const updateUser = async(req:Request , res:Response, next:NextFunction)=>{
    try{
        const userId = req.params.id;
        const updates = req.body;

        if(Object.keys(updates).length===0){
            return res.status(400).json({message:"No updates provided"});
        }

        const updateUser = await dao.updateUser(userId,updates)

        if(!updateUser){
            return res.status(404).json({message:"User not found"});
        }

        return res.status(200).json({message:"User updated successfully", user:updateUser});
    }catch(error){
        console.error('Error updating user', error);
        return res.status(500).json({ message: 'Error on server', error });
    }
}


export const deleteUer= async(req:Request , res:Response , next:NextFunction)=>{
    try{
        const {id}=req.params;
        const deletedUser = await dao.deleteUser(id);
        if(!deletedUser){
            return res.status(404).json({message:"User not found"});
        }

        return res.status(200).json({message:"User deleted successfully"});

    }catch(error){
        console.log("Something went wrong deleting user");
        return res.status(500).json({message:"Error on server", error});
    }
}

export const getAllUsers = async(req:Request , res:Response, next:NextFunction)=>{
    try{
        const users = await dao.getUsers();
        
        if(!users || users.length ===0){
            return res.status(404).json({message:"Not users found"});

        }

        return res.status(200).json({users});

    }catch(error){
        return res.status(500).json({message:"Error getting users on server", error});
    }
}


export const getUserByEmail=async(req:Request, res:Response, next:NextFunction)=>{
    try{
        const userEmail = (req as any).user.email;
        const user = await dao.getUserByEmail(userEmail);
        
        if(!user){
            return res.status(404).json({message:"User was not found"});
        }

        return res.status(200).json({user});
    }catch(error){
        return res.status(500).json({message:"Error getting user by email on server",error})
    }
}


export const getUserById=async(req:Request, res:Response, next:NextFunction)=>{
    try{
        const userId = req.params.id;
        const user = await dao.getUserById(userId);

        if(!user){
            res.status(404).json({message:"user was not found"});
        }
        return res.status(200).json({success:true,user})
    }catch(error){
        return res.status(500).json({message:"Error getting user by id on server", error});
    }

}








