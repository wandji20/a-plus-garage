import { getToken } from '../../helpers/session';
import {
  GET_CAR,
  GET_CAR_SUCCESS,
  GET_CAR_FAILURE,
} from '../constants';

const getCarRequest = () => ({
  type: GET_CAR,
});

const getCarRequestSuccess = (response) => ({
  type: GET_CAR_SUCCESS,
  payload: response,
});

const getCarRequestFailure = (response) => ({
  type: GET_CAR_FAILURE,
  payload: response,
});

const url = 'http://localhost:3001/cars/';
// const url = `https://a-plus-garage-api.herokuapp.com/users/${userId}/`;

const getCarAction = (id) => async (dispatch) => {
  // const url = `https://a-plus-garage-api.herokuapp.com/users/${userId}/cars/${carId}`;
  const authToken = getToken().auth_token;
  dispatch(getCarRequest());
  try {
    const server = await fetch(
      url + id,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: authToken,
        },
      },
    );
    const response = await server.json();
    dispatch(getCarRequestSuccess(response));
  } catch (error) {
    console.log(error);
    dispatch(getCarRequestFailure(error));
  }
};

export default getCarAction;
