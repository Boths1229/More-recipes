import { GET_POPULAR_RECIPE_REQUEST, GET_POPULAR_RECIPE_SUCCESSFUL, GET_POPULAR_RECIPE_ERROR } from '../actions/getPopularRecipeAction';
import { INCREMENT_UPVOTE, DECREMENT_UPVOTE } from '../actions/upvoteRecipeAction';
import { INCREMENT_DOWNVOTE, DECREMENT_DOWNVOTE } from '../actions/downvoteRecipeAction';
import { FAVORITE_RECIPE_SUCCESSFUL } from '../actions/favoriteRecipeAction';


const initialState = {
  isFetched: false,
  popularRecipesData: [],
  errorMessage: ''
};
/**
 * @description get popular recipe reducer
 *
 * @param {object} state - default application state
 * @param {object} action - response from the api
 *
 * @return {Object} - Object containg new state
 */
const getPopularRecipeReducer = (state = initialState, action) => {
  const { isFetched, popularRecipesData, errorMessage } = action;
  switch (action.type) {
    case GET_POPULAR_RECIPE_REQUEST:
      return {
        ...state,
        isFetched,
        popularRecipesData: [],
        errorMessage: ''
      };
    case GET_POPULAR_RECIPE_SUCCESSFUL:
      return {
        ...state,
        isFetched,
        popularRecipesData,
        errorMessage: ''
      };
    case GET_POPULAR_RECIPE_ERROR:
      return {
        isFetched,
        popularRecipesData: [],
        errorMessage
      };
    default:
      return state;
  }
};

export default getPopularRecipeReducer;
