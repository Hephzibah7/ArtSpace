import productRepositary from "../repositaries/productRepositary.js";


async function createProduct(data:any, artistId:string){
    await productRepositary.createProduct(data, artistId);
}

async function getProduct(productId:string){
    const productData = await productRepositary.getProduct(productId);
    return productData;
}
async function getAllProduct(){
    const productAllData=await productRepositary.getAllProduct();
    return productAllData;
}
async function deleteProduct(productId:string){
    await productRepositary.deleteProduct(productId);
}
async function updateProduct(data:any, productId:string){
 const newProductData = await productRepositary.updateProduct(data, productId);
 return newProductData;
}
export const productService={
    createProduct,
    getProduct,
    getAllProduct,
    deleteProduct,
    updateProduct
}