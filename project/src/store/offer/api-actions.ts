import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { AppDispatch, State } from '../../types/storeTypes';
import { Reviews, Offers, CommentPost } from '../../types/types';
import { setLoadingStatus } from '../client/action';
import { setComments, setNearbyOffers } from './action';

export const fetchReviewsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (id, {dispatch, extra: api}) => {
    try{
      dispatch(setLoadingStatus(true));
      const {data} = await api.get<Reviews>(`${APIRoute.Comments}/${id}`);
      dispatch(setComments(data));
      dispatch(setLoadingStatus(false));
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


export const postCommentAction = createAsyncThunk<void, CommentPost, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/postComment',
  async({id, comment, rating}, {dispatch, extra: api}) => {
    try{
      dispatch(setLoadingStatus(true));
      await api.post(`${APIRoute.Comments}/${id}`, {comment, rating});
      dispatch(fetchReviewsAction(id));
      dispatch(setLoadingStatus(false));
    }catch(error){
      dispatch(setLoadingStatus(false));
    }

  }
);
