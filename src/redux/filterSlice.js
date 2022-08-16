import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    filterChange(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterChange } = filterSlice.actions;

// // SELECTORS

export const getFilterValue = state => state.filter.filter;
