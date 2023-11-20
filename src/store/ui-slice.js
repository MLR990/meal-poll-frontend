import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showRecipes: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggle(state) {
      state.showRecipes = !state.showRecipes;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
