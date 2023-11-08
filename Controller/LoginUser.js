
import bcrypt from "bcrypt";
import prisma from "../DB/db.config.js";
import logResponseTime from "./Log.js";


export const loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const findUser = await prisma.user.findUnique({
        where: { email: email }
      })
      if (findUser != null) {
        const isMatch = await bcrypt.compare( password,findUser.password)
        if ((findUser.email === email) && isMatch) {
          res.json({ status: "success", message: "User Login Successfully" });
        } else {
          res.status(401).json({
            status: "failed",
            message: "Email or Password is not Valid",
          })
        }
      } else {
        res.json({ status: 400, message: "You are not Register User" });
      }
    } else {
      res.Status(401).json({ status: "failed", message: "All Fields are Requir" });
    }
    logResponseTime(req,res);
  } catch (error) {
    console.log("Login Message=", error);
  }
};
