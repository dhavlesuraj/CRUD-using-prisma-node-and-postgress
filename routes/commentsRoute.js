import { Router } from "express";
import {fetchUser} from "../Midalware/JwtGetUser.js"
import {
  createComment,
  fetchComment,
  showComment,
  updateComment,
  deleteComment
} from "../Controller/CommentController.js";

const router=Router();

router.post("/", fetchUser,createComment);
router.get("/:id", fetchComment);
router.get("/",showComment);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);

export default router;