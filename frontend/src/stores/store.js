import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalSlice';
import { feedAPI } from '../apis/feedAPI';
import { tiktokAPI } from '../apis/tiktokAPI';

export default configureStore({
  reducer: {
    modal: modalReducer,
    [feedAPI.reducerPath]: feedAPI.reducer,
    [tiktokAPI.reducerPath]: tiktokAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tiktokAPI.middleware, feedAPI.middleware),
});
