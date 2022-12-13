import { createAction } from '@reduxjs/toolkit';
import { Reviews, Offers } from '../../types/types';

export const setReviews = createAction('data/setReviews', (reviewsList: Reviews) => ({
  payload: reviewsList,
}));


export const setNearbyOffers = createAction('offers/loadNearbyOffers', (nearbyOffersList: Offers) => ({
  payload: nearbyOffersList,
}));


export const checkReviewsStatus = createAction('offer/checkReviewsStatus', (sendindStatus: boolean) => ({
  payload: sendindStatus,
}));
