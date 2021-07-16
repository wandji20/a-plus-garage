import { combineReducers } from 'redux';
import signUpUserReducer from './signUpUserReducer';

const rootReducer = combineReducers(
  {
    signUpUser: signUpUserReducer,
  },
);
export default rootReducer;
