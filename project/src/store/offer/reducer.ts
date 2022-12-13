import { createReducer } from '@reduxjs/toolkit';
import { Reviews, Offers } from '../../types/types';
import { checkCommentStatus, setComments, setNearbyOffers } from './action';

export type OfferReducerTypes = {
  commentsList: Reviews;
  nearbyOffersList: Offers;
  sendingStatus: boolean;
};

const initialState: OfferReducerTypes = {
  commentsList: [],
  nearbyOffersList: [],
  sendingStatus: false,
};

const offerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setComments, (state, action) => {
      state.commentsList = action.payload;
    })
    .addCase(setNearbyOffers, (state, action) => {
      state.nearbyOffersList = action.payload;
    })
    .addCase(checkCommentStatus, (state, action) => {
      state.sendingStatus = action.payload;
    });
});

export { offerReducer };
