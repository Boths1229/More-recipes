export const DOWNVOTE_RECIPE_REQUEST = 'DOWNVOTE_RECIPE_REQUEST';
export const DOWNVOTE_RECIPE_SUCCESSFUL = 'DOWNVOTE_RECIPE_SUCCESSFUL';
export const DOWNVOTE_RECIPE_ERROR = 'DOWNVOTE_RECIPE_ERROR';

export const downvoteRecipeRequest = recipe => ({
  type: DOWNVOTE_RECIPE_REQUEST,
  recipe,
  isDownvoted: false
});
export const downvoteRecipeSuccess = responseMessage => ({
  type: DOWNVOTE_RECIPE_SUCCESSFUL,
  responseMessage,
  isDownvoted: true
});
export const downvoteRecipeError = errorMessage => ({
  type: DOWNVOTE_RECIPE_ERROR,
  errorMessage,
  isDownvoted: false
});
