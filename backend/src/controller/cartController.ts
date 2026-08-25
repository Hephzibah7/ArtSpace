import {Request, Response, NextFunction} from "express"
import cartService from "../services/cartService.js"

async function getCart(req:Request,res:Response, next:NextFunction){
    try{
        let cart = await cartService.getCart(req.user as string);
        
    }
    catch(error){
        next(error);
    }
}