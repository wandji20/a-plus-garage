import {
  GET_CARS,
  DELETE_CAR,
  POST_CAR,
  UPDATE_PART,
  CAR_REQUEST_FAILURE,
} from '../constants';

const initialState = {
  cars: [],
  parts: [],
  error: '',
};

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARS: {
      const response = action.payload;
      const { cars, parts } = response;
      return {
        ...state,
        cars,
        parts,
        error: '',
      };
    }

    case DELETE_CAR: {
      const id = action.payload;
      const { cars, parts } = state;
      const newCars = cars.filter((car) => (car.id !== id));
      const newParts = parts.filter((part) => (part.car_id !== id));
      return {
        ...state,
        cars: newCars,
        parts: newParts,
        error: '',
      };
    }

    case POST_CAR: {
      const response = action.payload;
      const { cars, parts } = state;
      const { car } = response;
      const {
        id, make, fuel, power,
      } = car;

      const newCar = {
        id, make, fuel, power,
      };

      const newCars = [...cars];
      const newParts = [...parts];
      newCars.unshift(newCar);
      newParts.push(...car.parts);

      return {
        ...state,
        error: '',
        cars: newCars,
        parts: newParts,
      };
    }

    case UPDATE_PART: {
      const response = action.payload;
      const { part } = response;
      const { parts } = state;
      const { id } = part;

      const newParts = parts.map((part) => (part.id === id ? response.part : part));

      return {
        ...state,
        error: '',
        parts: newParts,
      };
    }

    case CAR_REQUEST_FAILURE: {
      return {
        ...state,
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
