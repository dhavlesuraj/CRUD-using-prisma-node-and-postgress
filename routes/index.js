import { Router }from 'express';
import UserRoutes from "./userRoutes.js";
import PostRoute from "./postRoute.js";
import CommentRoute from "./commentsRoute.js"
import Loginuser from "./loginUserRoute.js";
import limiter from "../Middal/middleware.js";
import { fetchMatchUser } from '../Controller/joins.js';


const router=Router();
//*Middalware
//router.use(logResponseTime);
        
//For User Routes
router.use("/api/user", UserRoutes);

//For Post Routes
router.use("/api/post",PostRoute);

// For Comment Routes
router.use("/api/comment",CommentRoute);

// For User Login
router.use("/api/userLogin", limiter,Loginuser);

//For fetchMatchUser
router.use("/api/fetchMatchUser", fetchMatchUser);
export default router;