import { Request, Response, NextFunction } from "express";
import userService from "../services/userService.js";
import { ResolveFnOutput } from "module";

async function createUser(req:Request, res:Response, next:NextFunction){
    try{
        await userService.createUser(req.body);
        res.status(201).json({
        success:true,
        message:"User created successfully!"
       })
    }
    catch(error){
        next(error);
    }
}

async function getUser(req:Request, res:Response, next:NextFunction){
    try{
        const id=req.params.id;
        const data=await userService.getUser(id);
        res.status(201).json({
        success:true,
        user:data
       })
    }
    catch(error){
        next(error);
    }
}

async function deleteUser(req:Request, res:Response, next:NextFunction){
    try{
        const id=req.params.id;
        await userService.deleteUser(id);
    }
    catch(error){
        next(error);
    }
}

async function loginUser(req:Request, res:Response, next:NextFunction){
    try{
        const data=req.body;
        const userData=await userService.loginUser(data);
         res.status(201).json({
        success:true,
        user:userData
       })
    }
    catch(error){
        next(error);
    }
}



const userController={
    createUser:createUser,
    getUser:getUser,
    deleteUser:deleteUser,
    loginUser
}

export default userController;