
import {validateRequiredFieldString, validateOptionalFieldString,
    validateOptionalFieldNumber, validateRequiredFieldArray,
    validateRequiredFieldBoolean, validateMongoIdParam, validateRequiredFieldNumber
 } from './validationRequired.js';


 export const createProductValidator = [
    validateRequiredFieldString("title","Please enter the title"),
    validateRequiredFieldString("description", "Please enter the description of the artwork"),
    validateOptionalFieldNumber("price"),
    validateRequiredFieldString("productType","Please enter the type of the product"),
    validateRequiredFieldString("category","Please enter a category"),
    validateRequiredFieldBoolean("isForSale","Please enter whether the artwork is for sale or not"),
    validateRequiredFieldString("status","Please enter the status of the product"),
    validateRequiredFieldString("images.primary","Primary Image is Required"),
    validateRequiredFieldArray("images.gallery","Image gallery of the artwork is Required"),
    validateRequiredFieldNumber("artworkDetails.dimensions.width","Width is Required"),
    validateRequiredFieldNumber("artworkDetails.dimensions.height","Height of the artwork is required"),
    validateRequiredFieldString("artworkdetails.dimensions.unit","Unit of the artwork is required"),
    validateRequiredFieldNumber("artworkDetails.weight.value","Value of the weight is Required"),
    validateRequiredFieldString("artworkDetails.weight.unit","unit of the wight is required"),
    validateRequiredFieldString("artworkDetails.orientation", "Orientation is required"),
    validateRequiredFieldString("medium","Medium is Required"),
    validateRequiredFieldString("style","style of the artwork is required"),
    validateRequiredFieldString("frame","Frame of the artwork is required"),
    validateRequiredFieldNumber("yearCreated","Year is Required"),
    validateRequiredFieldNumber("completionDays","Days took for the artwork is required"),
    validateRequiredFieldBoolean("artisticDetails.isSignedByArtist","isSignedByArtist field is required"),
    validateRequiredFieldArray("artisticDetails.moods","Enter the artist moods"),
    validateRequiredFieldArray("artisticDetails.colorPalette","Enter the color palette of the artwork"),
    validateRequiredFieldArray("artisticDetails.techniquesUsed", "Enter the techniques used"),
    validateRequiredFieldString("artisticDetails.noteFromArtist","Enter a nite for your audience"),
    validateRequiredFieldBoolean("shipping.free","Enter whether shipping is free or not"),
    validateRequiredFieldBoolean("shipping.fastDelivery","Enter shipping will be fast deivery or not"),
    validateRequiredFieldString("shipping.estimatedDeliveryDays.min","Enter delivery details"),
    validateRequiredFieldString("shipping.estimatedDeliveryDays.max","Enter delivery details"),
    validateRequiredFieldString("certificateOfAuthenticity","Certificate of authenticity is required"),
    validateRequiredFieldBoolean("returnPolicy","Enter whether the artwork is eligible for return policy"),
    validateRequiredFieldNumber("days","Enter the number of days required for returning of the product"),
    validateMongoIdParam("artistId")
 ]

 export const getProductValidator=[
    validateMongoIdParam("productId")
 ]

 export const deleteProductValidator=[
    validateMongoIdParam("productId")
 ]

 export const updateProductValidator=[
    validateMongoIdParam("productId")
 ]