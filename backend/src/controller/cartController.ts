import {Request, Response, NextFunction} from "express"
import cartService from "../services/cartService.js"

async function getCart(req:Request,res:Response, next:NextFunction){
    try{
        let cart = await cartService.getCart(req.user as string);
         res.status(200).json({
            success: true,
            data: cart
        })
    }
    catch(error){
        next(error);
    }
}

async function addItem(req:Request, res:Response, next:NextFunction){
    try{
        await cartService.addItem(req.user as string, req.params.productId, req.body);
         res.status(200).json({
            success: true,
            message:"Item successfully added to the cart"
        })

    }
    catch(error){
        next(error);
    }
}

async function updateItem(req:Request, res:Response, next:NextFunction){
    try{
        await cartService.updateItem(req.user as string, req.params.productId, req.body);
         res.status(200).json({
            success: true,
            message:"Cart updated successfully"
        })
    }
    catch(error){
        next(error);
    }
}

async function removeItem(req:Request, res:Response, next:NextFunction){
    try{
        await cartService.removeItem(req.user as string, req.params.productId);
         res.status(200).json({
            success: true,
            message:"Item removed from the Cart"
        })
    }
    catch(error){
        next(error);
    }
}

async function deleteCart(req:Request, res:Response, next:NextFunction){
    try{
        await cartService.deleteCart(req.user as string);
         res.status(200).json({
            success: true,
            message:"Cart deleted successfully"
        })
    }
    catch(error){
        next(error)
    }
}

const cartController={
    getCart,
    addItem,
    updateItem,
    removeItem,
    deleteCart
}

export default cartController;