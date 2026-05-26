import express from "express";
import validate from "../middlewares/validate.js";
import orderController from "../controller/orderController.js";
import verifyToken from "../middlewares/verifyToken.js";
import authorize from "../middlewares/authorize.js";
import { permissions } from "../utils/permissions.js";
import { getSingleOrderValidator } from "../helpers/orderValidator.js";


const router=express.Router();

router.post("/", verifyToken, orderController.createOrder);
router.get("/", verifyToken,authorize(permissions.READ_BUYER_ALL_ORDER), orderController.getBuyerOrders);
router.get("/seller", verifyToken,authorize(permissions.READ_SELLER_ALL_ORDER),orderController.getSellerOrders);
router.get("/product/productId", verifyToken, authorize(permissions.READ_SINGLE_ORDER),orderController.getSingleOrder)
export default router;