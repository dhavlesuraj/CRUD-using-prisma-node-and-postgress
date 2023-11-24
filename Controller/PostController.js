import prisma from "../DB/db.config.js";
import getTimeStamp from "../timeStamp.js";

//* Create Post
export const createPost = async (req, res) => {
  try {
    const userId = req.user.id;
    const { title, description } = req.body; //destructuring
    const newPost = await prisma.post.create({
      data: {
        user_id: userId,
        title,
        description,
        created_at: getTimeStamp(new Date()),
      },
    });
    
    return res.json({ status: 200, data: newPost,message:"New Post Created" });
  } catch (error) {
    console.log("Error=", error.message);
  }
};

//* Fetch Singale Post
export const fetchPost = async (req, res) => {
  try {
    const postId = req.params.id;
    const singlePost = await prisma.post.findFirst({
      where: {
        id: Number(postId),
      },
    });
    res.json({ status: 200, data: singlePost });
  } catch (error) {
    console.log("Error=", error.message);
  }
};

//*Fetch All Post
export const showPost = async (req, res) => {
  try {
    const allPost = await prisma.post.findMany({
      include:{
        comment:true
      }
    }); //it is return all users in array

    res.json({ status: 200, data: allPost });
  } catch (error) {
    console.log("Error=", error.message);
  }
};

//* Update Post
export const updatePost = async (req, res) => {
  try {
    const postId = req.params.id; //return string
    const { title,description } = req.body;

    await prisma.post.update({
      where: {
        id: Number(postId), //id converted to number
      },
      data: {
        title,
        description,
      },
    });
    res.json({ status: 200, message: "Post updated successfully" });
  } catch (error) {
    console.log("Error=", error.message);
  }
};

//*Delete Post
export const deletePost=async(req,res)=>{
try {
    const postId=req.params.id;
    await prisma.post.delete({
        where:{
            id:Number(postId),
        }
    });
    return res.json({status:200,message:"Post Deleted Successfully"});
    }
    catch (error) {
        console.log("Error=", error.message);
    } 
}
