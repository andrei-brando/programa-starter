import { createSlice } from '@reduxjs/toolkit';

const initialState = 0;

const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: (state, action) => parseInt(state) + parseInt(action.payload),
    decrease: (state, action) => parseInt(state) - parseInt(action.payload),
  },
});

export default slice.reducer;
export const { increase, decrease } = slice.actions;
