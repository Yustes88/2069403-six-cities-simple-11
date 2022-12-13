import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { toast } from 'react-toastify';
import { APIRoute } from '../../const';
import { AppDispatch, State } from '../../types/storeTypes';
import { Reviews, Offers, ReviewPost } from '../../types/types';
import { setLoadingStatus } from '../client/action';
import { checkReviewsStatus, setReviews, setNearbyOffers } from './action';

export const fetchReviewsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (id, {dispatch, extra: api}) => {
    try{
      const {data} = await api.get<Reviews>(`${APIRoute.Reviews}/${id}`);
      dispatch(setReviews(data));
    }catch(error) {
      dispatch(setLoadingStatus(false));
    }

  }
);

export const fetchNearbyOffersAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyOffers',
  async (id, {dispatch, extra: api}) => {
    try{
      dispatch(setLoadingStatus(true));
      const {data} = await api.get<Offers>(`${APIRoute.Offers}/${id}/nearby`);
      dispatch(setNearbyOffers(data));
      dispatch(setLoadingStatus(false));
    }catch(error){
      dispatch(setLoadingStatus(false));
    }


  },
);


export const postReviewAction = createAsyncThunk<void, ReviewPost, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/postReview',
  async({id, review, rating}, {dispatch, extra: api}) => {
    try{
      dispatch(checkReviewsStatus(true));
      await api.post(`${APIRoute.Reviews}/${id}`, {review, rating});
      dispatch(fetchReviewsAction(id));
      dispatch(checkReviewsStatus(false));
    }catch(error){
      toast.error('Something went wrong, please try again later');
      dispatch(checkReviewsStatus(false));
    }

  }
);
