import {createAction} from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { City, Offers, OfferType, Reviews } from '../types/types';
import { UserData } from '../types/user-data';

export const switchCity = createAction('city/switchCity', (city: City) => ({
  payload: city,
}));


export const setSortName = createAction('offers/displaySortedOffers', (sortType: string) => ({
  payload: sortType,
}));

export const setOffers = createAction('data/setOffers', (offersList: { [offerId: number]: OfferType}) => ({
  payload: offersList,
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

export const requireAuthorization = createAction('user/requireAuthorization', (authorizationStatus: AuthorizationStatus) => ({
  payload: authorizationStatus,
}));

export const setUserData = createAction('user/setUserData', (userData: UserData) => ({
  payload: userData,
}));

export const setError = createAction('app/setError', (error:string | null) => ({
  payload: error,
}));

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
