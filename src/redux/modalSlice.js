import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    showModal: false,
  },
  reducers: {
    showModalChange(state) {
      state.showModal = !state.showModal;
    },
  },
});

export const { showModalChange } = modalSlice.actions;

// // SELECTORS

export const getShowModal = state => state.modal.showModal;
