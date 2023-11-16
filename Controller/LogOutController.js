import { getUser } from "../Authentication/auth.js";
import prisma from "../DB/db.config.js";

export const logOutUser = async (req, res) => {
  try {
    const cookieHeader = req.cookies?.uid;
    //console.log("Session delete Id=", cookieHeader);
    if (!cookieHeader) {
      res.json({ status: 400, message: "Anauthoriesed user" });
    }
    res.cookie(cookieHeader, { expires: new Date(), httpOnly: true });
    await prisma.userlogin.updateMany({
        where: {
          token: cookieHeader,
        },
        data: {
          status: 0,
        },
      });
    return res.redirect("/");
  } catch (error) {
    console.log("LogOut Message=", error);
  }
};