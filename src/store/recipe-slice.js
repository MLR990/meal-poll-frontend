import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  items: [],
  quantity: 0,
};

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    addRecipe(state, action) {
      const newItem = action.payload;
      state.items.push({
        id: newItem.id,
        name: newItem.name,
        description: newItem.description,
      });
    },
    loadRecipes(state, action) {
      state.quantity = action.payload.results;
      state.items = action.payload.data.recipes;
    },
  },
});
export const recipeActions = recipeSlice.actions;
export default recipeSlice.reducer;
