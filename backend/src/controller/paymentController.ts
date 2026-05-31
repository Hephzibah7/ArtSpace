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

const paymentController={
    createPayment:createPayment
}

export default paymentController;
