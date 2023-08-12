import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

export const modalSlice = createSlice({
  name: 'isModalOpen',
  initialState,
  reducers: {
    setTrue: (state) => {
      state.value = true;
    },
    setFalse: (state) => {
      state.value = false;
    },
  },
});

export const { setTrue, setFalse } = modalSlice.actions;

export default modalSlice.reducer;
