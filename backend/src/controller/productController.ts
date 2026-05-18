import {Request, Response, NextFunction} from "express"
import productService from "../services/productService.js";
import productRepositary from "../repositaries/productRepositary.js";

async function createProduct(req:Request, res:Response, next:NextFunction){
    try{
        await productService.createProduct(req.body, req.user as string);
        res.status(201).json({
        success:true,
        message:"Product created successfully!"
       })
    }
    catch(error){
        next(error);
    }
}
async function deleteProduct(req:Request, res:Response, next:NextFunction){
    try{
        const productId=req.params.productId;
        await productService.deleteProduct(productId);
         res.status(200).json({
        success:true,
        message:"Product deleted successfully!"
       })
    }
    catch(error){
        next(error);
    }
}
async function getAllProduct(req:Request, res:Response, next:NextFunction){
    try{
        const allProduct=productRepositary.getAllProduct();
         res.status(200).json({
        data:allProduct,
        success:true,
        message:"Products fetched successfully!"
       })

    }
    catch(error){
        next(error);
    }
}
async function getAllSellerProduct(req:Request, res:Response, next:NextFunction){
    try{
        const sellerId=req.user;
        const allSellerProduct=await productRepositary.getAllSellerProduct(sellerId as string);
        res.status(200).json({
        data:allSellerProduct,
        success:true,
        message:"Products fetched successfully!"
       })
    }
    catch(error){
        next(error);
    }
}
async function getSellerProduct(req:Request, res:Response, next:NextFunction){
    try{
        const productId=req.params.productId;
        const sellerProduct=await productRepositary.getSellerProduct(productId as string);
        res.status(200).json({
        data:sellerProduct,
        success:true,
        message:"Products fetched successfully!"
       })
    }
    catch(error){
        next(error);
    }
}
async function updateProduct(req:Request, res:Response, next:NextFunction){
    try{
        const data=req.body;
        const productId=req.params.productId;
        await productRepositary.updateProduct(data, productId);
        res.status(200).json({
        success:true,
        message:"Product Updated successfully!"
       })
    }
    catch(error){
        next(error);
    }
}



const productController={
    createProduct:createProduct,
    deleteProduct:deleteProduct,
    getAllProduct:getAllProduct,
    getAllSellerProduct:getAllSellerProduct,
    getSellerProduct:getSellerProduct,
    updateProduct:updateProduct
}

export default productController;