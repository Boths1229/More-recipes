export const GET_RECIPE_REQUEST = 'GET_RECIPE_REQUEST';
export const GET_RECIPE_SUCCESSFUL = 'GET_RECIPE_SUCCESSFUL';
export const GET_RECIPE_ERROR = 'GET_RECIPE_ERROR';

export const getRecipeRequest = () => ({
  type: GET_RECIPE_REQUEST
});
export const getRecipeSuccess = () => ({
  type: GET_RECIPE_SUCCESSFUL
});
export const getRecipeError = () => ({
  type: GET_RECIPE_ERROR
});
