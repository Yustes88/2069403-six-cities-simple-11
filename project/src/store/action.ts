import {createAction} from '@reduxjs/toolkit';
import { City, Offers } from '../types/types';

export const switchCity = createAction('city/switchCity', (city: City) => ({
  payload: city,
}));

export const displayOffers = createAction('city/displayOffers', (offersList: Offers) => ({
  payload: offersList,
}));
