import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    showModal: false,
  },
  reducers: {
    showModalChange(state, action) {
      state.name = action.payload?.name;
      state.number = action.payload?.number;
      state.id = action.payload?.id;
      state.showModal = !state.showModal;
    },
  },
});

export const { showModalChange } = modalSlice.actions;
