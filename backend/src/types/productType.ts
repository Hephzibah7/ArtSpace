import mongoose, { Document, Schema } from "mongoose";
export interface IProduct extends Document {
  title: string;
  description: string;
  price?: number;

  productType: "ORIGINAL" | "LIMITED_PRINT" | "DIGITAL";
  category: string;
  artistId:  mongoose.Schema.Types.ObjectId;

  isForSale: boolean;
  status: "ACTIVE" | "ARCHIVED";

  images: {
    primary: string;
    gallery: string[];
  };

  artworkDetails: {
    dimensions: {
      width: number;
      height: number;
      unit: string;
    };

    weight: {
      value: number;
      unit: string;
    };

    orientation: string;
    medium: string;
    style: string;
    frame: string;
    yearCreated: number;
    completionDays: number;
  };

  artisticDetails: {
    isSignedByArtist: boolean;
    moods: string[];
    colorPalette: string[];
    techniquesUsed: string[];
    noteFromArtist: string;
  };

  story: {
    question: string;
    answer: string;
  }[];

  shipping: {
    free: boolean;
    fastDelivery: boolean;

    estimatedDeliveryDays: {
      min: number;
      max: number;
    };
  };

  returnPolicy: {
    eligible: boolean;
    days: number;
  };

  createdAt: Date;
  updatedAt: Date;
}