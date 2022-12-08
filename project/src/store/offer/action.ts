import { createAction } from '@reduxjs/toolkit';
import { Reviews, Offers } from '../../types/types';

export const setComments = createAction('data/setComments', (commentsList: Reviews) => ({
  payload: commentsList,
}));


export const setNearbyOffers = createAction('offers/loadNearbyOffers', (nearbyOffersList: Offers) => ({
  payload: nearbyOffersList,
}));
