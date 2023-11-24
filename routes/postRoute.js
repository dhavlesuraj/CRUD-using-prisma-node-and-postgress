import { Router } from "express";
import { fetchUser } from "../Midalware/JwtGetUser.js";
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
router.post("/", fetchUser, createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
