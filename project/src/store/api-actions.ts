import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { Offers, OfferType, Reviews } from '../types/types';
import { AppDispatch, State } from '../types/storeTypes';
import { setOffers, setComments, setLoadingStatus, setNearbyOffers, requireAuthorization, setUserData, redirectToRoute } from './action';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { dropToken, saveToken } from '../services/token';
import { store } from './index';
import { UserData } from '../types/user-data';
import { AuthData } from '../types/auth-data';


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
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(setLoadingStatus(false));
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
    try{
      dispatch(setLoadingStatus(true));
      const {data} = await api.get<OfferType>(`${APIRoute.Offers}/${id}`);
      const normalizedOffer: { [offerId: number]: OfferType} = {[data.id]: data};
      dispatch(setOffers(normalizedOffer));
      dispatch(setLoadingStatus(false));
    } catch (error) {
      dispatch(setLoadingStatus(false));
    }
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
    const {data} = await api.get<Reviews>(`${APIRoute.Comments}/${id}`);
    dispatch(setLoadingStatus(false));
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
    const {data} = await api.get<Offers>(`${APIRoute.Offers}/${id}/nearby`);
    dispatch(setLoadingStatus(false));
    dispatch(setNearbyOffers(data));
    dispatch(setLoadingStatus(false));

  },
);


export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async (authData, {dispatch, extra: api}) => {
    try {
      const {data: {token}, data} = await api.post<UserData>(APIRoute.Login, authData);
      saveToken(token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(redirectToRoute(AppRoute.Root));
      dispatch(setUserData(data));
    }
    catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

