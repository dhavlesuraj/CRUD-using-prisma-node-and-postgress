import { Router }from 'express';
import UserRoutes from "./userRoutes.js";
import PostRoute from "./postRoute.js";
import CommentRoute from "./commentsRoute.js"

const router=Router();
//For User Routes
router.use("/api/user",UserRoutes);

//For Post Routes
router.use("/api/post",PostRoute);

// For Comment Routes
router.use("/api/comment",CommentRoute);

export default router;