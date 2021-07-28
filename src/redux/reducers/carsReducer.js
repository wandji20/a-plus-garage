import {
  GET_CARS,
  GET_CARS_SUCCESS,
  GET_CARS_FAILURE,
  DELETE_CAR,
  DELETE_CAR_SUCCESS,
  DELETE_CAR_FAILURE,
} from '../constants';

const initialState = {
  loading: false,
  cars: [],
  error: '',
};

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARS: {
      return {
        ...state,
        loading: true,
        cars: [],
        error: '',
      };
    }
    case GET_CARS_SUCCESS: {
      const response = action.payload;
      return {
        ...state,
        loading: false,
        cars: response.cars,
      };
    }
    case GET_CARS_FAILURE: {
      return {
        ...state,
        loading: false,
        cars: [],
        error: action.payload,
      };
    }

    case DELETE_CAR: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case DELETE_CAR_SUCCESS: {
      const id = action.payload;
      const { cars } = state;
      const newCars = cars.filter((car) => (car.id !== id));
      console.log(newCars, id);
      return {
        ...state,
        cars: newCars,
        loading: false,
        error: '',
      };
    }
    case DELETE_CAR_FAILURE: {
      return {
        ...state,
        loading: false,
        cars: [],
        error: action.payload,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default carsReducer;
