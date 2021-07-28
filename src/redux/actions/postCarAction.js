import { getToken } from '../../helpers/session';
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

// const url = 'http://localhost:3001/cars';
const url = 'https://a-plus-garage-api.herokuapp.com/cars';

const postCarAction = (data) => async (dispatch) => {
  const authToken = getToken().auth_token;
  dispatch(postCarRequest());
  try {
    const server = await fetch(
      url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authToken,
        },
        body: JSON.stringify(data),
      },
    );
    const response = await server.json();
    dispatch(postCarRequestSuccess(response));
    // dispatch(addCarToList(response));
    // dispatch(setFilterAction(0));
  } catch (error) {
    dispatch(postCarRequestFailure(error));
  }
};

export default postCarAction;
