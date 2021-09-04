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
    const response = await axios.get(
      url,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: authToken,
        },
      },
    );

    dispatch(getCarsRequest(response.data));
  } catch (error) {
    dispatch(carRequestFailure(error));
  }
};

const deleteCar = (id, index) => async (dispatch) => {
  const url = `${BASE}cars/`;
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

const postCar = (car, history) => async (dispatch) => {
  const url = `${BASE}cars/`;
  const authToken = getToken().auth_token;
  try {
    const response = await axios.post(url, car,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: authToken,
        },
      });
    dispatch(setFilterAction(0));
    dispatch(postCarRequest(response.data));
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
