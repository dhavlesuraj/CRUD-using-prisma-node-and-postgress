import jwt from "jsonwebtoken";

 const jwt_secret = "myNameIsJwt";

 export const fetchUser = (req, res, next) => {
  const token = req.header("auth-token");
  //console.log(token);
  if (!token) {
   res.status(401).send({ error: "Please authenticate using valid token" });
  }
  try {
    const data = jwt.verify(token, jwt_secret);
    //console.log(data);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using valid token" });
  }
};

