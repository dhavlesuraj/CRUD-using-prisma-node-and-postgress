import prisma from "../DB/db.config.js";
import getTimeStamp from "../timeStamp.js";


function logResponseTime(req, res, next) {
  console.log(getTimeStamp());
  console.log(req.body);
try {
  const url=console.log(`${req.method} ${req.originalUrl} [STARTED]`);

  res.on("finish", () => {
    console.log(`${req.method} ${req.originalUrl} [FINISHED]`);
  });

  res.on("close", () => {
    console.log(`${req.method} ${req.originalUrl} [CLOSED]`);
  });
  const startTime = process.hrtime();

    const taken_time=res.on("finish", () => {
      const elapsedHrTime = process.hrtime(startTime);
      const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
      console.log("%s : %fms", req.path, elapsedTimeInMs);
    });
    
    const newLogger =prisma.logger1.create({
      data: {
        route:req.url,
        created_at: getTimeStamp(),
        taken_time: taken_time,
        method:req.method
      },
   });
   //res.send({ status: 200, data: newLogger ,message:"new Logger created"});
   res.end("new log created");
   next();
  } catch (error) {
    console.log("Logger created Error=", error);
  }
}

export default logResponseTime;
