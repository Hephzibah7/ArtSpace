import mongoose from "mongoose";
import { IProduct } from "../types/productType.js";
import { ACTIVE, ARCHIVED, DIGITAL, LIMITED_PRINT, ORIGINAL } from "../utils/constants.js";

const ProductSchema = new mongoose.Schema<IProduct>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    isForSale: {
      type: Boolean,
      default: false,
    },

    price: {
      type: Number,
      min: 0,
    },

    productType: {
      type: String,
      enum: [ORIGINAL, LIMITED_PRINT, DIGITAL],
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    artistId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Artist",
      required: true,
      index: true,
    },



    status: {
      type: String,
      enum: [ACTIVE, ARCHIVED],
      default: ACTIVE,
    },

    images: {
      primary: {
        type: String,
        required: true,
      },

      gallery: {
        type: [String],
        default: [],
      },
    },

    artworkDetails: {
      dimensions: {
        width: {
          type: Number,
          required: true,
        },

        height: {
          type: Number,
          required: true,
        },

        unit: {
          type: String,
          required: true,
        },
      },

      weight: {
        value: {
          type: Number,
        },

        unit: {
          type: String,
        },
      },

      orientation: {
        type: String,
        required: true,
      },

      medium: {
        type: String,
        required: true,
      },

      style: {
        type: String,
        required: true,
      },

      frame: {
        type: String,
        required: true,
      },

      yearCreated: {
        type: Number,
        required: true,
      },

      completionDays: {
        type: Number,
        required: true,
      },
    },

    artisticDetails: {
      isSignedByArtist: {
        type: Boolean,
        default: false,
      },

      moods: {
        type: [String],
        default: [],
        required: true,
      },

      colorPalette: {
        type: [String],
        default: [],
        required: true,
      },

      techniquesUsed: {
        type: [String],
        default: [],
        required: true,
      },

      noteFromArtist: {
        type: String,
        default: "",
        required: true,
      },
    },

    story: [
      {
        question: {
          type: String,
          required: true,
        },

        answer: {
          type: String,
          required: true,
        },
      },
    ],

    shipping: {
      free: {
        type: Boolean,
        default: false,
      },

      fastDelivery: {
        type: Boolean,
        default: false,
      },

      estimatedDeliveryDays: {
        min: {
          type: Number,
        },

        max: {
          type: Number,
        },
      },
    },

    returnPolicy: {
      eligible: {
        type: Boolean,
        default: false,
      },

      days: {
        type: Number,
        default: 0,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model<IProduct>("Product", ProductSchema)

export default Product;