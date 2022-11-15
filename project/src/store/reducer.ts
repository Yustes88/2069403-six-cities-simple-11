import { createReducer } from '@reduxjs/toolkit';
import { INITIAL_CITY } from '../const';
import { switchCity } from './action';

const initialState = {
  currentCity: INITIAL_CITY,
  offersList: ['efwg', 'dfwgvw', 'sbvbvb'],
};


const reducer = createReducer(initialState, (builder) => {
  builder.addCase(switchCity, (state, action) => {
    state.currentCity = action.payload;
  });
  // .addCase(displayOffers, (state, action) => {
  //   state.offersList = action.payload;
  // });
});

export {reducer};
