import { check } from 'express-validator';
import { param } from 'express-validator';

export const createPaymentValidator = [
  param('orderId')
    .exists()
    .withMessage('Order Id param is required')
    .bail()
    .notEmpty()
    .withMessage('Order Id cannot be empty')
    .bail()
    .isMongoId()
    .withMessage('Invalid Order Id'),

];

export const paymentSuccessValidator = [
  param('id')
    .exists()
    .withMessage('Payment Id param is required')
    .bail()
    .notEmpty()
    .withMessage('Payment Id cannot be empty')
    .bail()
    .isMongoId()
    .withMessage('Invalid Payment Id'),

];


export const paymentFailureValidator = [
  param('id')
    .exists()
    .withMessage('Payment Id param is required')
    .bail()
    .notEmpty()
    .withMessage('Payment Id cannot be empty')
    .bail()
    .isMongoId()
    .withMessage('Invalid Payment Id'),

];