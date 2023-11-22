import { Router }from 'express';
import UserRoutes from "./userRoutes.js";
import PostRoute from "./postRoute.js";
import CommentRoute from "./commentsRoute.js"
import Loginuser from "./loginUserRoute.js";
import limiter from "../Midalware/middleware.js";
import { fetchMatchUser } from '../Controller/joins.js';
import {isAuthenticatedUser} from "../Midalware/loginMiddal.js"
import  LogOutUser  from './logOutUserRoute.js';
import cookieParser from "cookie-parser";
import AuthUSer from "./authUserRoute.js";




const router=Router();
router.use(cookieParser());


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
router.use("/api/logout",isAuthenticatedUser, LogOutUser);

//For fetchMatchUser using session cookies
router.use("/api/fetchMatchUser",isAuthenticatedUser, fetchMatchUser);
router.use("/api/authuser", isAuthenticatedUser, AuthUSer);


export default router;