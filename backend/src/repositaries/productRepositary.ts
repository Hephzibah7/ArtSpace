import Product from "../models/product.js";
import { NotFoundError } from "../errors/AppError.js";
import Artist from "../models/artist.js";
import prisma from "../../prisma/prisma.js";


async function createProduct(data:any, userId:string){
    const isExist = await prisma.user.findUnique({
        where:{
            id:userId
        }
    })
    if(!isExist) throw new NotFoundError("User does not exist");
    const artist=await Artist.findById({userId:userId});
    if(!artist) throw new NotFoundError("Artist does not exist")
    const artistId=artist?.id;
    const newProduct = new Product({...data,artistId});
    await newProduct.save();

}

async function getProduct(productId:string){
    const productData = await Product.findById(productId);
    if(!productData) throw new NotFoundError("Product does not exist");
    return productData;
    
}

async function getAllProduct(){
    const allProductData = await Product.find();
    return allProductData;
}

async function deleteProduct(productId:string){
    const productData = await Product.findById(productId);
    if(!productData) throw new NotFoundError("Product does not exist");
    await Product.findByIdAndDelete(productId);
}
async function updateProduct(data:any, productId:string){
    const productData = await Product.findById(productId);
    if(!productData) throw new NotFoundError("Product does not exist");
    const newProductData=await Product.findByIdAndUpdate(productId,
        data,
        {new:true}
    )
    return newProductData;
}



const productRepositary={
    createProduct,
    getProduct,
    getAllProduct,
    deleteProduct,
    updateProduct
}

export default productRepositary;