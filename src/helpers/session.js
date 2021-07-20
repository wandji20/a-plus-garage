const saveUserID = (value) => {
  sessionStorage.setItem('token', value);
};

const getUserID = () => {
  sessionStorage.getItem('token');
};

export {
  saveUserID,
  getUserID,
};
