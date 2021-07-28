const setToken = (value) => {
  const token = JSON.stringify(value);
  localStorage.setItem('TOKEN', token);
};

const getToken = () => {
  let token = localStorage.getItem('TOKEN');
  if (token) {
    token = JSON.parse(token);
  }
  return token || {};
};

export {
  setToken,
  getToken,
};
