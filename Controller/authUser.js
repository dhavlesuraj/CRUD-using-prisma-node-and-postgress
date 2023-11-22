import prisma from "../DB/db.config.js";
import logResponseTime from "./Log.js";


export const authUserDate = async (req,res) => {
  try {
    const user =
      await prisma.$queryRaw`SELECT public.user.id,public.user.name,public.user.email,public.user.created_at,public.userlogin.user_id,public.userlogin.token from public.user Join userlogin ON userlogin.user_id = public.user.id  WHERE public.userlogin.token = ${token}`;
    //console.log(user);
    if(!user){
        res.json({status:"failed",message:"user not found"});
    }
    logResponseTime(req, res);
    res.json({status:"success",message:"user found",data:user});
  } catch (error) {
    console.log("Authentic user Message=", error);
    res.status(500).json("Internal server Error");
  }
};


