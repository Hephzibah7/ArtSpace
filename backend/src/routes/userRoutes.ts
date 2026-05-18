import express from "express";
import validate from "../middlewares/validate.js";
import { createUserValidator, deleteUserValidator, getUserValidator } from "../helpers/userValidator.js";
import userController from "../controller/userController.js";

const router=express.Router();

router.post("/auth",createUserValidator, validate, userController.createUser );
router.get("/", getUserValidator, validate, userController.getUser );
router.delete("/", deleteUserValidator, validate, userController.deleteUser);
