import { check } from 'express-validator';
import { param } from 'express-validator';

export const getSingleOrderValidator = [

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