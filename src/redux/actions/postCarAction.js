import { getToken } from '../../helpers/session';
import {
  POST_CAR,
  POST_CAR_SUCCESS,
  POST_CAR_FAILURE,
  UPDATE_CARS_LIST,
} from '../constants';
import setFilterAction from './setFilterAction';

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

const updateCarList = (car) => ({
  type: UPDATE_CARS_LIST,
  payload: car,
});

const token = getToken();
const userId = token.id;

const url = `http://localhost:3001/users/${userId}/cars`;
// const url = `https://a-plus-garage-api.herokuapp.com/users/${userId}/cars`;

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
    if (response.success) {
      dispatch(updateCarList(response));
      dispatch(setFilterAction(0));
    }
  } catch (error) {
    dispatch(postCarRequestFailure(error));
  }
};

export default postCarAction;
