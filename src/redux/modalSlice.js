import { createSlice } from '@reduxjs/toolkit';
// import { act } from 'react-dom/test-utils';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    showModal: false,
  },
  reducers: {
    // showModalChange(state) {
    //   state.showModal = !state.showModal;
    // },
    showModalChange(state, action) {
      state.name = action.payload?.name;
      state.number = action.payload?.number;
      state.id = action.payload?.id;
      state.showModal = !state.showModal;
    },
  },
});

export const { showModalChange } = modalSlice.actions;

// // SELECTORS

export const getShowModal = state => state.modal.showModal;
