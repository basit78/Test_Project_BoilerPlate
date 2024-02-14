import {combineReducers} from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import appSlice from './slices/appSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  app: appSlice,
});

export default rootReducer;
