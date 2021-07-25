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

const token = getToken();
const userId = token.id;
const url = `http://localhost:3001/users/${userId}/`;
// const url = `https://a-plus-garage-api.herokuapp.com/users/${userId}/`;

const getCarDetailsAction = (carId) => async (dispatch) => {
  // const url = `https://a-plus-garage-api.herokuapp.com/users/${userId}/cars/${carId}`;
  dispatch(getCarRequest());
  try {
    const server = await fetch(`${url}/cars/${carId}`);
    const response = await server.json();
    dispatch(getCarRequestSuccess(response));
  } catch (error) {
    dispatch(getCarRequestFailure(error));
  }
};

export default getCarDetailsAction;
