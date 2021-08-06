// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import { signUpUser, logInUser, logInUserSession } from '../../redux/actions/userAction';

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

describe('when a user signs up', () => {
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve([]),
  }));
  it('fires a sign up request action', async () => {
    // const store = mockStore({});
    // return store.dispatch(signUpUser({ name: 'Wandji', userID: '@wandji' }))
    //   .then(() => {
    //     const actions = store.getActions();
    //     expect(actions[0]).toEqual({ type: 'SIGN_UP_USER_REQUEST' });
    //   });
  });
});

// describe('when a user logs in', () => {
//   it('fires a log in request action', async () => {
//     const store = mockStore({});
//     return store.dispatch(getLogInDetails({ userID: '@wandji' }))
//       .then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({ type: 'LOGIN_USER' });
//       });
//   });
// });

// describe('when user logs out', () => {
//   const store = mockStore({});
//   it('fires log out action', () => {
//     store.dispatch(logOutUser());
//     const actions = store.getActions();
//     expect(actions[0]).toEqual({ type: 'LOGOUT_USER' });
//   });
// });
