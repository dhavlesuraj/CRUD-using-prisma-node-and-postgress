import { Router } from "express";
import fetchMatchUser from "../Controller/joins.js";


const router = Router();

router.get("/", fetchMatchUser);

export default router;