import bcrypt from "bcrypt";
import prisma from "../DB/db.config.js";
import logResponseTime from "./Log.js";
import getTimeStamp from "../timeStamp.js";
import {setUser} from "../Authentication/auth.js"

export const loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if((email && password)==null){
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
      res.json({
        status: "failed",
        message: "please try to login with correct credential",
      });
    }
    req.session.user = findUser;
    //console.log(req.session.id);
    setUser(req.session.id,findUser);
    const allUsers = await prisma.userlogin.create({
      data: {
        user_id: findUser.id,
        token: req.session.id,
        taken_time: getTimeStamp(new Date()),
      },
    });
    res.json({ status: "success", message: "User Login Successfully" });
  } catch (error) {
    console.log("Login Message=", error);
  }
};
