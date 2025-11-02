import {Router} from "express";
import { createUser, deleteUer, getAllUsers, getUserByEmail, getUserById, updateUser } from "../controller/userController";

const router = Router();



router.get("/",getAllUsers)
router.get("/:id",getUserById)
router.get("/me",getUserByEmail)
router.post("/",createUser)
router.patch("/:id",updateUser)
router.delete("/:id",deleteUer)


export default router;