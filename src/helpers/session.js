const setToken = (value) => {
  const token = JSON.stringify(value);
  sessionStorage.setItem('TOKEN', token);
};

const getToken = () => {
  let token = sessionStorage.getItem('TOKEN');
  if (token) {
    token = JSON.parse(token);
  }
  return token || {};
};

export {
  setToken,
  getToken,
};
