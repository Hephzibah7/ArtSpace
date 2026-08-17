import express from "express";
import validate from "../middlewares/validate.js";
import authorize from "../middlewares/authorize.js";
import verifyToken from "../middlewares/verifyToken.js";
import { permissions } from "../utils/permissions.js";
import { createProductValidator, getProductValidator, deleteProductValidator, updateProductValidator } from "../helpers/productValidator.js";
import productController from "../controller/productController.js";


const router = express.Router();

router.post("/", verifyToken, authorize(permissions.CREATE_PRODUCT), createProductValidator, validate, productController.createProduct);
router.get("/productId", verifyToken, authorize(permissions.READ_PRODUCT), getProductValidator, validate, productController.getProduct);
router.get("/", verifyToken, authorize(permissions.READ_ALL_PRODUCTS), productController.getAllProduct);
router.delete("/", verifyToken, authorize(permissions.DELETE_PRODUCT), deleteProductValidator, validate, productController.deleteProduct);
router.patch("/", verifyToken, authorize(permissions.UPDATE_PRODUCT), updateProductValidator, validate, productController.updateProduct);
