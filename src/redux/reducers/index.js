import { combineReducers } from 'redux';
import userReducer from './userReducer';
import carReducer from './carReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers(
  {
    userReducer,
    carReducer,
    filterReducer,
  },
);
export default rootReducer;
