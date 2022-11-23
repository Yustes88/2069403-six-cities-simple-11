import {createAction} from '@reduxjs/toolkit';
import { City, Offers, OfferType, Reviews } from '../types/types';

export const switchCity = createAction('city/switchCity', (city: City) => ({
  payload: city,
}));


export const setSortName = createAction('offers/displaySortedOffers', (sortType: string) => ({
  payload: sortType,
}));

export const setOffers = createAction('data/setOffers', (offersList: { [offerId: number]: OfferType}) => ({
  payload: offersList,
}));

export const setOffer = createAction('data/setOffer', (offer: OfferType) => ({
  payload: offer,
}));

export const setComments = createAction('data/setComments', (commentsList: Reviews) => ({
  payload: commentsList,
}));

export const setLoadingStatus = createAction('data/setLoadingStatus', (isLoading: boolean) => ({
  payload: isLoading,
}));


export const setNearbyOffers = createAction('offers/loadNearbyOffers', (nearbyOffersList: Offers) => ({
  payload: nearbyOffersList,
}));

