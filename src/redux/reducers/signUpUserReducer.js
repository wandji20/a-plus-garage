import {
  SIGN_UP_USER_REQUEST,
  SIGN_UP_USER_REQUEST_SUCCESS,
  SIGN_UP_USER_REQUEST_FAILURE,
} from '../constants';

const initialState = {
  loading: false,
  user: {},
  error: '',
};

const signUpUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_USER_REQUEST: {
      return {
        ...state,
        loading: true,
        user: {},
        error: '',
      };
    }
    case SIGN_UP_USER_REQUEST_SUCCESS: {
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: '',
      };
    }
    case SIGN_UP_USER_REQUEST_FAILURE: {
      return {
        ...state,
        loading: false,
        user: {},
        error: action.payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default signUpUserReducer;
