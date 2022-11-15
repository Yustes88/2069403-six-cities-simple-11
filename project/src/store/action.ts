import {createAction} from '@reduxjs/toolkit';

export const switchCity = createAction('city/switchCity', (city: string) => ({
  payload: city,
}));

export const displayOffers = createAction('city/switchCity', (cityTitle: string) => ({
  payload: cityTitle,
}));
