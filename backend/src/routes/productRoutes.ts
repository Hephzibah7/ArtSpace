import express from "express";
import validate from "../middlewares/validate.js";
import productController from "../controller/productController.js";
import verifyToken from "../middlewares/verifyToken.js";
import authorize from "../middlewares/authorize.js";
import { permissions } from "../utils/permissions.js";
import { createProductValidator, deleteProductValidator, readSellerProductValidator, readSingleProductValidator, updateProductValidator } from "../helpers/productValidator.js";
import { verify } from "crypto";

const router=express.Router();

router.post("/product", verifyToken, authorize(permissions.CREATE_PRODUCT), createProductValidator, validate, productController.createProduct);
router.delete("/product", verifyToken, authorize(permissions.DELETE_PRODUCT), deleteProductValidator, validate, productController.deleteProduct);
router.get("/product",verifyToken,authorize(permissions.READ_ALL_PRODUCT),productController.getAllProduct);
router.get("/product/seller/sellerId", verifyToken, authorize(permissions.READ_SELLER_PRODUCT),  readSellerProductValidator, validate, productController.getAllSellerProduct);
router.get("/product/productId/seller/sellerId", verifyToken, authorize(permissions.READ_SINGLE_PRODUCT), readSingleProductValidator, validate, productController.getSellerProduct);
router.patch("/product", verifyToken, authorize(permissions.UPDATE_PRODUCT), updateProductValidator,validate, productController.updateProduct);


