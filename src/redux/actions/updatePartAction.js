// import axios from 'axios';
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

const authToken = getToken().auth_token;
const url = 'http://localhost:3001/';
// const url = `https://a-plus-garage-api.herokuapp.com/users/${userId}/`;

const updatePartAction = (carId, partId, data) => async (dispatch) => {
  const part = { ...data };
  dispatch(partUpdateRequest());
  console.log(part);
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
    // const server = await axios.put(
    //   `${url}cars/${carId}/parts/${partId}`,
    //   {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Authorization: authToken,
    //     },
    //   },
    //   part,
    // );
    const response = await server.json();

    dispatch(partUpdateRequestSuccess(response));
  } catch (error) {
    dispatch(partUpdateRequestFailure(error));
  }
};

export default updatePartAction;
