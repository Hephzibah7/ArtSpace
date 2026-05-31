import prisma from "../../prisma/prisma.js";
import { BadRequestError } from "../errors/AppError.js";

async function createPayment(orderId:string){
    const order= await prisma.order.findUnique({
        where:{
            id:orderId
        }
    })
    if(!order) throw new BadRequestError("Order not found");
    
    const payment= await prisma.payment.findUnique({
        where:{
            orderId
        }
    })
    
    if(payment) throw new BadRequestError("Payment already exists");

     return prisma.payment.create({
    data: {

      orderId,

      amount: order.totalAmount,

      status: "PENDING"
    }
  });
}

const paymentRepositary={
    createPayment:createPayment,
}

export default paymentRepositary;