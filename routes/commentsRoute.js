import { Router } from "express";
import {
  createComment,
  fetchComment,
  showComment,
  updateComment,
  deleteComment
} from "../Controller/CommentController.js";

const router=Router();

router.post("/",createComment);
router.get("/:id", fetchComment);
router.get("/",showComment);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);

export default router;