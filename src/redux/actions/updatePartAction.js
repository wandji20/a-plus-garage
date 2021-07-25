import axios from 'axios';
import { getToken } from '../../helpers/session';

import {
  PART_UPDATE,
  PART_UPDATE_SUCCESS,
  PART_UPDATE_FAILURE,
} from '../constants';

const partUpdateRequest = () => ({
  type: PART_UPDATE,
});

const partUpdateRequestSuccess = (response) => ({
  type: PART_UPDATE_SUCCESS,
  payload: response,
});

const partUpdateRequestFailure = (response) => ({
  type: PART_UPDATE_FAILURE,
  payload: response,
});

const token = getToken();
const userId = token.id;
const url = `http://localhost:3001/users/${userId}/`;
// const url = `https://a-plus-garage-api.herokuapp.com/users/${userId}/`;

const updatePartAction = (carId, partId, data) => async (dispatch) => {
  dispatch(partUpdateRequest());
  try {
    const server = await axios.put(`${url}cars/${carId}/parts/${partId}`, data);
    dispatch(partUpdateRequestSuccess(server.data));
  } catch (error) {
    dispatch(partUpdateRequestFailure(error));
  }
};

export default updatePartAction;
