import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthorizationStatus, AppRoute } from '../../const';
import { saveToken, dropToken } from '../../services/token';
import { AuthorizedUser, AuthData } from '../../types/auth-data';
import { AppDispatch, State } from '../../types/storeTypes';
import { redirectToRoute } from '../client/action';
import { requireAuthorization, setUserData } from './action';


export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const data = await api.get<AuthorizedUser>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserData(data.data));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
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
      const {data} = await api.post<AuthorizedUser>(APIRoute.Login, authData);
      saveToken(data.token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserData(data));
      dispatch(redirectToRoute(AppRoute.Root));

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

