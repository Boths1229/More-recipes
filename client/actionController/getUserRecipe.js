import axios from 'axios';
import { getUserRecipeRequest, getUserRecipeSuccessful, getUserRecipeError } from '../actions/getUserRecipeAction';

const URL = '/api/v1';

/**
 * @description get recipes belonging to a particular user
 * @param {*} recipe
 * @returns {*} redux action to be dispatch to the store
 */
export default function getUserRecipe() {
  return (dispatch) => {
    dispatch(getUserRecipeRequest());
    axios.get(`${URL}recipes/users/:userId`)
      .then((userRecipe) => {
        console.log("@@@@@@@@@@@@@@", userRecipe)
        const { recipesData } = userRecipe.data;
        dispatch(getUserRecipeSuccessful(recipesData));
      })
      .catch((errors) => {
        dispatch(getUserRecipeError(errors[0].message));
      });
  };
}