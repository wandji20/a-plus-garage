import { combineReducers } from 'redux';
import userReducer from './userReducer';
import carsReducer from './carsReducer';
import filterReducer from './filterReducer';
import carReducer from './carReducer';

const rootReducer = combineReducers(
  {
    userReducer,
    carsReducer,
    filterReducer,
    carReducer,
  },
);
export default rootReducer;
