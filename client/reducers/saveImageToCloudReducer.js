import { SAVE_IMAGE_TO_CLOUD_REQUEST, SAVE_IMAGE_TO_CLOUD_SUCCESSFUL, SAVE_IMAGE_TO_CLOUD_ERROR } from '../actions/saveImageToCloud';

const initialState = {
  image: '',
  isUploaded: false,
  errorMessage: ''
};

const saveImageToCloudReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_IMAGE_TO_CLOUD_REQUEST:
      return {
        ...state,
        image: '',
        isUploaded: action.isUploaded
      };
    case SAVE_IMAGE_TO_CLOUD_SUCCESSFUL:
      return {
        ...state,
        image: action.image,
        isUploaded: action.isUploaded
      };
    case SAVE_IMAGE_TO_CLOUD_ERROR:
      return {
        ...state,
        image: '',
        isUploaded: action.isUploaded,
        errorMessage: action.errorMessage
      };
    default:
      return state;
  }
};

export default saveImageToCloudReducer;
