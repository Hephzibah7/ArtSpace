import { check } from 'express-validator';
import { param } from 'express-validator';

export const createProductValidator = [
  check('title', 'Please enter a Title')
    .not()
    .isString()
    .isEmpty(),

  check('description', 'Please enter a description')
    .not()
    .isString()
    .isEmpty(),

  check('price', 'Product should have a price')
    .not()
    .isString()
    .isEmpty(),

  check('imageURL', 'Image is Required')
    .not()
    .isEmpty()
    .isString(),

    check('category', 'Category is Required')
    .not()
    .isEmpty()
    .isString(),

    check('medium')
     .not()
    .isEmpty()
    .isString(),

    check('dimensions')
     .not()
     .isString()
    .isEmpty(),

    check('tags')
    .not()
    .isEmpty()
    .isArray().withMessage('Tags must be an array')
    .custom((array) => array.every((item:any) => typeof item === 'string'))
    .withMessage('Each item in the tags array must be a string')

];

export const deleteProductValidator = [
  param('sellerId')
    .exists()
    .withMessage('Seller Id param is required')
    .bail()
    .notEmpty()
    .withMessage('Seller Id cannot be empty')
    .bail()
    .isMongoId()
    .withMessage('Invalid Seller Id'),

     param('productId')
    .exists()
    .withMessage('Product Id param is required')
    .bail()
    .notEmpty()
    .withMessage('Product Id cannot be empty')
    .bail()
    .isMongoId()
    .withMessage('Invalid Product Id'),
];

export const updateProductValidator = [
  param('sellerId')
    .exists()
    .withMessage('Seller Id param is required')
    .bail()
    .notEmpty()
    .withMessage('Seller Id cannot be empty')
    .bail()
    .isMongoId()
    .withMessage('Invalid Seller Id'),

     param('productId')
    .exists()
    .withMessage('Product Id param is required')
    .bail()
    .notEmpty()
    .withMessage('Product Id cannot be empty')
    .bail()
    .isMongoId()
    .withMessage('Invalid Product Id'),
];

export const readSingleProductValidator = [

     param('productId')
    .exists()
    .withMessage('Product Id param is required')
    .bail()
    .notEmpty()
    .withMessage('Product Id cannot be empty')
    .bail()
    .isMongoId()
    .withMessage('Invalid Product Id'),
];

export const readSellerProductValidator = [
  param('sellerId')
    .exists()
    .withMessage('Seller Id param is required')
    .bail()
    .notEmpty()
    .withMessage('Seller Id cannot be empty')
    .bail()
    .isMongoId()
    .withMessage('Invalid Seller Id'),

];


