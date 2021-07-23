import {
  SIGN_UP_USER_REQUEST,
  SIGN_UP_USER_REQUEST_SUCCESS,
  SIGN_UP_USER_REQUEST_FAILURE,
} from '../constants';

const signUpUserRequest = () => ({
  type: SIGN_UP_USER_REQUEST,
});

const signUpUserRequestSuccess = (user) => ({
  type: SIGN_UP_USER_REQUEST_SUCCESS,
  payload: user,
});

const signUpUserRequestFailure = (status) => ({
  type: SIGN_UP_USER_REQUEST_FAILURE,
  payload: status,
});

const url = 'https://a-plus-garage-api.herokuapp.com/users';

const signUpUserAction = (data) => async (dispatch) => {
  dispatch(signUpUserRequest());
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
    dispatch(signUpUserRequestSuccess(response));
  } catch (error) {
    dispatch(signUpUserRequestFailure(error.message));
  }
};

export default signUpUserAction;
