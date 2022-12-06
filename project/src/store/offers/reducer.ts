import { createReducer } from '@reduxjs/toolkit';
import { OfferType } from '../../types/types';
import { setOffers } from './action';

export type OffersReducerTypes =
{[offerId: number]: OfferType};

const initialState: OffersReducerTypes = {};

const offers = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffers, (state, action) => {
      state = action.payload;
    });
});

export { offers };
