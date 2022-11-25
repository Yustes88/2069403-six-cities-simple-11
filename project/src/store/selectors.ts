import { filteredOffersByCity } from '../utils/utils';
import { City, OfferType } from '../types/types';
import { createSelector } from '@reduxjs/toolkit';

export const getFilteredOffers = (state: {
  currentCity: City;
  offers: { [offerId: number]: OfferType};
}) => {
  const filteredOffers = filteredOffersByCity(state.currentCity, state.offers);
  return filteredOffers;
};


const getSortingName = (state: { currentSorting: string}) => state.currentSorting;

export const getSortedOffers = createSelector(
  getFilteredOffers,
  getSortingName,
  (filteredOffers, currentSorting) => {
    switch (currentSorting) {
      case 'Price: low to high':
        return filteredOffers.sort((a, b) => a.price - b.price);
      case 'Price: high to low':
        return filteredOffers.sort((a, b) => b.price - a.price);
      case 'Top rated first':
        return filteredOffers.sort((a, b) => b.rating - a.rating);
      default:
        return filteredOffers;
    }
  }
);


export const getOfferById = (offerId:number) => (store:{
  offers: { [offerId: number]: OfferType};
}) => Object.values(store.offers).find(({ id }) => id === offerId);
