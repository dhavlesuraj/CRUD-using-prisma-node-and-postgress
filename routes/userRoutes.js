import { Router } from "express";
import { createUser, deleteUser, fetchSingleUser, fetchUser, updateUser }from '../Controller/UserController.js';

const router=Router();

router.get('/',fetchUser);
router.get('/:id',fetchSingleUser);
router.post("/",createUser);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);

export default router;