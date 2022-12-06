import { createReducer } from '@reduxjs/toolkit';
import { OfferType } from '../../types/types';
import { setOffers } from './action';

export type OffersReducerTypes = {
  offers: {[offerId: number]: OfferType};
};

const initialState: OffersReducerTypes = {
  offers: {},
};

const offersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export { offersReducer };
