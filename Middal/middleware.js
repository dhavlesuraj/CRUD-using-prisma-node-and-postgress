import { rateLimit } from "express-rate-limit";

// function limiter(req,res,next){
//   console.log(req.body);
//   next()
// }

const limiter = rateLimit({
  windowMs:5*60 * 1000,
  max: 5,
  message: "You have exceeded your 5 requests per minute limit.",
  headers: true,
});
 export default limiter;