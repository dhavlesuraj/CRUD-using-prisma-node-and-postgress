import { Router }from 'express';
import UserRoutes from "./userRoutes.js";
import PostRoute from "./postRoute.js";
import CommentRoute from "./commentsRoute.js"
import Loginuser from "./loginUserRoute.js";
import limiter from "../Middal/middleware.js";
import { fetchMatchUser } from '../Controller/joins.js';
import session from "express-session";
import {isAuthenticated} from "../Middal/loginMiddal.js"
import getTimeStamp from "../timeStamp.js";

const router=Router();

var sessionMW =(
  session({
    key: "user_id",
    secret: "veer45afdcBank",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1 * 60 * 1000,
      //expire: 1 * 60 * 1000 ,
    },
  })
);
//*Middalware
//router.use(logResponseTime);
        
//For User Routes
router.use("/api/user", UserRoutes);

//For Post Routes
router.use("/api/post",PostRoute);

// For Comment Routes
router.use("/api/comment",CommentRoute);

// For User Login
router.use("/api/userLogin", limiter,sessionMW,isAuthenticated, Loginuser);

//For fetchMatchUser
router.use("/api/fetchMatchUser", fetchMatchUser);
export default router;