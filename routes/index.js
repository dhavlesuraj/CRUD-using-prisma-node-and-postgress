import { Router }from 'express';
import UserRoutes from "./userRoutes.js";
import PostRoute from "./postRoute.js";
import CommentRoute from "./commentsRoute.js"
import Loginuser from "./loginUserRoute.js";
import limiter from "../Middal/middleware.js";
import { fetchMatchUser } from '../Controller/joins.js';
import session from "express-session";
import {isAuthenticatedUser} from "../Middal/loginMiddal.js"
import getTimeStamp from "../timeStamp.js";
import  LogOutUser  from './logOutUserRoute.js';
import cookieParser from "cookie-parser";

const router=Router();
router.use(cookieParser());

// var sessionMW =(
//   session({
//     key:"uid",
//     secret: "veer45afdcBank",
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//       maxAge: 1 * 60 * 1000,
//       //expire: 1 * 60 * 1000 ,
//     },
//   })
// );
//*Middalware
//router.use(logResponseTime);
        
//For User Routes
router.use("/api/user", UserRoutes);

//For Post Routes
router.use("/api/post", PostRoute);

// For Comment Routes
router.use("/api/comment",CommentRoute);

// For User Login
router.use("/api/userLogin", limiter, Loginuser);

//For User LogOut
router.use("/api/logout", LogOutUser);
//For fetchMatchUser
router.use("/api/fetchMatchUser", fetchMatchUser);
export default router;