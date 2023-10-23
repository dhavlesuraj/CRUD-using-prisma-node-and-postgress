import { Router } from "express";
import {
  createPost,
  updatePost,
  deletePost,
  showPost,
  fetchPost,
} from "../Controller/PostController.js";

const router = Router();

router.get("/:id", fetchPost);
router.get("/", showPost);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
