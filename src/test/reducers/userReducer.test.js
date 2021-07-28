import userReducer from '../../redux/reducers/userReducer';

describe('authenticate User', () => {
  const initialState = {
    loading: false,
    loggedIn: false,
    error: '',
    credentialError: '',
  };
  beforeEach(() => initialState);

  it('returns the initial state', () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it('handles login request', () => {
    expect(userReducer(initialState, { type: 'SIGN_UP_USER_REQUEST' })).toEqual({
      ...initialState,
      loading: true,
      loggedIn: false,
      error: '',
      credentialError: '',
    });
  });
});
