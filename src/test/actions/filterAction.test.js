import configureStore from 'redux-mock-store';
import setFilterAction from '../../redux/actions/setFilterAction';

const middlewares = [];
const mockStore = configureStore(middlewares);

it('should dispatch filter index action', () => {
  const initialState = {};
  const store = mockStore(initialState);

  store.dispatch(setFilterAction());

  const actions = store.getActions();
  const expectedPayload = { type: 'SET_FILTER_INDEX' };
  expect(actions[0]).toEqual(expectedPayload);
});
