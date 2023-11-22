import { getUser } from "../Authentication/auth.js";


export const isAuthenticatedUser=(req,res,next)=>{
   const token = req.headers?.uid;
  if (!token) {
    res.json({ status: 400, message: "Please Login First"});
  }
  try {
    const user = getUser(token);
    //console.log(user);
    if (user) {
      req.user = user;
      next();
    } else res.json({ status: 400, message: "Anauthoriesed user" });
  } catch (error) {
    console.log("Error in login middleware=",error);
  }
  
}







