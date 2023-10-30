import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import prisma from "../DB/db.config.js";
import { setUser } from "../Authentication/auth.js";
import { isMatch } from "date-fns";

export const loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const findUser = await prisma.user.findUnique({
        where: { email: email }
      })
      if (findUser != null) {
        const isMatch = await bcrypt.compare(
          password,
          findUser.password
        )
        if ((findUser.email === email) && isMatch) {
          res.json({ status: "success", message: "User Login Successfully" });
        } else {
          res.json({
            status: "failed",
            message: "Email or Password is not Valid",
          })
        }
      } else {
        res.json({ status: "failed", message: "You are not Register User" });
      }

      // const sessionId = uuidv4();
      // //console.log("session=",sessionId);
      // setUser(sessionId, findUser);
      // res.cookie("uid", sessionId);
      // return res.json({ status: 200, message: "User Login Succsessfully" });
    } else {
      res.json({ status: "failed", message: "All Fields are Requir" });
    }
  } catch (error) {
    console.log("Login Message=", error);
  }
};
