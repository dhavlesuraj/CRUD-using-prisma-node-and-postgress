
import prisma from "../DB/db.config.js";
import getTimeStamp from "../timeStamp.js";


function logResponseTime(req, res) {
  try {
    const startTime = process.hrtime();
    //console.log(startTime);
    res.on("finish", async () => {
      const totalTime = process.hrtime(startTime);
      //console.log(totalTime);
      const totalTimeInMs = totalTime[0] * 1000 + totalTime[1] / 1000000;
      //console.log("%f ms", totalTimeInMs);

      const createLog = await prisma.logg.create({
        data: {
          request: JSON.stringify(req.body),
          response: JSON.stringify(res.statusCode),
          route: req.originalUrl,
          created_at: getTimeStamp(new Date()),
          taken_time: totalTimeInMs,
          method: req.method,
        },
      });
    });
  } catch (error) {
    console.log("Logger created Error=", error.message);
  }
}
export default logResponseTime;
