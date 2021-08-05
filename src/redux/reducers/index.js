import { combineReducers } from 'redux';
import userReducer from './userReducer';
import carsReducer from './carsReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers(
  {
    userReducer,
    carsReducer,
    filterReducer,
  },
);
export default rootReducer;
