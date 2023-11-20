import { configureStore } from '@reduxjs/toolkit';
import recipeSlice from './recipe-slice';
import uiSlice from './ui-slice';

const store = configureStore({
  reducer: {
    ui: uiSlice,
    recipe: recipeSlice,
  },
});
export default store;
