import {
  POST_CAR,
  POST_CAR_SUCCESS,
  POST_CAR_FAILURE,
} from '../constants';

const initialState = {
  loading: false,
  car: {},
  error: '',
  response: {},
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_CAR: {
      return {
        ...state,
        loading: true,
        car: {},
        error: '',
        response: {},
      };
    }
    case POST_CAR_SUCCESS: {
      const response = action.payload;
      if (response.success && response.car) {
        return {
          ...state,
          loading: false,
          error: '',
          response,
        };
      }
      return {
        ...state,
        loading: false,
        response,
      };
    }
    case POST_CAR_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        response: {},
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default carReducer;
