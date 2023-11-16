import { Router } from "express";
const router = Router();
import { logOutUser } from "../Controller/LogOutController.js";
router.get("/", logOutUser);

export default router;