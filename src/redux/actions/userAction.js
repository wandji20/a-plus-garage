import {
  BASE,
  LOGIN_USER,
  SIGN_UP_USER,
  LOGIN_USER_FAILURE,
  SIGNUP_USER_FAILURE,
  LOGOUT_USER,
  LOGIN_USER_SESSION,
} from '../constants';

const signUpUserRequest = (response) => ({
  type: SIGN_UP_USER,
  payload: response,
});

const logInUserRequest = (response) => ({
  type: LOGIN_USER,
  payload: response,
});

const logInUserSession = () => ({
  type: LOGIN_USER_SESSION,
});

const logOutUser = () => ({
  type: LOGOUT_USER,
});

const loginUserFailure = (error) => ({
  type: LOGIN_USER_FAILURE,
  payload: error,
});

const signUpUserFailure = (error) => ({
  type: SIGNUP_USER_FAILURE,
  payload: error,
});

const signUpUser = (user) => async (dispatch) => {
  const url = `${BASE}signup/`;

  try {
    const server = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user }),
    });
    const response = await server.json();
    dispatch(signUpUserRequest(response));
  } catch (error) {
    dispatch(signUpUserFailure(error));
  }
};

const logInUser = (details) => async (dispatch) => {
  const url = `${BASE}auth/login`;

  try {
    const server = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(details),
    });
    const response = await server.json();
    dispatch(logInUserRequest(response));
  } catch (error) {
    dispatch(loginUserFailure(error.message));
  }
};

export {
  signUpUser, logInUser, logOutUser, logInUserSession,
};
