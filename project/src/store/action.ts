import {createAction} from '@reduxjs/toolkit';
import { City, Offers, Reviews } from '../types/types';

export const switchCity = createAction('city/switchCity', (city: City) => ({
  payload: city,
}));

export const setOffersList = createAction('city/displayOffers', (offersList: Offers) => ({
  payload: offersList,
}));


export const setSortName = createAction('offers/displaySortedOffers', (sortType: string) => ({
  payload: sortType,
}));

export const setOffers = createAction('data/loadOffers', (offersList: Offers) => ({
  payload: offersList,
}));

export const setComments = createAction('data/loadComments', (commentsList: Reviews) => ({
  payload: commentsList,
}));

export const setLoadingStatus = createAction('data/setLoadingStatus', (isLoading: boolean) => ({
  payload: isLoading,
}));


export const setNearbyOffers = createAction('offers/loadNearbyOffers', (nearbyOffersList: Offers) => ({
  payload: nearbyOffersList,
}));

