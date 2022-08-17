import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import authOperations from './auth-operations';

const initialState = {
  //   user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loggedIn(state, actions) {
      state.token = actions.payload;
      state.isLoggedIn = true;
    },
  },
  //   extraReducers: {
  //     [authOperations.register.fulfilled](state, action) {
  //       state.user = action.payload.user;
  //       state.token = action.payload.token;
  //       state.isLoggedIn = true;
  //     },
  //     [authOperations.logIn.fulfilled](state, action) {
  //       state.user = action.payload.user;
  //       state.token = action.payload.token;
  //       state.isLoggedIn = true;
  //     },
  //     [authOperations.logOut.fulfilled](state, action) {
  //       state.user = { name: null, email: null };
  //       state.token = null;
  //       state.isLoggedIn = false;
  //     },
  //     [authOperations.fetchCurrentUser.fulfilled](state, action) {
  //       state.user = action.payload;
  //       state.isLoggedIn = true;
  //     },
  //   },
});

const persistConfig = {
  key: 'auth',
  version: 1,
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);

export const { loggedIn } = authSlice.actions;

export default authSlice;
