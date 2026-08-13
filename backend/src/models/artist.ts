import mongoose from "mongoose";
import { IArtist } from "../types/artistType.js";
const ArtistSchema = new mongoose.Schema<IArtist>(
  {
    // ID of the artist's User in PostgreSQL
    userId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    displayName: {
      type: String,
      required: true,
      trim: true,
    },

    bio: {
      type: String,
      default: "",
    },

    profileImage: {
      type: String,
      default: "",
    },

    coverImage: {
      type: String,
      default: "",
    },

    shipsFrom: {
      city: {
        type: String,
        required: true,
      },

      state: {
        type: String,
        default: "",
      },

      country: {
        type: String,
        required: true,
      },
    },

    specialization: {
      type: [String],
      default: [],
    },

    mediums: {
      type: [String],
      default: [],
    },

    styles: {
      type: [String],
      default: [],
    },

    techniques: {
      type: [String],
      default: [],
    },

    yearsOfExperience: {
      type: Number,
      min: 0,
    },

    commission: {
      currentlyAccepting: {
        type: Boolean,
        default: false,
      },

      styles: {
        type: [String],
        default: [],
      },

      startingPrice: {
        type: Number,
        min: 0,
      },

      mediumsOffered: {
        type: [String],
        default: [],
      },

      sizeOptions: {
        type: [String],
        default: [],
      },

      estimatedResponseDays: {
        type: Number,
        min: 0,
      },

      estimatedDeliveryDays: {
        min: {
          type: Number,
          min: 0,
        },

        max: {
          type: Number,
          min: 0,
        },
      },
    },

    socialLinks: {
      instagram: {
        type: String,
        default: "",
      },

      website: {
        type: String,
        default: "",
      },

      twitter: {
        type: String,
        default: "",
      },
    },
  },
  {
    timestamps: true,
  }
);

const Artist=mongoose.model<IArtist>("Artist",ArtistSchema);
export default Artist;