import { setToken } from '../../helpers/session';
import {
  SIGN_UP_USER,
  LOGIN_USER,
  USER_REQUEST_FAILURE,
  LOGOUT_USER,
  LOGIN_USER_SESSION,
} from '../constants';

const initialState = {
  loading: false,
  loggedIn: false,
  errorMessage: '',
  error: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_USER: {
      const response = action.payload;
      console.log(response);
      if (response.auth_token) {
        setToken(response);
        return {
          ...state,
          loggedIn: true,
          errorMessage: '',
          error: '',
        };
      }
      return {
        ...state,
        errorMessage: response.message,
        error: '',
      };
    }
    case USER_REQUEST_FAILURE: {
      return {
        ...state,
        error: action.payload,
        errorMessage: '',
      };
    }

    case LOGIN_USER: {
      const response = action.payload;
      console.log(response);
      if (response.auth_token) {
        setToken(response);
        return {
          ...state,
          loggedIn: true,
          error: '',
          errorMessage: '',
        };
      }
      return {
        ...state,
        loading: false,
        loggedIn: false,
        error: '',
        errorMessage: response.message,
      };
    }

    case LOGOUT_USER: {
      setToken({});
      return {
        ...state,
        loggedIn: false,
        error: '',
      };
    }

    case LOGIN_USER_SESSION: {
      return {
        ...state,
        loggedIn: true,
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
