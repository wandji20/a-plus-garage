import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import signUpUserAction from '../../redux/actions/signUpAction';
import getLogInDetails from '../../redux/actions/logInAction';
import logOutUser from '../../redux/actions/logOutAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve([]),
}));

describe('when a user signs up', () => {
  it('fires a sign up request action', async () => {
    const store = mockStore({});
    return store.dispatch(signUpUserAction({ name: 'Wandji', userID: '@wandji' }))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({ type: 'SIGN_UP_USER_REQUEST' });
      });
  });
});

describe('when a user logs in', () => {
  it('fires a log in request action', async () => {
    const store = mockStore({});
    return store.dispatch(getLogInDetails({ userID: '@wandji' }))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({ type: 'LOGIN_USER' });
      });
  });
});

describe('when user logs out', () => {
  const store = mockStore({});
  it('fires log out action', () => {
    store.dispatch(logOutUser());
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: 'LOGOUT_USER' });
  });
});
