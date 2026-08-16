import { check, param } from 'express-validator';

// Reusable validation helper function
export const validateRequiredFieldString = (fieldName:string, message:string) => {
  return check(fieldName, message)
    .not()
    .isEmpty()
    .isString(); // Optional: ensures the input is actually a string
};
export const validateRequiredFieldArray = (fieldName:string, message:string) => {
  return [
    // 1. Ensure the field itself is an array and not empty
    check(fieldName, message).isArray({ min: 1 }),
    
    // 2. Ensure every individual element inside the array is a valid string
    check(`${fieldName}.*`, 'Array items must be non-empty strings')
      .not()
      .isEmpty()
      .isString()
  ];
};
export const validateRequiredFieldBoolean = (fieldName:string, message:string) => {
  return check(fieldName, message)
    .not()
    .isEmpty()
    .isBoolean(); 
};

export const validateOptionalFieldString = (fieldName:string) => {
  return check(fieldName).optional().isString();
};
export const validateOptionalFieldNumber = (fieldName:string) => {
  return check(fieldName).optional().isNumeric();
};
export const validateMongoIdParam = (paramName:string, entityName = 'ID') => {
  return param(paramName)
    .exists()
    .withMessage(`${entityName} param is required`)
    .bail()
    .notEmpty()
    .withMessage(`${entityName} cannot be empty`)
    .bail()
    .isMongoId()
    .withMessage(`Invalid ${entityName}`);
};
