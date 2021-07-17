import { 
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE, } from "../constants";

const logInUser = () => {
  return {
    type: LOGIN_USER,
  }
}

const logInUserSuccess = (response) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: response, 
  }
}

const logInUserFailure = (error) => {
  return {
    type: LOGIN_USER_FAILURE,
    payload: error, 
  }
}


const getLogInDetails = () => {
  return async () => {
    dispatch(logInUser());
    try{
      const response = await fetch(url);
      const data = await response.json();
      dispatch(logInUserSuccess(data))
    } catch(error) {
      dispatch(logInUserFailure(error))
    }
  }
}

export default getLogInDetails;