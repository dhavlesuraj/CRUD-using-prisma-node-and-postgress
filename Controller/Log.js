import { json } from "express";
import prisma from "../DB/db.config.js";
import getTimeStamp from "../timeStamp.js";

function logResponseTime(req, res){
  try {
  console.log(getTimeStamp());
  console.log(req.body);
  const data=req.body;
    const startTime = process.hrtime();
    res.on("finish", async () => {
      const totalTime = process.hrtime(startTime);
      const totalTimeInMs = totalTime[0] * 1000 + totalTime[1] / 1e6;
      console.log("%fms", totalTimeInMs);
      
      const createLog = await prisma.logger3.create({
        data: {
          request: JSON.stringify(data),
          route: req.originalUrl,
          created_at: getTimeStamp(),
          taken_time: totalTimeInMs,
          method: req.method,
        },
      });
      //res.json({status:"success",data:createLog,message:"log handale successfully"});
    });
  } catch (error) {
    console.log("Logger created Error=", error);
  }
};
export default logResponseTime;
