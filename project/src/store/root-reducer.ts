import { combineReducers } from '@reduxjs/toolkit';
import { clientReducer } from './client/reducer';
import { offerReducer } from './offer/reducer';
import { offers } from './offers/reducer';
import { userReducer } from './user/reducer';


export const rootReducer = combineReducers({
  userReducer,
  offers,
  offerReducer,
  clientReducer
});
