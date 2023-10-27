import { Router } from "express";

import { loginuser } from "../Controller/LoginUser.js";

const router = Router();

router.post("/", loginuser);

export default router;