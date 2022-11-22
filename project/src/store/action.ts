import {createAction} from '@reduxjs/toolkit';
import { City, Offers, Reviews } from '../types/types';

export const switchCity = createAction('city/switchCity', (city: City) => ({
  payload: city,
}));

export const setOffers = createAction('city/displayOffers', (offersList: Offers) => ({
  payload: offersList,
}));


export const setSortName = createAction('offers/displaySortedOffers', (sortType: string) => ({
  payload: sortType,
}));

export const loadOffers = createAction('data/loadOffers', (offersList: Offers) => ({
  payload: offersList,
}));

export const loadComments = createAction('data/loadComments', (commentsList: Reviews) => ({
  payload: commentsList,
}));

export const setLoadingStatus = createAction('data/setLoadingStatus', (isLoading: boolean) => ({
  payload: isLoading,
}));


export const loadNearbyOffers = createAction('offers/loadNearbyOffers', (nearbyOffersList: Offers) => ({
  payload: nearbyOffersList,
}));
