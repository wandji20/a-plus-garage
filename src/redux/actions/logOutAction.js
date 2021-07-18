import {
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
} from '../constants';

const logOutUser = () => ({
  type: LOGOUT_USER,
});

const logOutUserSuccess = (response) => ({
  type: LOGOUT_USER_SUCCESS,
  payload: response,
});

const logOutUserFailure = (error) => ({
  type: LOGOUT_USER_FAILURE,
  payload: error,
});

const url = 'http://localhost:3001/logout';

const logOutUserAction = (details) => async (dispatch) => {
  dispatch(logOutUser());
  try {
    const response = await fetch(
      url,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(details),
      },
    );
    const data = await response.json();
    dispatch(logOutUserSuccess(data));
  } catch (error) {
    dispatch(logOutUserFailure(error));
  }
};

export default logOutUserAction;
