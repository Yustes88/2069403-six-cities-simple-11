import { createReducer } from '@reduxjs/toolkit';
import { INITIAL_CITY } from '../const';
import { switchCity } from './action';

const initialState = {
  currentCity: INITIAL_CITY,
  offersList: [],
};


const reducer = createReducer(initialState, (builder) => {
  builder.addCase(switchCity, (state, action) => {
    state.currentCity = action.payload;
  });
});

export {reducer};
