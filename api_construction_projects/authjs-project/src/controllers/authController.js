const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const { signupSchema, loginSchema } = require("../middlewares/validator");
const { doHash, doHashValidation } = require("../utils/hashing");


exports.signup = async (req, res) => {

    const { email, password } = req.body;

    try {
        const { error, value } = await signupSchema.validate({ email, password });
        if (error) {
            return res.status(400).json({ message: error.details[0].message, success: false });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "Email already in use", success: false });
        }

        const hashedPassword = await doHash(password, 12);

        const newUser = new User({
            email,
            password: hashedPassword
        });

        const result = await newUser.save();
        result.password = undefined;

        return res.status(201).json({ message: "User registered successfully", success: true, data: result });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    }
}



exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const { error, value } = await loginSchema.validate({ email, password });

        if (error) {
            return res.status(400).json({ message: error.details[0].message, success: false });
        }

        const existingUser = await User.findOne({email}).select("+password");

        if(!existingUser){
            return res.status(400).json({message:"User does not exists", success:false});
        }

        const isPasswordValid= await doHashValidation(password,existingUser.password);

        if(!isPasswordValid){
            return res.status(401).json({message:"Invalid credentials", success:false});
        }

        const token = jwt.sign(
            {
                userId:existingUser._id,
                email:existingUser.email,
                verified:existingUser.verified
            },
            process.env.JWT_SECRET,
            {
                expiresIn:"7h"
            }
        );

        res
        .cookie("Authorization","Bearer "+token,{
            	expires: new Date(Date.now() + 8 * 3600000),
				httpOnly: process.env.NODE_ENV === 'production',
				secure: process.env.NODE_ENV === 'production',
        })
        .json({
            success:true,
            message:"Login successful",
            token
        })

    }catch(error){
        return res.status(500).json({message:"Internal Server Error", success:false});
    }

}


exports.signout = async (req, res) => {
	res
		.clearCookie('Authorization')
		.status(200)
		.json({ success: true, message: 'logged out successfully' });
};
