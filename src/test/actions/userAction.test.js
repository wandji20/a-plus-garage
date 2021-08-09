import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { signUpUser, logInUser } from '../../redux/actions/userAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('axios');
describe('when a user signs up', () => {
  it('fires a sign up request action', async () => {
    const resp = { auth_token: 'nnnnnnnn' };
    axios.post = jest.fn();
    axios.post.mockResolvedValue(resp);
    const store = mockStore({});
    return store.dispatch(signUpUser({ name: 'Wandji', userID: '@wandji' }))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({ type: 'SIGN_UP_USER' });
      });
  });
});

describe('when a user logs in', () => {
  it('fires a log in request action', async () => {
    const resp = { auth_token: 'nnnnnnnn' };
    axios.post = jest.fn();
    axios.post.mockResolvedValue(resp);
    const store = mockStore({});
    return store.dispatch(logInUser({ userID: '@wandji', password: 'kkkkkkkkkkk' }))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({ type: 'LOGIN_USER' });
      });
  });
});
