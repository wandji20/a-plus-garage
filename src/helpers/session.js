const setToken = (value) => {
  const token = JSON.stringify(value);
  console.log(token);
  sessionStorage.setItem('TOKEN', token);
};

const getToken = () => {
  const token = sessionStorage.getItem('TOKEN');

  return token || '';
};

export {
  setToken,
  getToken,
};
