import {Request, Response, NextFunction} from "express";
import paymentService from "../services/paymentService.js";

async function createPayment(req:Request, res:Response, next:NextFunction){
    try{
        const orderId=req.params.orderId as string;
        await paymentService.createPayment(orderId);
         res.status(201).json({
        success:true,
        message:"Payment created successfully!"
       })
    }
    catch(error){
        next(error);
    }
}
async function paymentSuccess(req:Request, res:Response, next:NextFunction){
    try{
        const paymentId=req.params.id as string;
        await paymentService.paymentSuccess(paymentId);
    }
    catch(error){
        next(error);
    }
}
async function paymentFailure(req:Request, res:Response, next:NextFunction){
    try{
        const paymentId=req.params.id as string;
        await paymentService.paymentFailure(paymentId);
    }
    catch(error){
        next(error);
    }
}

const paymentController={
    createPayment:createPayment,
    paymentSuccess:paymentSuccess,
    paymentFailure,
}

export default paymentController;
