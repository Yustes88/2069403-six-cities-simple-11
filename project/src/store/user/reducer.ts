import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import { AuthorizedUser } from '../../types/auth-data';
import { requireAuthorization, setUserData } from './action';


export type userReducerTypes = {
  authorizationStatus: AuthorizationStatus;
  userData: AuthorizedUser | null;
};

const initialState: userReducerTypes = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    });
});

export { userReducer };
