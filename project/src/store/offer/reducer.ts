import { createReducer } from '@reduxjs/toolkit';
import { Reviews, Offers } from '../../types/types';
import { checkReviewsStatus, setReviews, setNearbyOffers } from './action';

export type OfferReducerTypes = {
  reviewsList: Reviews;
  nearbyOffersList: Offers;
  sendingStatus: boolean;
};

const initialState: OfferReducerTypes = {
  reviewsList: [],
  nearbyOffersList: [],
  sendingStatus: false,
};

const offerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setReviews, (state, action) => {
      state.reviewsList = action.payload;
    })
    .addCase(setNearbyOffers, (state, action) => {
      state.nearbyOffersList = action.payload;
    })
    .addCase(checkReviewsStatus, (state, action) => {
      state.sendingStatus = action.payload;
    });
});

export { offerReducer };
