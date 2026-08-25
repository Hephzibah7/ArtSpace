import express from "express";
import validate from "../middlewares/validate.js";
import verifyToken from "../middlewares/verifyToken.js";
import authorize from "../middlewares/authorize.js";
import { permissions } from "../utils/permissions.js";
import cartController from "../controller/cartController.js";
import { addItemValidator,updateItemValidator,removeItemValidator } from "../helpers/cartValidator.js";
const router=express.Router();

router.get("/",verifyToken, authorize(permissions.GET_CART), cartController.getCart);
router.post("/:productId", verifyToken, authorize(permissions.ADD_ITEM),addItemValidator,validate, cartController.addItem);
router.patch("/:productId", verifyToken, authorize(permissions.UPDATE_ITEM), updateItemValidator,validate, cartController.updateItem);
router.delete("/:productId",verifyToken,authorize(permissions.REMOVE_ITEM),removeItemValidator, validate, cartController.removeItem);
router.delete("/",verifyToken,authorize(permissions.DELETE_CART),cartController.deleteCart);

export default router;