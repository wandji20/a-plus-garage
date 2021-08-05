import {
  GET_CARS,
  DELETE_CAR,
  POST_CAR,
  UPDATE_PART,
  CAR_REQUEST_FAILURE,
} from '../constants';

const initialState = {
  cars: [],
  error: '',
};

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARS: {
      const response = action.payload;
      return {
        ...state,
        cars: response.cars.reverse(),
        error: '',
      };
    }

    case DELETE_CAR: {
      const id = action.payload;
      const { cars } = state;
      const newCars = cars.filter((car) => (car.id !== id));
      return {
        ...state,
        cars: newCars,
        error: '',
      };
    }

    case POST_CAR: {
      const response = action.payload;
      const { cars } = state;
      const { car } = response;
      return {
        ...state,
        error: '',
        cars: [...cars].unshift(car),
      };
    }

    case UPDATE_PART: {
      const response = action.payload;
      const { part } = response;
      const { id } = part;
      const carId = part.car_id;
      const newCar = state.cars.find((car) => (car.id === carId));
      console.log(part);

      const updatedParts = newCar.parts.map((part) => (part.id === id ? response.part : part));

      newCar.parts = updatedParts;

      const newCars = state.cars.map((car) => (car.id === carId ? newCar : car));

      return {
        ...state,
        error: '',
        cars: newCars,
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
