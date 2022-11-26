import { City } from './types/types';

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Offer = 'offer/',
  Id = ':id',
  NotFound = '*',
}

export const URL_MARKER_DEFAULT =
  'img/pin.svg';

export const URL_MARKER_CURRENT =
  'img/pin-active.svg';

export const Cities: City[] = [{
  location: {
    latitude: 48.864716,
    longitude: 2.349014,
    zoom: 12,
  },
  name: 'Paris',
},{
  location: {
    latitude: 52.377956,
    longitude: 4.897070,
    zoom: 12,
  },
  name: 'Amsterdam',
}, {
  location: {
    latitude: 50.935173,
    longitude: 6.953101,
    zoom: 12,
  },
  name: 'Cologne',
}, {
  location: {
    latitude: 50.85045,
    longitude:  4.34878,
    zoom: 12,
  },
  name: 'Brussels',
},
{
  location: {
    latitude: 53.551086,
    longitude:  9.993682,
    zoom: 12,
  },
  name: 'Hamburg',
}, {
  location: {
    latitude: 51.233334,
    longitude:  6.783333,
    zoom: 12,
  },
  name: 'Dusseldorf',
}
];

export const Sorting = {
  POPULAR: 'Popular',
  LOW_TO_HIGH: 'Price: low to high',
  HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED: 'Top rated first',
};

export enum APIRoute {
  Offers = '/hotels',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}


export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const TIMEOUT_SHOW_ERROR = 5000;
