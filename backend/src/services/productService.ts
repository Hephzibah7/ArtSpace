import productRepositary from "../repositaries/productRepositary.js";

async function createProduct(data:any, sellerId:string){
    await productRepositary.createProduct(data,sellerId);
}
async function deleteProduct(productId:string){
    await productRepositary.deleteProduct(productId);
}

async function getAllProduct(){
    const allProduct=await productRepositary.getAllProduct();
    return allProduct;
}
async function getAllSellerProduct(sellerId:string){
    const allSellerProduct=await productRepositary.getAllSellerProduct(sellerId);
    return allSellerProduct;
}
async function getSellerProduct(productId:string){
    const sellerProduct=await productRepositary.getSellerProduct(productId);
    return sellerProduct;
}
async function updateProduct(data:any, productId:string){
    await productRepositary.updateProduct(data,productId);
    
}

async function reserveProduct(id:string, productId:string){
    await productRepositary.reserveProduct(id, productId);
}
async function markProductSold(productId:string){
    await productRepositary.markProductSold(productId);
}
async function markProductRelease(productId:string){
    await productRepositary.markProductRelease(productId);
}
const productService={
    createProduct:createProduct,
    deleteProduct:deleteProduct,
    getAllProduct:getAllProduct,
    getAllSellerProduct:getAllSellerProduct,
    getSellerProduct:getSellerProduct,
    updateProduct:updateProduct,
    reserveProduct:reserveProduct,
    markProductSold,
    markProductRelease
}

export default productService;