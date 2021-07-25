import axios from 'axios';
import { getToken } from '../../helpers/session';
import {
  DELETE_CAR,
  DELETE_CAR_SUCCESS,
  DELETE_CAR_FAILURE,
} from '../constants';

const deleteCarRequest = () => ({
  type: DELETE_CAR,
});

const deleteCarRequestSuccess = (id) => ({
  type: DELETE_CAR_SUCCESS,
  payload: id,
});

const deleteCarRequestFailure = (error) => ({
  type: DELETE_CAR_FAILURE,
  payload: error,
});

const token = getToken();
const userId = token.id;

const url = `http://localhost:3001/users/${userId}/`;
// const url = `https://a-plus-garage-api.herokuapp.com/users/${userId}/`;

const deleteCarAction = (id) => async (dispatch) => {
  dispatch(deleteCarRequest());
  try {
    await axios.delete(`${url}cars/${id}`);
    dispatch(deleteCarRequestSuccess(id));
  } catch (error) {
    dispatch(deleteCarRequestFailure(error));
  }
};

export default deleteCarAction;
