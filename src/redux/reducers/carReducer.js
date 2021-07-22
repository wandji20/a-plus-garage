import {
  POST_CAR,
  POST_CAR_SUCCESS,
  POST_CAR_FAILURE,
  GET_CAR,
  GET_CAR_SUCCESS,
  GET_CAR_FAILURE,
  PART_UPDATE,
  PART_UPDATE_SUCCESS,
  PART_UPDATE_FAILURE,
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
      if (response.success) {
        const { car } = response.data;
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

    case PART_UPDATE: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }

    case PART_UPDATE_SUCCESS: {
      const response = action.payload;
      if (response.success) {
        const { part } = response;
        const { id } = part;
        const newCar = state.car;
        const parts = newCar.parts.map((part) => {
          if (part.id === id) {
            return response.part;
          }
          return part;
        });
        newCar.parts = parts;
        return {
          ...state,
          loading: false,
          error: '',
          car: newCar,
        };
      }
      return {
        ...state,
      };
    }
    case PART_UPDATE_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default carReducer;
