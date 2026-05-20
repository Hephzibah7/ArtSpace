import { NextFunction, Request, Response } from "express";
import orderRepositary from "../repositaries/orderRepositary.js";
import { BadRequestError } from "../errors/AppError.js";
import orderService from "../services/orderService.js";

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
async function getBuyerOrders(req:Request, res:Response, next:NextFunction){
    try{
        const userId=req.user as string;
        const orders=await orderService.getBuyerOrders(userId);
        return orders;
    }
    catch(error){
        next(error);
    }
}
async function getSingleOrder(req:Request, res:Response, next:NextFunction){
    try{
        const orderId=req.params.orderId;
        const orders=await orderService.getSingleOrder(orderId);
        return orders;
    }
    catch(error){
        next(error);
    }
}
async function getSellerOrders(req:Request, res:Response, next:NextFunction){
    try{
        const sellerId=req.user as string;
        const orders=await orderService.getSellerOrders(sellerId);
        return orders;
    }
    catch(error){
        next(error);
    }
}

const orderController={
    createOrder:createOrder,
    getBuyerOrders:getBuyerOrders,
    getSingleOrder:getSingleOrder,
    getSellerOrders:getSellerOrders
}

export default orderController;