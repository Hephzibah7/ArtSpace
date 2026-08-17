import { Request, Response, NextFunction } from "express"
import { productService } from "../services/productService.js"
import productRepositary from "../repositaries/productRepositary.js";

async function createProduct(req: Request, res: Response, next: NextFunction) {
    try {
        await productService.createProduct(req.body, req.params.artistId);
        res.status(201).json({
            success: true,
            message: "Product created successfully!"
        })
    }
    catch (error) {
        next(error);
    }
}

async function getProduct(req: Request, res: Response, next: NextFunction) {
    try {
        const productData = await productRepositary.getProduct(req.params.productId);
        res.status(200).json({
            success: true,
            data: productData
        })

    }
    catch (error) {
        next(error);
    }
}

async function getAllProduct(req: Request, res: Response, next: NextFunction) {
    try {
        const allProductData = await productRepositary.getAllProduct();
        res.status(200).json({
            success: true,
            data: allProductData
        })
    }
    catch (error) {
        next(error);
    }
}
async function deleteProduct(req: Request, res: Response, next: NextFunction) {
    try {
        await productRepositary.deleteProduct(req.params.productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!"
        })
    }
    catch (error) {
        next(error);
    }
}

async function updateProduct(req:Request, res:Response, next:NextFunction){
    try{
        const newProductData = await productRepositary.updateProduct(req.body, req.params.productId);
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data:newProductData
        })
    }
    catch(error){
        next(error);
    }
}
    const productController={
        createProduct,
        getProduct,
        getAllProduct,
        deleteProduct,
        updateProduct
    }

    export default productController;
