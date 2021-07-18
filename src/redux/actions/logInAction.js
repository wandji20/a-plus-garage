import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from '../constants';

const logInUser = () => ({
  type: LOGIN_USER,
});

const logInUserSuccess = (response) => ({
  type: LOGIN_USER_SUCCESS,
  payload: response,
});

const logInUserFailure = (error) => ({
  type: LOGIN_USER_FAILURE,
  payload: error,
});

const url = 'http://localhost:3001/login';

const getLogInDetails = (details) => async (dispatch) => {
  dispatch(logInUser());
  try {
    const response = await fetch(
      url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(details),
      },
    );
    const data = await response.json();
    console.log(data);
    dispatch(logInUserSuccess(data));
  } catch (error) {
    console.log('yooo', error);
    dispatch(logInUserFailure(error));
  }
};

export default getLogInDetails;