import { createReducer } from '@reduxjs/toolkit';
import { Cities } from '../const';
import { City, Offers } from '../types/types';
import { setOffers, switchCity } from './action';

type ReducerTypes = {
  currentCity: City;
  offersList: Offers;
};

const initialState: ReducerTypes = {
  currentCity: Cities[0],
  offersList: [],
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(switchCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offersList = action.payload;
    });
});

export {reducer};
