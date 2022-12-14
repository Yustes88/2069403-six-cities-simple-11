import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { AppDispatch, State } from '../../types/storeTypes';
import { Offers, OfferType } from '../../types/types';
import { setLoadingStatus } from '../client/action';
import { setOffers } from './action';


function processOffers(offers: Offers): State['offers'] {
  const result: State['offers'] = {};

  offers.forEach((offer) =>{
    result[offer.id] = offer;
  });

  return result;
}

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoadingStatus(true));
    try{
      const {data} = await api.get<Offers>(APIRoute.Offers);
      const normalizedOffers = processOffers(data);
      dispatch(setOffers(normalizedOffers));
      dispatch(setLoadingStatus(false));
    }catch(error) {
      dispatch(setLoadingStatus(false));
    }
  },
);

export const fetchOfferAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (id, {dispatch, extra: api}) => {
    try{
      const {data} = await api.get<OfferType>(`${APIRoute.Offers}/${id}`);
      const normalizedOffer: { [offerId: number]: OfferType} = {[data.id]: data};
      dispatch(setOffers(normalizedOffer));
    } catch (error) {
      dispatch(setLoadingStatus(false));
    }
  },
);
