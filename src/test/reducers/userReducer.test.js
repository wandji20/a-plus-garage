import userReducer from '../../redux/reducers/userReducer';

describe('authenticate User', () => {
  const initialState = {
    loading: false,
    loggedIn: false,
    error: '',
    errorMessage: '',
  };
  beforeEach(() => initialState);

  it('returns the initial state', () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it('handles login request', () => {
    expect(userReducer(initialState, { type: 'SIGN_UP_USER', payload: { auth_token: 'kkkkk' } })).toEqual({
      ...initialState,
      loggedIn: true,
      error: '',
      errorMessage: '',
    });
  });
});
