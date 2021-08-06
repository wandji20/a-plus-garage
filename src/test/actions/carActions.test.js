// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import {
//   deleteCar, getCars, postCar, updatePart,
// } from '../../redux/actions/carsAction';

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

describe('when user create car', () => {
  it('fires a post car action', async () => {
    // const store = mockStore({});
    // return store.dispatch(postCar({ name: 'Matrix' }))
    //   .then(() => {
    //     const actions = store.getActions();
    //     expect(actions[0]).toEqual({ type: 'POST_CAR' });
    //   });
  });
});

// describe('when user deletes car', () => {
//   it('fires a delete car action', async () => {
//     const store = mockStore({});
//     return store.dispatch(deleteCar({ name: 'Matrix' }))
//       .then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({ type: 'DELETE_CAR' });
//       });
//   });
// });

// describe('when user updates a car part', () => {
//   it('fires update part action', async () => {
//     const store = mockStore({});
//     return store.dispatch(updatePart({}))
//       .then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({ type: 'UPDATE_PART' });
//       });
//   });
// });

// describe('when user loads all cars', () => {
//   global.fetch = jest.fn(() => Promise.resolve({
//     json: () => Promise.resolve([]),
//   }));

//   it('fires get cars action', async () => {
//     const store = mockStore([]);
//     return store.dispatch(getCars())
//       .then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({ type: 'GET_CARS' });
//       });
//     // .then((response) => console.log('response', response));
//   });
// });
