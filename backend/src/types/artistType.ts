export interface IArtist extends Document {
  userId: string;

  artistName: string;
  bio: string;

  profileImage?: string;
  coverImage?: string;

  shipsFrom: {
    city: string;
    state: string;
    country: string;
  };

  specializations: string[];
  mediums: string[];
  styles: string[];
  techniques: string[];

  yearsOfExperience?: number;

  commission: {
    currentlyAccepting: boolean;
    styles: string[];
    startingPrice?: number;

    mediumsOffered: string[];
    sizeOptions: string[];

    estimatedResponseDays?: number;

    estimatedDeliveryDays?: {
      min: number;
      max: number;
    };
  };

  socialLinks?: {
    instagram?: string;
    website?: string;
    twitter?: string;
  };

  createdAt: Date;
  updatedAt: Date;
}