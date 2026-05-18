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
    type: String
  },

  medium: {
    type: String
  },

  dimensions: {
    type: String
  },

  tags: [{
    type: String
  }],

  sellerId: {
    type: String,
    required: true
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
});

const Product =  mongoose.model(
  "Product",
  productSchema
);

export default Product;