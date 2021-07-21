import {
  POST_CAR,
  POST_CAR_SUCCESS,
  POST_CAR_FAILURE,
  GET_CAR,
  GET_CAR_SUCCESS,
  GET_CAR_FAILURE,
} from '../constants';

const initialState = {
  loading: false,
  car: {},
  error: '',
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
        const { car } = response;
        return {
          ...state,
          loading: false,
          error: '',
          car,
        };
      }
      return {
        ...state,
        loading: false,
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
    case GET_CAR: {
      return {
        ...state,
        loading: true,
        car: {},
        error: '',
      };
    }
    case GET_CAR_SUCCESS: {
      const response = action.payload;
      if (response.success && response.car) {
        const { car } = response;
        return {
          ...state,
          loading: false,
          error: '',
          car,
        };
      }
      return {
        ...state,
        loading: false,
        car: {},
      };
    }
    case GET_CAR_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        car: {},
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default carReducer;
