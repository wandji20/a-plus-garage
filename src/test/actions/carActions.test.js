import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import deleteCarAction from '../../redux/actions/deleteCarAction';
import getCarAction from '../../redux/actions/getCarAction';
import postCarAction from '../../redux/actions/postCarAction';
import updatePartAction from '../../redux/actions/updatePartAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve([]),
}));

describe('when user create car', () => {
  it('fires a post car action', async () => {
    const store = mockStore({});
    return store.dispatch(postCarAction({ name: 'Matrix' }))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({ type: 'POST_CAR' });
      });
  });
});

describe('when user deletes car', () => {
  it('fires a delete car action', async () => {
    const store = mockStore({});
    return store.dispatch(deleteCarAction({ name: 'Matrix' }))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({ type: 'DELETE_CAR' });
      });
  });
});

describe('when user updates a car part', () => {
  it('fires update part action', async () => {
    const store = mockStore({});
    return store.dispatch(updatePartAction({}))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({ type: 'PART_UPDATE' });
      });
  });
});

describe('when user load a car', () => {
  it('fires get car details action', async () => {
    const store = mockStore({});
    return store.dispatch(getCarAction({}))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({ type: 'GET_CAR' });
      });
  });
});
