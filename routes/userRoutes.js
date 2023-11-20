import { Router } from "express";
import { createUser, deleteUser, fetchSingleUser, fetchUser, updateUser }from '../Controller/UserController.js';
import { isAuthenticatedUser } from "../Middal/loginMiddal.js";

const router=Router();

router.get('/',fetchUser);
router.get("/:id", isAuthenticatedUser,fetchSingleUser);
router.post("/",createUser);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);

export default router; 