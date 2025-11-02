import User from "../model/User.js";
import bcrypt from "bcryptjs";

export const getAllUsers = async (req, res) => {

    let users;

    try {

        users = await User.find();

    } catch (error) {
        console.log(error)
    }
    if (!users) {
        return res.status(404).json({ message: "No users found" });
    }
    return res.status(200).json({ users });
}


export const signUp = async (req, res) => {

    const { name, email, password } = req.body;

    let existingUser;

    try {

        existingUser = await User.findOne({ email });
    } catch (error) {
        return console.log("Somethin went user", error);
    }
    if (existingUser) {
        return res.status(400).json({ message: "User already exists. Login instead" });
    }
    const hashedPassword = bcrypt.hashSync(password);

    const user = new User({
        name,
        email,
        password:hashedPassword,
        blogs:[]
    })



    try {
        await user.save();
    } catch (error) {
        return console.log(error)
    }

    return res.status(201).json({ user });

}

export const login = async(req,res)=>{

    const {email,password} = req.body;

    let existingUser;

    try{
        existingUser = await User.findOne({email});
    }catch(error){
        return console.log("something went worng",error);
    }

    if(!existingUser){

        return res.status(404).json({message:"Could not find that user"});
    }

    const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password);
    if(!isPasswordCorrect){
        return res.status(400).json({message:"Incorrect password"});
    }else{
        return res.status(200).json({message:"Login succesful",user:existingUser})
    }

}
















