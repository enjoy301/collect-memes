import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalText: '',
  isModalOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setText: (state, action) => {
      state.modalText = action.payload;
    },
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { setText, openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
