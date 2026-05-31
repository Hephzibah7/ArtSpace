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

async function paymentSuccess(paymentId:string){
     const payment =
    await prisma.payment.findUnique({

      where: {
        id: paymentId
      }
    });

  if (!payment) throw new BadRequestError("Payment not Found");

  //Idempotency
  if(payment.status=="SUCCESS") throw new BadRequestError("Payment Already Processed");
   await prisma.$transaction(
    async (tx) => {

      await tx.payment.update({

        where: {
          id: paymentId
        },

        data: {
          status: "SUCCESS"
        }
      });

      await tx.order.update({

        where: {
          id: payment.orderId
        },

        data: {
          status: "PAID"
        }
      });
    }
  );
}

async function paymentFailure(paymentId:string){
    const payment =
    await prisma.payment.findUnique({

      where: {
        id: paymentId
      }
    });

   if (!payment) throw new BadRequestError("Payment not Found");

  //Idempotency
  if(payment.status=="FAILED") throw new BadRequestError("Payment Already Processed");
   await prisma.$transaction(
    async (tx) => {

      await tx.payment.update({

        where: {
          id: paymentId
        },

        data: {
          status: "FAILED"
        }
      });

      await tx.order.update({

        where: {
          id: payment.orderId
        },

        data: {
          status: "FAILED"
        }
      });
    }
  );


}

const paymentRepositary={
    createPayment:createPayment,
    paymentSuccess:paymentSuccess,
    paymentFailure:paymentFailure
}

export default paymentRepositary;