import { getUser } from "../Authentication/auth.js";
export const isAuthenticatedUser=(req,res,next)=>{
  const cookieHeader = req.cookies?.uid;
  //console.log("Session Id=",cookieHeader);
  if (!cookieHeader) {
    res.json({ status: 400, message: "Anauthoriesed user" });
  } 

  const user=getUser(cookieHeader);
  //console.log(user);
  if(user){
  req.user = user;
   next();
  }else res.json({ status: 400, message: "Anauthoriesed user" });
}







