import { getUser } from "../Authentication/auth.js";
import prisma from "../DB/db.config.js";

export const logOutUser = async (req, res) => {
  try {
    const token = req.cookies?.uid;
    //console.log("Session delete Id=", token);
    if (!token) {
      res.json({ status: 400, message: "Anauthoriesed user" });
    }
    res.cookie(token, { expires: new Date(), httpOnly: true });
    await prisma.userlogin.updateMany({
        where: {
          token: token,
        },
        data: {
          status: 0,
        },
      });
    //return res.redirect("/");
    //return res.json({status:"success",message:"user logout"})
  } catch (error) {
    console.log("LogOut Message=", error);
  }
};
