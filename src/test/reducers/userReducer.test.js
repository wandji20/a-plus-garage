import userReducer from '../../redux/reducers/userReducer'

describe('authenticate User', () => {
  // beforeEach(() => {
  // });
  
  it('returns the initial state', () => {
    const initialState = {
      loading: false,
      loggedIn: false,
      response: {},
      cars: [],
      error: '',
    };
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it('handles login request', () => {
    const initialState = {
      loading: false,
      loggedIn: false,
      response: {},
      cars: [],
      error: '',
    };
    expect(userReducer(initialState, { type: 'SIGN_UP_USER_REQUEST' })).toEqual({
      ...initialState,
      loading: true,
      response: {},
      loggedIn: false,
      cars: [],
      error: '',
    });
  });
})
