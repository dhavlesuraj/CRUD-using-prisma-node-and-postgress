
import prisma from "../DB/db.config.js";

export const loginuser=async(req,res)=>{
  const {email,password}=req.body;
 
  try {
    const findUser = await prisma.user.findUnique({
      where: {
        email: email,
        password:password
      }
    });
     if (!findUser) {
       return res.json({status: 400,message: "EmailId and Password is incorrect"});
    }else  return res.json({status:200,message:"User Login Succsessfully"});

  } catch (error) {
    console.log("Login Message=",error);
  }
}