import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import signUpUserAction from '../../../redux/actions/signUpAction';
import getLogInDetails from '../../../redux/actions/logInAction';
import logOutUser from '../../../redux/actions/logOutAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
// const user = {
//   name:"wandji",
//   cars:[
//     {
//       "id":3,"make":"Lexus","user_id":7,"created_at":"2021-07-23T12:14:36.647Z","updated_at":"2021-07-23T12:14:36.647Z","fuel":8,"power":7
//     },
//     {
//       "id":4,"make":"avensis","user_id":7,"created_at":"2021-07-23T12:14:59.875Z","updated_at":"2021-07-23T12:14:59.875Z","fuel":8,"power":3
//     },
//   ]
// }

// const response = {
//   success: true,
//   data: {
//     logged_in: true,
//     user: {
//       name: 'Wandji', id: 1, userID: '@wandji',
//     },
//   },
// };
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

describe('when user logs out', ()=>{
  const store = mockStore({});
  it('fires log out action', ()=>{
    store.dispatch(logOutUser())
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: 'LOGOUT_USER' });
  })
})
