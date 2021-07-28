import { setToken } from '../../helpers/session';
import {
  SIGN_UP_USER_REQUEST,
  SIGN_UP_USER_REQUEST_SUCCESS,
  SIGN_UP_USER_REQUEST_FAILURE,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  LOGIN_USER_SESSION,
} from '../constants';

const initialState = {
  loading: false,
  loggedIn: false,
  error: '',
  credentialError: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_USER_REQUEST: {
      return {
        ...state,
        loading: true,
        loggedIn: false,
        error: '',
        credentialError: '',
      };
    }
    case SIGN_UP_USER_REQUEST_SUCCESS: {
      const response = action.payload;
      if (response.auth_token) {
        setToken(response);
        return {
          ...state,
          loading: false,
          loggedIn: true,
          error: '',
          credentialError: '',
        };
      }
      return {
        ...state,
        loading: false,
        loggedIn: false,
        error: '',
        credentialError: response.message,
      };
    }
    case SIGN_UP_USER_REQUEST_FAILURE: {
      return {
        ...state,
        loading: false,
        loggedIn: false,
        error: action.payload,
        credentialError: '',
      };
    }
    case LOGIN_USER: {
      return {
        ...state,
        loading: true,
        loggedIn: false,
        error: '',
        credentialError: '',
      };
    }
    case LOGIN_USER_SUCCESS: {
      const response = action.payload;
      if (response.auth_token) {
        setToken(response);
        return {
          ...state,
          loading: false,
          loggedIn: true,
          error: '',
          credentialError: '',
        };
      }
      return {
        ...state,
        loading: false,
        loggedIn: false,
        error: '',
        credentialError: response.message,
      };
    }
    case LOGIN_USER_FAILURE: {
      return {
        ...state,
        loading: false,
        loggedIn: false,
        error: action.payload,
        credentialError: '',
      };
    }

    case LOGOUT_USER: {
      setToken({});
      return {
        ...state,
        loggedIn: false,
        error: '',
        credentialError: '',
      };
    }

    case LOGIN_USER_SESSION: {
      return {
        ...state,
        loggedIn: true,
        error: '',
        credentialError: '',
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
