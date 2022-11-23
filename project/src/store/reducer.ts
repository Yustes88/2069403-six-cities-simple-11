import { createReducer } from '@reduxjs/toolkit';
import { sortValues } from '../utils/utils';
import { Cities } from '../const';
import { City, Offers, OfferType, Reviews } from '../types/types';
import { setSortName, switchCity, setOffers, setLoadingStatus, setNearbyOffers, setComments, setOffer } from './action';

type ReducerTypes = {
  currentCity: City;
  currentSorting: string;
  offers: { [offerId: number]: OfferType};
  offer: OfferType;
  commentsList: Reviews;
  isLoading: boolean;
  nearbyOffersList: Offers;
};

const initialState: ReducerTypes = {
  currentCity: Cities[0],
  currentSorting: sortValues[0],
  offers: [] as Offers,
  offer: {} as OfferType,
  commentsList: [],
  isLoading: false,
  nearbyOffersList: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(switchCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(setSortName, (state, action) => {
      state.currentSorting = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setComments, (state, action) => {
      state.commentsList = action.payload;
    })
    .addCase(setLoadingStatus, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(setNearbyOffers, (state, action) => {
      state.nearbyOffersList = action.payload;
    });
});

export { reducer };
