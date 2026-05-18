import {Request, Response, NextFunction} from "express"

async function createProduct(req:Request, res:Response, next:NextFunction){
    try{

    }
    catch(error){
        next(error);
    }
}