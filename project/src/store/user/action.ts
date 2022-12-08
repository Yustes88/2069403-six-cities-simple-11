import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import { AuthorizedUser } from '../../types/auth-data';

export const requireAuthorization = createAction('user/requireAuthorization', (authorizationStatus: AuthorizationStatus) => ({
  payload: authorizationStatus,
}));

export const setUserData = createAction('user/setUserData', (userData: AuthorizedUser) => ({
  payload: userData,
}));
