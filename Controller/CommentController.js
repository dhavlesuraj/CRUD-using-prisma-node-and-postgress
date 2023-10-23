
import prisma from "../DB/db.config.js";

//Create Comments

export const createComment = async (req, res) => {
    try {
        const { user_id, post_id, comment } = req.body;
        
        //* Increase the comment  count
        await prisma.post.update({
            where:{
                id:Number(post_id)
            },
            data:{
                comment_count:{
                    increment:1
                }
            }
        });
        const newComment = await prisma.comment.create({
          data: {
            user_id: Number(user_id),
            post_id: Number(post_id),
            comment
          },
        });
    return res.json({status:200, data:newComment, message:"new comment uplode successfully"});
    } catch (error) {
        console.log("Error= ",error);
    }

};

//* Fetch Singale Comment
export const fetchComment = async (req, res) => {
  try {
    const commentId = req.params.id;
    const singleComment = await prisma.comment.findFirst({
      where: {
        id: Number(commentId),
      },
    });
    res.json({ status: 200, data: singleComment });
  } catch (error) {
    console.log("Error=", error.message);
  }
};


//*Fetch All Comment
export const showComment = async (req, res) => {
  try {
    const allComment = await prisma.comment.findMany({}); //it is return all users in array

    res.json({ status: 200, data: allComment });
  } catch (error) {
    console.log("Error=", error.message);
  }
};

//* Update Comment
export const updateComment = async (req, res) => {
  try {
    const commentId = req.params.id; //return string
    const { comment} = req.body;

    await prisma.comment.update({
      where: {
        id: Number(commentId), //id converted to number
      },
      data: {
        comment
      },
    });
    res.json({ status: 200, message: "Comment updated successfully" });
  } catch (error) {
    console.log("Error=", error.message);
  }
};

//*Delete Post
export const deleteComment=async(req,res)=>{
try {
  const commentId = req.params.id;
  //* Dicrese the comment  count
  await prisma.post.update({
    where: {
      id: Number(post_id),
    },
    data: {
      comment_count: {
        increment: 1,
      },
    },
  });
  await prisma.comment.delete({
    where: {
      id: Number(commentId),
    },
  });
  return res.json({ status: 200, message: "Comment Deleted Successfully" });
}
    catch (error) {
        console.log("Error=", error.message);
    } 
}