import { createAction } from '@reduxjs/toolkit';
import { OfferType } from '../../types/types';

export const setOffers = createAction('data/setOffers', (offersList: { [offerId: number]: OfferType}) => ({
  payload: offersList,
}));


