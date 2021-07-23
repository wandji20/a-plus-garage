import { SET_FILTER_INDEX } from '../constants';

const initialState = {
  index: 0,
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER_INDEX: {
      if (action.payload >= 0) {
        return {
          ...state,
          index: action.payload,
        };
      }
      return {
        ...state,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default filterReducer;
