import { recipeActions } from './recipe-slice';

export const fetchRecipeData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      console.log('get recipes');
      const response = await fetch('http://localhost:5000/api/v1/recipe');

      if (!response.ok) {
        throw new Error('Could not fetch recipe data');
      }
      const data = await response.json();
      return data;
    };
    try {
      const recipeData = await fetchData();
      dispatch(recipeActions.loadRecipes(recipeData));
    } catch (err) {
      //show error notification
    }
  };
};
