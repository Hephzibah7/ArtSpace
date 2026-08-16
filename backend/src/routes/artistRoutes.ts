import express from "express";
import validate from "../middlewares/validate.js";
import authorize from "../middlewares/authorize.js";
import verifyToken from "../middlewares/verifyToken.js";
import { permissions } from "../utils/permissions.js";
import { createArtistValidator } from "../helpers/artistValidator.js";
import artistController from "../controller/artistController.js";


const router=express.Router();

router.post("/", verifyToken, authorize(permissions.CREATE_ARTIST), createArtistValidator.flat, validate, artistController.createArtist);
router.get("/")