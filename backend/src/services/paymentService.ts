import paymentRepositary from "../repositaries/paymentRepositary.js";

async function createPayment(orderId:string){
    await paymentRepositary.createPayment(orderId);
}

async function paymentSuccess(paymentId:string){
    await paymentRepositary.paymentSuccess(paymentId);
}
async function paymentFailure(paymentId:string){
    await paymentRepositary.paymentFailure(paymentId);
}

const paymentService={
    createPayment:createPayment,
    paymentSuccess:paymentSuccess,
    paymentFailure:paymentFailure
}

export default paymentService;