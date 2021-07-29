// import axios from 'axios';
import { getToken } from '../../helpers/session';
import {
  GET_CARS,
  GET_CARS_SUCCESS,
  GET_CARS_FAILURE,
} from '../constants';

const getCarsRequest = () => ({
  type: GET_CARS,
});

const getCarsRequestSuccess = (response) => ({
  type: GET_CARS_SUCCESS,
  payload: response,
});

const getCarsRequestFailure = (response) => ({
  type: GET_CARS_FAILURE,
  payload: response,
});

// const url = 'http://localhost:3001/cars/';
const url = 'https://a-plus-garage-api.herokuapp.com/cars/';

const getCarsAction = () => async (dispatch) => {
  const authToken = getToken().auth_token;
  dispatch(getCarsRequest());
  try {
    const server = await fetch(
      url,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: authToken,
        },
      },
    );
    const response = await server.json();

    dispatch(getCarsRequestSuccess(response));
  } catch (error) {
    dispatch(getCarsRequestFailure(error));
  }
};

export default getCarsAction;
