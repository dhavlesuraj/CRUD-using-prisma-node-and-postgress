import {authUserDate} from "../Controller/authUser.js"
import { Router } from "express";
const router = Router();

router.get("/", authUserDate);

export default router; 