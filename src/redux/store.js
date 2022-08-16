import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import { contactsApi } from './contactsSlice';
import { modalSlice } from './modalSlice';

export const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    filter: filterSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
