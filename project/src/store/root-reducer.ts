import { combineReducers } from '@reduxjs/toolkit';
import { clientReducer } from './client/reducer';
import { offerReducer } from './offer/reducer';
import { offersReducer } from './offers/reducer';
import { userReducer } from './user/reducer';


export const rootReducer = combineReducers({
  userReducer,
  offersReducer,
  offerReducer,
  clientReducer
});
