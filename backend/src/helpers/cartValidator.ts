import {validateRequiredFieldString, validateOptionalFieldString,
    validateOptionalFieldNumber, validateRequiredFieldArray,
    validateRequiredFieldBoolean, validateMongoIdParam, validateRequiredFieldNumber
 } from './validationRequired.js';

 export const addItemValidator=[
    validateMongoIdParam("productId"),
    validateRequiredFieldNumber("quantity","Quantity of the product is required")
 ]

 export const updateItemValidator = [
    validateMongoIdParam("productId"),
    validateRequiredFieldNumber("quantity","Quantity of the product is required")

 ]

 export const removeItemValidator = [
    validateMongoIdParam("productId"),

 ]