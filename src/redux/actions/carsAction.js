import axios from 'axios';

import { getToken } from '../../helpers/session';
import {
  BASE,
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
  const url = `${BASE}cars/`;

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
  const url = `${BASE}cars/`;
  const authToken = getToken().auth_token;
  try {
    await fetch(
      `${url}${id}`,
      {
        method: 'DELETE',
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

const postCar = (car, history) => async (dispatch) => {
  const url = `${BASE}cars/`;
  const authToken = getToken().auth_token;
  try {
    const server = await fetch(url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authToken,
        },
        body: JSON.stringify(car),
      });
    const response = await server.json();
    dispatch(setFilterAction(0));
    dispatch(postCarRequest(response));
    history.push('/');
  } catch (error) {
    dispatch(carRequestFailure(error));
  }
};

const updatePart = (carId, partId, data) => async (dispatch) => {
  const authToken = getToken().auth_token;

  const part = { ...data };
  try {
    const response = await axios.put(`${BASE}cars/${carId}/parts/${partId}`, part,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: authToken,
        },
      });
    dispatch(updatePartRequest(response.data));
  } catch (error) {
    dispatch(carRequestFailure(error));
  }
};

export {
  getCars, deleteCar, postCar, updatePart, getCarsRequest,
};
