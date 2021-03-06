import { ADD_REVIEWS_REQUEST, ADD_REVIEWS_SUCCESSFUL, ADD_REVIEWS_ERROR } from '../actions/addReviewsAction';

const initialState = {
  isAdded: false,
  review: '',
  errorMessage: ''
};

/**
 * @description add reviews reducer
 *
 * @param {object} state - default application state
 * @param {object} action - action dispatched
 *
 * @return {Object} - Object containg new state
 */
const addReviewsReducer = (state = initialState, action) => {
  const {
    isAdded, review, errorMessage, username, createdAt
  } = action;
  switch (action.type) {
    case ADD_REVIEWS_REQUEST:
      return {
        ...state,
        isAdded,
        review,
        errorMessage: ''
      };
    case ADD_REVIEWS_SUCCESSFUL:
      return {
        ...state,
        isAdded,
        review,
        username,
        createdAt,
        errorMessage: ''
      };
    case ADD_REVIEWS_ERROR:
      return {
        ...state,
        isAdded,
        errorMessage,
        review: '',
      };
    default:
      return state;
  }
};

export default addReviewsReducer;
