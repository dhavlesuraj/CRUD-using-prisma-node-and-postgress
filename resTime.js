

const responseTime = (req, res, next) => {
  const startTime = process.hrtime();

  res.on("finish", () => {
    const totalTime = process.hrtime(startTime);
    const totalTimeInMs = totalTime[0] * 1000 + totalTime[1] / 1e6;
    console.log(totalTimeInMs);
  });

  next();
};

export default responseTime;

   // const url=console.log(`${req.method} ${req.originalUrl} [STARTED]`);

  // res.on("finish", () => {
  //   console.log(`${req.method} ${req.originalUrl} [FINISHED]`);
  // });

  // res.on("close", () => {
  //   console.log(`${req.method} ${req.originalUrl} [CLOSED]`);
  // });
  // const startTime = process.hrtime();
 
  //   res.on("finish", () => {
  //     const elapsedHrTime = process.hrtime(startTime);
  //     const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
  //     console.log("%s : %fms", req.path, elapsedTimeInMs);
  //   });
