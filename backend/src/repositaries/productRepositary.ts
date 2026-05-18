import Product from "../models/product.js";
import { BadRequestError } from "../errors/AppError.js";
import prisma from "../../prisma/prisma.js";
import { RESERVED, SOLD } from "../utils/constants.js";

async function createProduct(data:any, sellerId:string){
    const isExist = await prisma.user.findUnique({
        where:{
            id:sellerId
        }

    })
    if(!isExist) throw new BadRequestError("Seller does not Exist");
    const newProduct=new Product({...data, sellerId:sellerId});
    await newProduct.save();
}

async function deleteProduct(productId:string){
     const product = await Product.findById(productId);
    if(!product) throw new BadRequestError("Product does not Exist");
    if(product.status==RESERVED || product.status==SOLD) throw new BadRequestError(`Cannot delete product because it is already ${product.status}`);
    await Product.findByIdAndDelete(productId);
}
async function getAllProduct(){
    const allProductdata=await Product.find({});
    return allProductdata;
}
async function getSellerProduct(sellerId:string){
    const isExist = await prisma.user.findUnique({
        where:{
            id:sellerId
        }

    })
    if(!isExist) throw new BadRequestError("Seller does not Exist");
    const sellerAllProduct=await Product.find({sellerId:sellerId});
    return sellerAllProduct;
}
async function getAllSellerProduct(productId:string){
    const isExist = await Product.findById(productId);
    if(!isExist) throw new BadRequestError("Product does not Exist");
    const sellerProduct=await Product.find({id:productId });
    return sellerProduct;
}
async function updateProduct(data:any, productId:string){
    const product = await Product.findById(productId);
    if(!product) throw new BadRequestError("Product does not Exist");
    if(product.status==RESERVED || product.status==SOLD) throw new BadRequestError(`Cannot update product  because it is already ${product.status}`);
    await Product.findByIdAndUpdate(productId,
        data,
        {new:true}
    )
}

async function reserveProduct(id:string, productId:string){
    const product = await Product.findById(productId);
    if(!product) throw new BadRequestError("Product does not Exist");
    if(product.status == SOLD) throw new BadRequestError("Artwork Already Sold");
    if(product.status == RESERVED) {
            throw new BadRequestError("Artwork Currently Reserved");
    }
     // Reserve for 10 minutes
    const expiration = new Date(
      Date.now() + 10 * 60 * 1000
    );
    product.status=RESERVED;
    product.reservedBy=id;
    product.reservationExpiresAt=expiration;
    product.save();

}



const productRepositary={
    createProduct:createProduct,
    deleteProduct:deleteProduct,
    getAllProduct:getAllProduct,
    getSellerProduct:getSellerProduct,
    getAllSellerProduct:getAllSellerProduct,
    updateProduct:updateProduct,
    reserveProduct:reserveProduct
}

export default productRepositary;