const setToken = (value) => {
  sessionStorage.setItem('token', value);
};

const getToken = () => {
  sessionStorage.getItem('token');
  const token = { id: 2, userID: '@sugar' };
  return token;
};

export {
  setToken,
  getToken,
};
