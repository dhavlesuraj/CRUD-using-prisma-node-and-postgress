import bcrypt from "bcrypt";
import prisma from "../DB/db.config.js";
import { v4 as uuidv4 } from "uuid";
import logResponseTime from "./Log.js";
import getTimeStamp from "../timeStamp.js";
import { setUser } from "../Authentication/auth.js";

const secretKey="mynameissuraj";
export const loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if ((email && password) == null) {
      res.json({ status: "failed", message: "All Fields are Require" });
    }
    const findUser = await prisma.user.findUnique({
      where: { email: email },
    });
    if (!findUser) {
      res.json({
        status: "failed",
        message: "please try to login with correct credential",
      });
    }
    const isMatch = await bcrypt.compare(password, findUser.password);
    if (!isMatch) {
      res.json({status: "failed",message: "please try to login with correct credential"});
    }
 
    const sessionId = uuidv4();
    res.cookie("uid",sessionId,{httpOnly:true,secure: false,maxAge:1*60*60*1000});
    setUser(sessionId,findUser);
   console.log(sessionId);
    await prisma.userlogin.create({
      data: {
        user_id: findUser.id,
        token: sessionId,
        taken_time: getTimeStamp(new Date())
      },
    });
    return res.status(200).json({ message: "user are logIn successfully" });
    //return res.redirect("/authorize");    
  } catch (error) {
    console.log("Login Message=", error);
  }
};
