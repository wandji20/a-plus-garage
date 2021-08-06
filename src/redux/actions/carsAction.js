import axios from 'axios';

import { getToken } from '../../helpers/session';
import {
  GET_CARS,
  DELETE_CAR,
  POST_CAR,
  UPDATE_PART,
  CAR_REQUEST_FAILURE,
} from '../constants';
import setFilterAction from './setFilterAction';

const getCarsRequest = (response) => ({
  type: GET_CARS,
  payload: response,
});

const deleteCarRequest = (id) => ({
  type: DELETE_CAR,
  payload: id,
});

const postCarRequest = (response) => ({
  type: POST_CAR,
  payload: response,
});

const updatePartRequest = (response) => ({
  type: UPDATE_PART,
  payload: response,
});

const carRequestFailure = (error) => ({
  type: CAR_REQUEST_FAILURE,
  payload: error,
});

const getCars = () => async (dispatch) => {
  // const url = 'http://localhost:3001/cars/';
  const url = 'https://a-plus-garage-api.herokuapp.com/cars/';
  const authToken = getToken().auth_token;
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
    dispatch(getCarsRequest(response));
  } catch (error) {
    dispatch(carRequestFailure(error));
  }
};

const deleteCar = (id, index) => async (dispatch) => {
  // const url = 'http://localhost:3001/cars/';
  const url = 'https://a-plus-garage-api.herokuapp.com/cars/';
  const authToken = getToken().auth_token;
  try {
    await axios.delete(
      `${url}${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: authToken,
        },
      },
    );
    dispatch(setFilterAction(index - 1));
    dispatch(deleteCarRequest(id));
  } catch (error) {
    dispatch(carRequestFailure(error));
  }
};

const postCar = (data, history) => async (dispatch) => {
  // const url = 'http://localhost:3001/cars';
  const url = 'https://a-plus-garage-api.herokuapp.com/cars';
  const authToken = getToken().auth_token;
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
    history.push('/');
    dispatch(setFilterAction(0));
    dispatch(postCarRequest(response));
  } catch (error) {
    dispatch(carRequestFailure(error));
  }
};

const updatePart = (carId, partId, data) => async (dispatch) => {
  const authToken = getToken().auth_token;
  // const url = 'http://localhost:3001/';
  const url = 'https://a-plus-garage-api.herokuapp.com/';

  const part = { ...data };
  try {
    const server = await fetch(
      `${url}cars/${carId}/parts/${partId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authToken,
        },
        body: JSON.stringify({ ...part }),
      },
    );

    const response = await server.json();
    dispatch(updatePartRequest(response));
  } catch (error) {
    dispatch(carRequestFailure(error));
  }
};

export {
  getCars, deleteCar, postCar, updatePart,
};
