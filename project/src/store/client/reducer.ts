import { createReducer } from '@reduxjs/toolkit';
import { Cities } from '../../const';
import { City } from '../../types/types';
import { sortValues } from '../../utils/utils';
import { switchCity, setSortName, setLoadingStatus } from './action';

export type ClientReducerTypes = {
  currentCity: City;
  currentSorting: string;
  isLoading: boolean;
};

const initialState: ClientReducerTypes = {
  currentCity: Cities[0],
  currentSorting: sortValues[0],
  isLoading: true,
};

const clientReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(switchCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(setSortName, (state, action) => {
      state.currentSorting = action.payload;
    })
    .addCase(setLoadingStatus, (state, action) => {
      state.isLoading = action.payload;
    });
});

export { clientReducer };
