import orderController from "../controller/orderController.js";
import orderRepositary from "../repositaries/orderRepositary.js";

async function createOrder(productIds:string[], userId:string){
    await orderRepositary.createOrder(productIds,userId);
}

async function getBuyerOrders(userId:string){
    const orders=await orderRepositary.getBuyerOrders(userId);
    return orders;
}

async function getSingleOrder(orderId:string){
    const order=await orderRepositary.getSingleOrder(orderId);
    return order;
}

async function getSellerOrders(sellerId:string){
    const orders=await orderRepositary.getSellerOrders(sellerId);
    return orders;
}

const orderService={
    createOrder:createOrder,
    getBuyerOrders:getBuyerOrders,
    getSingleOrder:getSingleOrder,
    getSellerOrders:getSellerOrders
}

export default orderService;