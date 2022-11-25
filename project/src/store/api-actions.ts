import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { Offers, OfferType, Reviews } from '../types/types.js';
import { AppDispatch, State } from '../types/storeTypes';
import { setOffers, setComments, setLoadingStatus, setNearbyOffers } from './action';
import { APIRoute } from '../const';


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
    const {data, status} = await api.get<Offers>(APIRoute.Offers);
    if(status === 400 || status === 404) {
      dispatch(setLoadingStatus(false));
    }
    const normalizedOffers = processOffers(data);
    dispatch(setOffers(normalizedOffers));
    dispatch(setLoadingStatus(false));

  },
);

export const fetchOfferAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (id, {dispatch, extra: api}) => {
    dispatch(setLoadingStatus(true));
    const {data, status} = await api.get<OfferType>(`${APIRoute.Offers}/${id}`);
    if(status === 400 || status === 404) {
      dispatch(setLoadingStatus(false));
    }
    const normalizedOffer: { [offerId: number]: OfferType} = {[data.id]: data};
    dispatch(setOffers(normalizedOffer));
    dispatch(setLoadingStatus(false));

  },
);


export const fetchReviewsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (id, {dispatch, extra: api}) => {
    dispatch(setLoadingStatus(true));
    const {data, status} = await api.get<Reviews>(`${APIRoute.Comments}/${id}`);
    if(status === 400 || status === 404) {
      dispatch(setLoadingStatus(false));
    }
    dispatch(setComments(data));

  }
);

export const fetchNearbyOffersAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyOffers',
  async (id, {dispatch, extra: api}) => {
    const {data, status} = await api.get<Offers>(`${APIRoute.Offers}/${id}/nearby`);
    if(status === 400 || status === 404) {
      dispatch(setLoadingStatus(false));
    }
    dispatch(setNearbyOffers(data));
    dispatch(setLoadingStatus(false));

  },
);

