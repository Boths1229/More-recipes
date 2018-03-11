import instance from '../Helpers/helper';
import { getPopularRecipeRequest, getPopularRecipeSuccess, getPopularRecipeError } from '../actions/getPopularRecipeAction';

/**
 * @description action creator for getting all recipes
 *
 * @param {recipe} recipe
 *
 * @return {undefined} Redux action to be dispatch to the store
 */
export default function getPopularRecipe() {
  return (dispatch) => {
    dispatch(getPopularRecipeRequest());
    instance.get('/recipes/most-popular-recipe')
      .then((recipes) => {
        const { recipesData } = recipes.data;
        dispatch(getPopularRecipeSuccess(recipesData));
      })
      .catch((errors) => {
        dispatch(getPopularRecipeError(errors[0].message));
      });
  };
}
