import { Router } from "express";
import {
  createUser,
  deleteUser,
  fetchSingleUser,
  fetchAllUser,
  updateUser,
  jwtAuthLoginUser,
  jwtGetAuthUserData,
  jwtLogoutUser,
} from "../Controller/UserController.js";
import {fetchUser} from "../Midalware/JwtGetUser.js"

const router=Router();

router.get('/',fetchAllUser);
router.get("/:id", fetchSingleUser);
router.post("/",createUser);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);
router.post("/jwtauthlogin", jwtAuthLoginUser);
router.post("/getdata",fetchUser, jwtGetAuthUserData);
router.post("/jwtlogout",fetchUser, jwtLogoutUser);




export default router; 