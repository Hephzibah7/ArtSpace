import { check } from 'express-validator';
import { param } from 'express-validator';


export const createUserValidator = [
  check('email', 'Please Enter a valid E-mail Address')
    .isEmail()
    .normalizeEmail({
      gmail_remove_dots: true
    }),

  check('password', 'Password is Required.')
    .not()
    .isEmpty(),

  check('name', 'Name is Required.')
    .not()
    .isEmpty(),

];


export const deleteUserValidator = [
  param('id')
    .exists()
    .withMessage('User Id param is required')
    .bail()
    .notEmpty()
    .withMessage('User Id cannot be empty')
    
];

export const addBuyerRoleValidator = [
    param('id')
    .exists()
    .withMessage('User Id param is required')
    .bail()
    .notEmpty()
    .withMessage('User Id cannot be empty')
    
]


export const getUserValidator = [
    param('id')
    .exists()
    .withMessage('User Id param is required')
    .bail()
    .notEmpty()
    .withMessage('User Id cannot be empty')
    
    
]

export const loginUserValidator = [
  check('email', 'Please Enter a valid E-mail Address')
    .isEmail()
    .normalizeEmail({
      gmail_remove_dots: true
    }),

  check('password', 'Password is Required.')
    .not()
    .isEmpty(),

];


