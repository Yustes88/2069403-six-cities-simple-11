import { createReducer } from '@reduxjs/toolkit';
import { Comments, Offers } from '../../types/types';
import { checkCommentsStatus, setComments, setNearbyOffers } from './action';

export type OfferReducerTypes = {
  commentsList: Comments;
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
    .addCase(checkCommentsStatus, (state, action) => {
      state.sendingStatus = action.payload;
    });
});

export { offerReducer };
