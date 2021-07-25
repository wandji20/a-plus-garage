import { setToken } from '../../helpers/session';
import {
  SIGN_UP_USER_REQUEST,
  SIGN_UP_USER_REQUEST_SUCCESS,
  SIGN_UP_USER_REQUEST_FAILURE,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  DELETE_CAR,
  DELETE_CAR_SUCCESS,
  DELETE_CAR_FAILURE,
  UPDATE_CARS_LIST,
} from '../constants';

const initialState = {
  loading: false,
  loggedIn: false,
  response: {},
  cars: [],
  error: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_USER_REQUEST: {
      return {
        ...state,
        loading: true,
        response: {},
        loggedIn: false,
        cars: [],
        error: '',
      };
    }
    case SIGN_UP_USER_REQUEST_SUCCESS: {
      const response = action.payload;
      if (response.success) {
        const { id, userID, cars } = response.data.user;
        setToken({ id, userID });
        return {
          ...state,
          loading: false,
          loggedIn: true,
          response,
          cars,
          error: '',
        };
      }
      return {
        ...state,
        loading: false,
        loggedIn: false,
        response,
        cars: [],
        error: '',
      };
    }
    case SIGN_UP_USER_REQUEST_FAILURE: {
      return {
        ...state,
        loading: false,
        loggedIn: false,
        response: {},
        cars: [],
        error: action.payload,
      };
    }
    case LOGIN_USER: {
      return {
        ...state,
        loading: true,
        response: {},
        loggedIn: false,
        error: '',
        cars: [],
      };
    }
    case LOGIN_USER_SUCCESS: {
      const response = action.payload;
      if (response.success) {
        const { id, userID, cars } = response.data.user;
        setToken({ id, userID });
        return {
          ...state,
          loading: false,
          loggedIn: true,
          response,
          cars: cars.reverse(),
          error: '',
        };
      }
      return {
        ...state,
        loading: false,
        loggedIn: false,
        response,
        cars: [],
        error: '',
      };
    }
    case LOGIN_USER_FAILURE: {
      return {
        ...state,
        loading: false,
        loggedIn: false,
        response: {},
        cars: [],
        error: action.payload,
      };
    }
    case LOGOUT_USER: {
      setToken('');
      return {
        ...state,
        loading: false,
        response: {},
        loggedIn: false,
        cars: [],
        error: '',
      };
    }
    case DELETE_CAR: {
      return {
        loading: true,
        ...state,
      };
    }
    case DELETE_CAR_SUCCESS: {
      const { cars } = state;
      const newCars = cars.filter((car) => (car.id !== action.payload));
      return {
        ...state,
        cars: newCars,
        loading: false,
      };
    }
    case DELETE_CAR_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case UPDATE_CARS_LIST: {
      const { car } = action.payload.data;
      const { cars } = state;
      const newCars = [...cars];
      newCars.unshift(car);
      return {
        ...state,
        cars: newCars,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
