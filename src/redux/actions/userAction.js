import {
  LOGIN_USER,
  SIGN_UP_USER,
  USER_REQUEST_FAILURE,
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

const userRequestFailure = (error) => ({
  type: USER_REQUEST_FAILURE,
  payload: error,
});

const signUpUser = (data) => async (dispatch) => {
  const url = 'http://localhost:3001/signup/';

  // const url = 'https://a-plus-garage-api.herokuapp.com/signup/';
  try {
    const request = await fetch(
      url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );
    const response = await request.json();
    dispatch(signUpUserRequest(response));
  } catch (error) {
    dispatch(userRequestFailure(error.message));
  }
};

const logInUser = (details) => async (dispatch) => {
  const url = 'http://localhost:3001/auth/login';
  // const url = 'https://a-plus-garage-api.herokuapp.com/auth/login';
  try {
    const response = await fetch(
      url,
      {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(details),
      },
    );
    const data = await response.json();
    dispatch(logInUserRequest(data));
  } catch (error) {
    dispatch(userRequestFailure(error.message));
  }
};

const logOutUser = () => ({
  type: LOGOUT_USER,
});

export {
  signUpUser, logInUser, logOutUser, logInUserSession,
};
