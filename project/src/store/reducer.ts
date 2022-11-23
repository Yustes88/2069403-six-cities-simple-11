import { createReducer } from '@reduxjs/toolkit';
import { sortValues } from '../utils/utils';
import { Cities } from '../const';
import { City, Offers, Reviews } from '../types/types';
import { setSortName, setOffersList, switchCity, setOffers, setLoadingStatus, setNearbyOffers, setComments } from './action';

type ReducerTypes = {
  currentCity: City;
  offersList: Offers;
  currentSorting: string;
  offers: Offers;
  commentsList: Reviews;
  isLoading: boolean;
  nearbyOffersList: Offers;
};

const initialState: ReducerTypes = {
  currentCity: Cities[0],
  offersList: [],
  currentSorting: sortValues[0],
  offers: [] as Offers,
  commentsList: [],
  isLoading: false,
  nearbyOffersList: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(switchCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(setOffersList, (state, action) => {
      state.offersList = action.payload;
    })
    .addCase(setSortName, (state, action) => {
      state.currentSorting = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
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
