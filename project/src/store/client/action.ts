import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../../const';
import { City } from '../../types/types';

export const switchCity = createAction('city/switchCity', (city: City) => ({
  payload: city,
}));


export const setSortName = createAction('offers/displaySortedOffers', (sortType: string) => ({
  payload: sortType,
}));


export const setLoadingStatus = createAction('data/setLoadingStatus', (isLoading: boolean) => ({
  payload: isLoading,
}));

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
