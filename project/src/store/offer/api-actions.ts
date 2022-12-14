import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { toast } from 'react-toastify';
import { APIRoute } from '../../const';
import { AppDispatch, State } from '../../types/storeTypes';
import { Comments, Offers, CommentPost } from '../../types/types';
import { setLoadingStatus } from '../client/action';
import { checkCommentsStatus, setComments, setNearbyOffers } from './action';

export const fetchCommentsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (id, {dispatch, extra: api}) => {
    try{
      const {data} = await api.get<Comments>(`${APIRoute.Comments}/${id}`);
      dispatch(setComments(data));
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


export const postCommentsAction = createAsyncThunk<void, CommentPost, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/postComment',
  async({id, comment, rating}, {dispatch, extra: api}) => {
    try{
      dispatch(checkCommentsStatus(true));
      await api.post(`${APIRoute.Comments}/${id}`, {comment, rating});
      dispatch(fetchCommentsAction(id));
      dispatch(checkCommentsStatus(false));
    }catch(error){
      toast.error('Something went wrong, please try again later');
      dispatch(checkCommentsStatus(false));
    }

  }
);
