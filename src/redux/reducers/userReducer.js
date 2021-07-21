import { setToken } from '../../helpers/session';
import {
  SIGN_UP_USER_REQUEST,
  SIGN_UP_USER_REQUEST_SUCCESS,
  SIGN_UP_USER_REQUEST_FAILURE,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
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
        const { cars } = response;
        const { id, userID } = response.data.user;
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
        const { cars } = response;
        const { id, userID } = response.data.user;
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
      return {
        ...state,
        loading: false,
        response: {},
        loggedIn: false,
        cars: [],
        error: '',
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
