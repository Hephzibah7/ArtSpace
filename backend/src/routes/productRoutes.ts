import express from "express";
import validate from "../middlewares/validate.js";
import productController from "../controller/productController.js";
import verifyToken from "../middlewares/verifyToken.js";
import authorize from "../middlewares/authorize.js";
import { permissions } from "../utils/permissions.js";
import { createProductValidator, deleteProductValidator, readSellerProductValidator, readSingleProductValidator, reservceProductValidator, updateProductValidator } from "../helpers/productValidator.js";

const router=express.Router();

router.post("/", verifyToken, authorize(permissions.CREATE_PRODUCT), createProductValidator, validate, productController.createProduct);
router.delete("/", verifyToken, authorize(permissions.DELETE_PRODUCT), deleteProductValidator, validate, productController.deleteProduct);
router.get("/",verifyToken,authorize(permissions.READ_ALL_PRODUCT),productController.getAllProduct);
router.get("/seller/sellerId", verifyToken, authorize(permissions.READ_SELLER_PRODUCT),  readSellerProductValidator, validate, productController.getAllSellerProduct);
router.get("/productId/seller/sellerId", verifyToken, authorize(permissions.READ_SINGLE_PRODUCT), readSingleProductValidator, validate, productController.getSellerProduct);
router.patch("/", verifyToken, authorize(permissions.UPDATE_PRODUCT), updateProductValidator,validate, productController.updateProduct);
router.patch("/productId/reserve", verifyToken, reservceProductValidator, validate, productController.reserveProduct);
router.patch("/productId/sold", verifyToken,productController.markProductSold);
router.patch("/productId/release", verifyToken, productController.markProductRelease);
export default router;

