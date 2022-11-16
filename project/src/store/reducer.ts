import { createReducer } from '@reduxjs/toolkit';
import { Cities } from '../const';
import { offerMock } from '../mocks/offerMock';
import { City, Offers } from '../types/types';
import { displayOffers, switchCity } from './action';

type ReducerTypes = {
  currentCity: City;
  offersList: Offers;
};

const initialState: ReducerTypes = {
  currentCity: Cities[0],
  offersList: offerMock,
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(switchCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(displayOffers, (state, action) => {
      state.offersList = action.payload;
    });
});

export {reducer};
