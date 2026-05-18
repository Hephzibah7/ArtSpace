import mongoose from "mongoose";
import { AVAILABLE, RESERVED, SOLD } from "../utils/constants.js";

const productSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  imageUrl: {
    type: String,
    required: true
  },

  category: {
    type: String,
    required: true
  },

  medium: {
    type: String,
    required: true
  },

  dimensions: {
    type: String,
    required: true
  },

  tags: [{
    type: String,
    required: true
  }],

  sellerId: {
    type: String,
    required: true
  },

  reservedBy:{
  type:String,
  default:null
},


reservationExpiresAt: {
  type: Date,
  default: null
},

  status: {
    type: String,

    enum: [
     AVAILABLE,
     RESERVED,
     SOLD
    ],

    default: "AVAILABLE"
  }

}, {
  timestamps: true
}




);

const Product =  mongoose.model(
  "Product",
  productSchema
);

export default Product;