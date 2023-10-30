import { rateLimit } from "express-rate-limit";

//  async function limiter(req,res,next){
//   console.log(req.body);
//   const {email,password}=req.body;
//   let count=0;
//       if (email && password) {
//       const findUser = await prisma.user.findUnique({
//         where: {
//           email: email,
//           password: password,
//         },
//       });
//       count++;
//       if (!findUser && count<5) {
        
//       }
//   next()
// }
// }

const limiter = rateLimit({
  windowMs:5*60 * 1000,
  max: 5,
  message: "You have exceeded your 5 requests per minute limit.",
  headers: true,
});
 export default limiter;