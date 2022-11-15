// export type OfferType = {
//   id: string;
//   pictures: string[];
//   isPremium: boolean;
//   pricePerNight: number;
//   propertyName: string;
//   lat: number;
//   lng: number;
//   propertyDescription: string[];
//   propertyType: string;
//   rate: number;
//   bedroomNumber: number;
//   maxGuests: number;
//   houseItems: string[];
//   host: Host;
//   reviews: Review[];
// }

export type OfferType = {
  bedrooms: number;
  city: {
    location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  name: string;
  };
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

// type Host = {
//     avatar: string;
//     hostName: string;
//     isPro: boolean;
// }

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

export type City = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export type Offers = OfferType[];


export type Reviews = ReviewType[];
