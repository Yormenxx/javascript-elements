import Blog from "../model/Blog.js";
import User from "../model/User.js";

export const getAllBlogs = async (req, res, next) => {

    let blogs;

    try {
        blogs = await Blog.find();

    } catch (error) {

        return console.log("A error happened", error)
    }

    if (!blogs) {
        return res.status(404).json({ message: "No blogs found" })
    }

    return res.status(200).json({ blogs })
}

export const addBlog = async (req, res, next) => {

    const { title, description, image, user } = req.body;
    let existingUser;
    try{
        existingUser= await User.findById(user);
    }catch(error){
        return console.log("Something went wrong", error)
    }
    if(!existingUser){
        return res.status(400).json({message:"Unable to find user by this id"})
    }


    const blog = new Blog({
        title,
        description,
        image,
        user
    })

    try {
        const session = await Blog.startSession();
        session.startTransaction();
        await blog.save();
        existingUser.blogs.pull(blog)
        await existingUser.save({ session });
        await session.commitTransaction();

    } catch (error) {
        return console.log("Something went wrong", error)
    }

    return res.status(200).json({ blog })

}


export const updateBlog = async (req, res, next) => {

    const { title, description } = req.params;
    const idbBlog = req.params.id;

    let blog;

    try {
        blog = await Blog.findByIdAndUpdate(idbBlog, {
            title,
            description
        })
    } catch (error) {
        return console.log("Something went wrong", error)
    }
    if (!blog) {
        return res.status(500).json({ message: "Unable to update the blog" })
    }

    return res.status(200).json({ blog })
}


export const getById = async (req, res, next) => {
    const idBlog = req.params.id;
    let blog;
    try {
        blog = Blog.findById(idBlog);
    } catch (error) {
        return console.log("Something went wrong", error)
    }
    if (!blog) {
        return res.status(500).json({ message: "Unable to find the blog" })
    }
    return res.status(200).json({blog})

}


export const deleteBlog = async(req,res,next)=>{
    const idBlog = req.params.id;
    let blog;

    try{
        blog = await Blog.findByIdAndDelete(idBlog);
    }catch(error){
        return console.log("Something wrong happen when the files was deleting itself",error);

    }
    if(!blog){
        return res.status(500).json({message:"Unable to delete the blog"});

    }

    return res.status(200).json({message:"Blog succesfully deleted"});

}


export const getByUserId = async(req,res,next)=>{
    const userId = req.params.id;

    let userBlogs;

    try{
        userBlogs = await Blog.findById(userId).populate("blog")
    }catch(error){
        return console.log("Something went wrong",error)
    }
    if(!userBlogs){
        return res.status(404).json({message:"No blogs found"})
    }

    return res.status(200).json({userBlogs})
}















