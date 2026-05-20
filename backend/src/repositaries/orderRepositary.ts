import axios from "axios";
import { BadRequestError } from "../errors/AppError.js";
import prisma from "../../prisma/prisma.js";

async function createOrder(productIds:string[], userId:string){
    const products:any = [];

    // Fetch all products
    for (const id of productIds) {

      const response = await axios.get(
        `http://localhost:5000/products/${id}`
      );

      products.push(response.data);


      // Validation
    for (const product of products) {
      // Must be RESERVED
      if ( product.status !== "RESERVED") throw new BadRequestError(`${product.title} is not reserved`) ;

      
     // Reserved by current user
      if (product.reservedBy !== userId) throw new BadRequestError(`${product.title} is reserved by other user`) ;

       if (new Date(product.reservationExpiresAt)< new Date()) throw new BadRequestError(`${product.title} reservation expired`) ;

        // Calculate total
           let totalAmount = 0;
       
           for (const product of products) {
       
             totalAmount += product.price;
           }
       
           // Transaction
           const order =
             await prisma.$transaction(
       
               async (tx) => {
       
                 const createdOrder =
                   await tx.order.create({
       
                     data: {
       
                       buyerId: userId,
       
                       totalAmount,
       
                       status: "PENDING"
                     }
                   });
       
                 // Create order items
                 for (const product of products) {
       
                   await tx.orderItem.create({
       
                     data: {
       
                       orderId: createdOrder.id,
       
                       productId: product._id,
       
                       sellerId: product.sellerId,
       
                       amount: product.price
                     }
                   });
                 }
       
                 return createdOrder;
               }
             );
       
    }

}
}

async function getBuyerOrders(userId:string){
    const orders= await prisma.order.findMany({
        where:{
            buyerId:userId
        },
        include:{
            orderItems:true
        },
        orderBy:{
            createdAt:"desc"
        }
    })
    return orders;
}

async function getSingleOrder(orderId:string){
    const order=await prisma.order.findUnique({
        where:{
            id:orderId
        },
        include:{
            orderItems:true
        }
    })
    return order;
}

async function getSellerOrders(sellerId:string){
    const orders=await prisma.orderItem.findMany({
        where:{
            sellerId:sellerId
        }
    })
    return orders;
}

const orderRepositary={
   createOrder:createOrder, 
   getBuyerOrders:getBuyerOrders,
   getSingleOrder:getSingleOrder,
   getSellerOrders:getSellerOrders
}

export default orderRepositary;