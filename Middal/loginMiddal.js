import prisma from "../DB/db.config.js";

// export const isAuthenticated =async (req, res, next) => {
//   const {email}=req.body;
//   const findUser=await prisma.user.findUnique({
//     where:{
//       email:email
//     }
//   });
//   req.session.user = findUser;
//   console.log(req.sessions);
//   if (req.session.cookie && req.session.user) {
//     //res.status(200).send("Authorized");
//     console.log("Authorized User");
//     next();
//   } else {
//     // User is not authenticated
//     res.status(401).send("Unauthorized");
//   }
// };

export async function isAuthenticated(req, res, next) {
  //console.log(req.headers.cookie);
  const cookieHeader = req.headers.cookie;
 console.log(cookieHeader);
  if (cookieHeader) {
    res.json({ status: "success", message: "user already login" });
  } else {
    next();
  }
}
// console.log(cookieHeader);
// if (req.session) {
//     const cookieHeader = req.headers.cookie;
//     const curranTime=Date.now();
//     if (curranTime < req.session.cookie.expire && cookieHeader) {
//       //req.session.lastActivityTime = currentTime;
//       next();
//     } else {
//       //req.session.destroy();
//       res.json({ status: "success", message: "User Already login" }); // Redirect to your login route
//     }
//   } else {
//     req.session.destroy();
//     res.json({status:"failed",message:"please login again"}); // Redirect to your login route
//   }
// } else {
//   // User is not logged in, redirect to login
//   res.json({ status: "failed", message: "All Fields are Require" });
// }
//}
