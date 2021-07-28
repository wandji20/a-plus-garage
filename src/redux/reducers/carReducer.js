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
  parts: [],
  car: {},
  error: '',
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_CAR: {
      return {
        ...state,
        loading: true,
        parts: [],
        error: '',
        car: {},
      };
    }
    case POST_CAR_SUCCESS: {
      const response = action.payload;

      const { car } = response;
      return {
        ...state,
        loading: false,
        error: '',
        parts: car.parts,
        car,
      };
    }
    case POST_CAR_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        parts: [],
        car: {},
      };
    }
    case GET_CAR: {
      return {
        ...state,
        loading: true,
        parts: [],
        error: '',
      };
    }
    case GET_CAR_SUCCESS: {
      const response = action.payload;
      const { car } = response;

      const { make, power, fuel } = response.car;
      return {
        ...state,
        loading: false,
        error: '',
        parts: car.parts,
        car: { make, power, fuel },
      };
    }
    case GET_CAR_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        parts: [],
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
      const { part } = response;
      const { id } = part;
      const newParts = state.parts;

      const updatedParts = newParts.map((part) => {
        if (part.id === id) {
          return response.part;
        }
        return part;
      });

      return {
        ...state,
        loading: false,
        error: '',
        parts: updatedParts,
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
