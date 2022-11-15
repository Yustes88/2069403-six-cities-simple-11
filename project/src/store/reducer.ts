import { createReducer } from '@reduxjs/toolkit';
import { filteredOffersByCity } from '../components/utils/utils';
import { INITIAL_CITY } from '../const';
import { displayOffers, switchCity } from './action';

const initialState = {
  currentCity: INITIAL_CITY,
  offersList: filteredOffersByCity(INITIAL_CITY),
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(switchCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(displayOffers, (state, action) => {
      state.offersList = filteredOffersByCity(action.payload);
    });
});

export {reducer};
