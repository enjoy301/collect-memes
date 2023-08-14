import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalSlice';
import { feedAPI } from '../apis/feedAPI';

export default configureStore({
  reducer: {
    modal: modalReducer,
    [feedAPI.reducerPath]: feedAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(feedAPI.middleware),
});
