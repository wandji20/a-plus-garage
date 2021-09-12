import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logInUser, loginUserFailure } from '../../redux/actions/userAction';

const LogInForm = (props) => {
  const {
    handleLogIn, loginError, loggedIn, resetError,
  } = props;

  if (loggedIn) {
    return <Redirect to="/" />;
  }

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (loginError !== '') {
      setTimeout(() => {
        resetError('');
      }, 5000);
    }
  }, [loginError]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const details = { user_name: userName, password };
    setUserName('');
    setPassword('');
    handleLogIn(details);
  };
  return (
    <div className="container w-75 d-flex flex-column justify-content-center align-items-start">
      <p className="row justify-content-center text-danger pt-3">
        {
          loginError !== ''
          && <span className="d-block m-auto">{loginError}</span>
        }
      </p>

      <form
        className=" d-flex flex-column align-items-start col-sm-8 col-md-6"
        onSubmit={handleFormSubmit}
      >
        <div className="form-group my-3">
          <label htmlFor="formGroupExampleInput2">
            UserName
            <input
              type="text"
              value={userName}
              className="form-control"
              placeholder="@username"
              onChange={handleUserNameChange}
              required
            />
          </label>
        </div>
        <div className="form-group my-3">
          <label htmlFor="formGroupExampleInput2">
            Password
            <input
              type="password"
              value={password}
              className="form-control"
              onChange={handlePasswordChange}
              required
            />
          </label>
        </div>

        <button type="submit" className="btn btn-info mb-2">log in</button>
      </form>
      <p className="align-self-start">
        <Link to="/sign_up" style={{ textDecoration: 'none' }}>
          Create Account
        </Link>
      </p>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleLogIn: (details) => {
    dispatch(logInUser(details));
  },
  resetError: () => {
    dispatch(loginUserFailure(''));
  },
});

const mapStateToProps = (state) => ({
  loggedIn: state.userReducer.loggedIn,
  loginError: state.userReducer.loginError,
});

LogInForm.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  loginError: PropTypes.string.isRequired,
  handleLogIn: PropTypes.func.isRequired,
  resetError: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
