import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import getLogInDetails from '../../redux/actions/logInAction';

const LogInForm = (props) => {
  const {
    handleLogIn, error, credentialError, loggedIn,
  } = props;
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const details = { user_name: userName, password };
    setUserName('');
    setPassword('');
    handleLogIn(details);
  };
  return (
    <div className="container w-75 d-flex flex-column justify-content-center align-items-start">
      <p className="row justify-content-center text-danger">
        {
          error !== ''
          && <span className="d-block m-auto">{error}</span>
        }
        {
          credentialError !== ''
          && <span className="d-block m-auto">{credentialError}</span>
        }
      </p>
      {
        loggedIn
          ? <Redirect to="/" />
          : (
            <>
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
                    />
                  </label>
                </div>
                <div className="form-group my-3">
                  <label htmlFor="formGroupExampleInput2">
                    Password
                    <input
                      type="text"
                      value={password}
                      className="form-control"
                      onChange={handlePasswordChange}
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
            </>
          )
    }
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleLogIn: (details) => {
    dispatch(getLogInDetails(details));
  },
});

const mapStateToProps = (state) => ({
  credentialError: state.userReducer.credentialError,
  error: state.userReducer.error,
  loggedIn: state.userReducer.loggedIn,
});

LogInForm.propTypes = {
  credentialError: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  handleLogIn: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
