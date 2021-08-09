import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  deleteCar, getCars, postCar, updatePart,
} from '../../redux/actions/carsAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('when user loads all cars', () => {
  jest.mock('axios');

  it('fires get cars action request', async () => {
    const resp = { cars: [], parts: [] };
    axios.get = jest.fn();
    axios.get.mockResolvedValue(resp);

    const store = mockStore([]);
    return store.dispatch(getCars())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({ type: 'GET_CARS' });
      });
  });
});

describe('when user create car', () => {
  it('fires a post car action', async () => {
    const resp = { car: {} };
    axios.post = jest.fn();
    axios.post.mockResolvedValue(resp);
    const store = mockStore({});
    return store.dispatch(postCar({ name: 'Matrix' }))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({ payload: 0, type: 'SET_FILTER_INDEX' });
        expect(actions[1]).toEqual({ type: 'POST_CAR' });
      });
  });
});

describe('when user deletes car', () => {
  it('fires a delete car action', async () => {
    const store = mockStore({});
    axios.delete = jest.fn();
    return store.dispatch(deleteCar(1, 4))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({ payload: 3, type: 'SET_FILTER_INDEX' });
        expect(actions[1]).toEqual({ payload: 1, type: 'DELETE_CAR' });
      });
  });
});

describe('when user updates a car part', () => {
  it('fires update part action', async () => {
    const resp = { part: {} };
    axios.put = jest.fn();
    axios.put.mockResolvedValue(resp);
    const store = mockStore({});
    return store.dispatch(updatePart(1, 2, { part: {} }))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({ type: 'UPDATE_PART' });
      });
  });
});
