import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalText: '',
  isModalOpen: false,
  modalType: '',
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
    setModalType: (state, action) => {
      state.modalType = action.payload;
    },
  },
});

export const { setText, openModal, closeModal, setModalType } =
  modalSlice.actions;

export default modalSlice.reducer;
