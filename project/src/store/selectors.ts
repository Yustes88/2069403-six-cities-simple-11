import { filteredOffersByCity } from '../utils/utils';
import { createSelector } from '@reduxjs/toolkit';
import { State } from '../types/storeTypes';

export const getFilteredOffers = (state: State) => {
  const filteredOffers = filteredOffersByCity(state.clientReducer.currentCity, state.offers);
  return filteredOffers;
};


const getSortingName = (state: State) => state.clientReducer.currentSorting;

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


export const getOfferById = (offerId:number) => (store: State) => Object.values(store.offers).find(({ id }) => id === offerId);
