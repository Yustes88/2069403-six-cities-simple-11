export type OfferType = {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
  id: number;
  images: string[];
  isPremium: boolean;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
  }


export type ReviewType = {
  id: number;
  user : {
    id: number;
    isPro: boolean;
    name: string;
    avatarUrl: string;
  };
  rating: number;
  date: string;
  comment: string;
}

export type CommentPost = {
  id: number;
  comment: string;
  rating: number | null;
}

export type Location = {
    latitude: number;
    longitude: number;
    zoom?: number;
}

export type City = {
  location: Location;
  name: string;
};

export type Offers = OfferType[];


export type Reviews = ReviewType[];
