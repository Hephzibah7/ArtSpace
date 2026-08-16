import {Request, Response, NextFunction} from "express"
import artistService from "../services/artistService.js"

async function createArtist(req:Request, res:Response, next:NextFunction){
    try{
        await artistService.createArtist(req.body,req.user as string);
        res.status(201).json({
        success:true,
        message:"Artist created successfully!"
       })
    }
    catch(error){
        next(error);
    }
}

async function getArtist(req:Request, res:Response, next:NextFunction){
    try{
        const artistData=await artistService.getArtist(req.user as string);
         res.status(200).json({
        success:true,
        data:artistData
       })
    }
    catch(error){
        next(error);
    }
}

async function getAllArtist(req:Request, res:Response, next:NextFunction){
    try{
        const allArtistData=await artistService.getAllArtist();
         res.status(200).json({
        success:true,
         data:allArtistData
       })
    }
    catch(error){
        next(error);
    }
}

async function deleteArtist(req:Request, res:Response, next:NextFunction){
    try{
        await artistService.deleteArtist(req.user as string);
        res.status(200).json({
        success:true,
        message:"Artist deleted successfully!",
       })
    }
    catch(error){
        next(error);
    }
}

async function updateArtist(req:Request, res:Response, next:NextFunction){
    try{
        const artistData=await artistService.updateArtist(req.body,req.user as string);
         res.status(200).json({
        success:true,
        message:"Artist updated successfully",
        data:artistData
       })
    }
    catch(error){
        next(error);
    }
}

const artistController={
    createArtist,
    getArtist,
    getAllArtist,
    deleteArtist,
    updateArtist
}

export default artistController;