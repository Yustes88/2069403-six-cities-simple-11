import { createReducer } from '@reduxjs/toolkit';
import { Reviews, Offers } from '../../types/types';
import { setComments, setNearbyOffers } from './action';

export type offerReducerTypes = {
  commentsList: Reviews;
  nearbyOffersList: Offers;
};

const initialState: offerReducerTypes = {
  commentsList: [],
  nearbyOffersList: [],
};

const offerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setComments, (state, action) => {
      state.commentsList = action.payload;
    })
    .addCase(setNearbyOffers, (state, action) => {
      state.nearbyOffersList = action.payload;
    });
});

export { offerReducer };
