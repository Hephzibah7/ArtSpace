import express from "express"
import verifyToken from "../middlewares/verifyToken.js"
import { createPaymentValidator, paymentFailureValidator, paymentSuccessValidator } from "../helpers/paymentValidator.js"
import validate from "../middlewares/validate.js"
import paymentController from "../controller/paymentController.js"


const router=express.Router();

router.post("/order/:orderId", verifyToken, createPaymentValidator, validate, paymentController.createPayment);
router.post("/:id/success", verifyToken,paymentSuccessValidator,paymentController.paymentSuccess);
router.post("/:id/failure", verifyToken, paymentFailureValidator, paymentController.paymentFailure);

export default router;