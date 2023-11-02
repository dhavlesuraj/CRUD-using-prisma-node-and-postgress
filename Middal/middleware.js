//import { rateLimit } from "express-rate-limit";
const reqCount = {};
function limiter(req, res, next) {
  const ipAddress = req.ip;
  const limit = 5;
  const windowMs = 60000;

  if (!reqCount[ipAddress]) {
    reqCount[ipAddress] = {
      count: 1,
      timeStamp: Date.now(),
    };
  } else {
    const currantTime = Date.now();
    const lastReqTime = reqCount[ipAddress].timeStamp;

    if (currantTime - lastReqTime <= windowMs) {
      if (reqCount[ipAddress].count >= limit) {
        return res.status(429).json({ message: "Rate limit exceeded" });
      } else {
        reqCount[ipAddress].count++;
      }
    } else {
      reqCount[ipAddress] = {
        count: 1,
        timeStamp: currantTime,
      };
    }
  }
  next();
}
    //* Or *// using thaird party command
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minit block
//   max: 5,
//   message: "You have exceeded your 5 reqs per minute limit.",
//   headers: true,
// });
export default limiter;
