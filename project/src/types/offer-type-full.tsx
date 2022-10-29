export type OfferTypeFull = {
  id: number;
  pictures: string[];
  isPremium?: boolean;
  pricePerNight: number;
  propertyName: string;
  propertyDescription: string[];
  propertyType: string;
  rate: number;
  bedroomNumber: number;
  maxGuests: number;
  houseItems: string[];
  host: Host;
  reviews: Review[];
}

type Host = {
    avatar: string;
    hostName: string;
    isPro: boolean;
}

type Review = {
  avatar: string;
  userName: string;
  rateReview: number;
  date?: string;
  reviewText: string;
}

export type Offers = OfferTypeFull[];


