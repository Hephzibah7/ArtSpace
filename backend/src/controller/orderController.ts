import { NextFunction, Request, Response } from "express";
import orderRepositary from "../repositaries/orderRepositary.js";
import { BadRequestError } from "../errors/AppError.js";

async function createOrder(req:Request, res:Response, next:NextFunction){
    try{
        const userId=req.user as string;
        const { productIds } = req.body;
        const createdOrder=await orderRepositary.createOrder(productIds,userId);
        res.status(200).json({
        order:createOrder,
        success:true,
        message:"Record fetched successfully!"
       })
        
    }
    catch(error){
        next(error);
    }
}

const orderController={
    createOrder:createOrder,
}

export default orderController;