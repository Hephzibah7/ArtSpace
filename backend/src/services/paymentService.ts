import paymentRepositary from "../repositaries/paymentRepositary.js";

async function createPayment(orderId:string){
    await paymentRepositary.createPayment(orderId);
}

const paymentService={
    createPayment:createPayment
}

export default paymentService;