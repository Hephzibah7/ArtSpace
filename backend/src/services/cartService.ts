import cartRepositary from "../repositaries/cartRepositary.js";

async function getCart(userId:string){
    let cart = await cartRepositary.getCart(userId);
    return cart;
}
async function addItem(userId:string, productId:string, quantity:number){
    await cartRepositary.addItem(userId, productId, quantity);
}
async function updateItem(userId:string, productId:string, quantity:number){
    await cartRepositary.updateItem(userId,productId,quantity);
}

async function removeItem(userId:string, productId:string){
    await cartRepositary.removeItem(userId,productId);
}
async function deleteCart(userId:string){
    await cartRepositary.deleteCart(userId)
}

const cartService={
    getCart,
    addItem,
    updateItem,
    removeItem,
    deleteCart
}

export default cartService;