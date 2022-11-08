export type OfferType = {
  id: string;
  pictures: string[];
  isPremium: boolean;
  pricePerNight: number;
  propertyName: string;
  lat: number;
  lng: number;
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
  date: string;
  reviewText: string;
}

export type City = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export type Offers = OfferType[];


