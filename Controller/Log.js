import { json } from "express";
import prisma from "../DB/db.config.js";
import getTimeStamp from "../timeStamp.js";
import { stringify } from "uuid";

function logResponseTime(req, res) {
  try {
    console.log(req.body);
   
    const startTime = process.hrtime();
    //console.log(startTime);
    res.on("finish", async () => {
      const totalTime = process.hrtime(startTime);
      //console.log(totalTime);
      const totalTimeInMs = totalTime[0] * 1000 + totalTime[1] / 1000000;
      console.log("%f ms", totalTimeInMs);

      // const createLog = await prisma.logg.create({
      //   data: {
      //     request: JSON.stringify(req.body),
      //     route: req.originalUrl,
      //     created_at: getTimeStamp(),
      //     taken_time: totalTimeInMs,
      //     method: req.method,
      //   },
      // });
      //res.json({status:"success",data:createLog,message:"log handale successfully"});
    });
  } catch (error) {
    console.log("Logger created Error=", error);
  }
}
export default logResponseTime;
