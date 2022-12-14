import { Cities, Sorting } from '../const';
import { City, OfferType } from '../types/types';

export const filteredOffersByCity = (currentCity: City, offers: { [offerId: number]: OfferType}) =>
  Object.values(offers).filter((offer) => offer.city.name === currentCity.name);

export const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);

  return date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
};

export const sortValues = Object.values(Sorting);

export const getRandomCity = () => {
  const index = Math.floor(Math.random() * Cities.length);

  return Cities[index];
};
