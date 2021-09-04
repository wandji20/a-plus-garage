import { setToken } from '../../helpers/session';
import {
  SIGN_UP_USER,
  LOGIN_USER,
  LOGIN_USER_FAILURE,
  SIGNUP_USER_FAILURE,
  LOGOUT_USER,
  LOGIN_USER_SESSION,
} from '../constants';

const initialState = {
  loading: false,
  loggedIn: false,
  loginError: '',
  signupError: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_USER: {
      const response = action.payload;
      if (response.auth_token) {
        setToken(response.auth_token);
        return {
          ...state,
          loggedIn: true,
          signupError: '',
        };
      }
      if (response.message) {
        const errorMessage = response.message.split(':')[1];
        return {
          ...state,
          signupError: errorMessage,
        };
      }
      return {
        ...state,
      };
    }
    case SIGNUP_USER_FAILURE: {
      return {
        ...state,
        signupError: action.payload,
      };
    }

    case LOGIN_USER_FAILURE: {
      return {
        ...state,
        loginError: action.payload,
      };
    }

    case LOGIN_USER: {
      const response = action.payload;
      if (response.auth_token) {
        setToken(response);
        return {
          ...state,
          loggedIn: true,
          loginError: '',
        };
      }
      return {
        ...state,
        loggedIn: false,
        loginError: response.message,
      };
    }

    case LOGOUT_USER: {
      setToken({});
      return {
        ...state,
        loggedIn: false,
        loginError: '',
        signupError: '',
      };
    }

    case LOGIN_USER_SESSION: {
      return {
        ...state,
        loggedIn: true,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
