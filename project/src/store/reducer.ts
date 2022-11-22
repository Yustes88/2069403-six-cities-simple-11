import { createReducer } from '@reduxjs/toolkit';
import { sortValues } from '../utils/utils';
import { Cities } from '../const';
import { City, Offers, Reviews } from '../types/types';
import { setSortName, setOffers, switchCity, loadOffers, loadComments, setLoadingStatus, loadNearbyOffers } from './action';

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
  isLoading: true,
  nearbyOffersList: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(switchCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offersList = action.payload;
    })
    .addCase(setSortName, (state, action) => {
      state.currentSorting = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.commentsList = action.payload;
    })
    .addCase(setLoadingStatus, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffersList = action.payload;
    });
});

export { reducer };
