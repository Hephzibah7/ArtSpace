import express from "express";
import validate from "../middlewares/validate.js";
import { createUserValidator, deleteUserValidator, getUserValidator, loginUserValidator } from "../helpers/userValidator.js";
import userController from "../controller/userController.js";
import verifyToken from "../middlewares/verifyToken.js";

const router=express.Router();

router.post("/",createUserValidator, validate, userController.createUser );
router.get("/:id", verifyToken,getUserValidator, validate, userController.getUser );
router.delete("/:id",verifyToken, deleteUserValidator, validate, userController.deleteUser);
router.post("/login",loginUserValidator,validate,userController.loginUser );
export default router;