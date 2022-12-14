import { createAction } from '@reduxjs/toolkit';
import { Comments, Offers } from '../../types/types';

export const setComments = createAction('data/setComments', (commentsList: Comments) => ({
  payload: commentsList,
}));


export const setNearbyOffers = createAction('offers/loadNearbyOffers', (nearbyOffersList: Offers) => ({
  payload: nearbyOffersList,
}));


export const checkCommentsStatus = createAction('offer/checkCommentsStatus', (sendingStatus: boolean) => ({
  payload: sendingStatus,
}));
