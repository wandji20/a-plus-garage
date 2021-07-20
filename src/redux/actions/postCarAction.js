import {
  POST_CAR,
  POST_CAR_SUCCESS,
  POST_CAR_FAILURE,
} from '../constants';

const postCarRequest = (data) => ({
  type: POST_CAR,
  payload: data,
});

const postCarRequestSuccess = (data) => ({
  type: POST_CAR_SUCCESS,
  payload: data,
});

const postCarRequestFailure = (error) => ({
  type: POST_CAR_FAILURE,
  payload: error,
});

const userId = 2;
const url = `http://localhost:3001/users/${userId}/cars/`;

const postCarAction = (data) => async (dispatch) => {
  dispatch(postCarRequest());
  try {
    const server = await fetch(
      url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );
    const response = await server.json();
    dispatch(postCarRequestSuccess(response));
  } catch (error) {
    dispatch(postCarRequestFailure(error));
  }
};

export default postCarAction;
