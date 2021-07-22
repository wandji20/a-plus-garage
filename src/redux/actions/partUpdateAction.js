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

const updatePartAction = (carId, partId) => async (dispatch) => {
  const url = `http://localhost:3001/users/${userId}/cars/${carId}/parts/${partId}`;
  dispatch(partUpdateRequest());
  try {
    const server = await fetch(url);
    const response = await server.json();
    dispatch(partUpdateRequestSuccess(response));
  } catch (error) {
    dispatch(partUpdateRequestFailure(error));
  }
};

export default updatePartAction;
