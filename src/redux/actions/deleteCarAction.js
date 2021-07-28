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

// const url = 'http://localhost:3001/cars/';
const url = 'https://a-plus-garage-api.herokuapp.com/cars/';

const deleteCarAction = (id) => async (dispatch) => {
  dispatch(deleteCarRequest());
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
    dispatch(deleteCarRequestSuccess(id));
  } catch (error) {
    dispatch(deleteCarRequestFailure(error));
  }
};

export default deleteCarAction;
