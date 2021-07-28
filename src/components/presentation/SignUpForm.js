import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import signUpUserAction from '../../redux/actions/signUpAction';

const SignUpForm = (props) => {
  const {
    handleSignUpUser, error, credentialError, loggedIn,
  } = props;
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const handleFormSubmit = (e) => {
    const data = {
      name, user_name: userName, password, password_confirmation: passwordConfirm,
    };
    e.preventDefault();
    setName('');
    setUserName('');
    setPassword('');
    setPasswordConfirm('');
    handleSignUpUser(data);
  };

  return (
    <div className="container w-75 d-flex flex-column justify-content-center align-items-left">
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
                <label htmlFor="name">
                  Name
                  <input
                    type="text"
                    id="name"
                    value={name}
                    className="form-control"
                    placeholder="...name"
                    onChange={handleNameChange}
                  />
                </label>

              </div>
              <div className="form-group my-3">
                <label htmlFor="formGroupExampleInput2">
                  User Name
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
                    type="password"
                    value={password}
                    className="form-control"
                    placeholder="password"
                    onChange={handlePasswordChange}
                  />
                </label>
              </div>

              <div className="form-group my-3">
                <label htmlFor="formGroupExampleInput2">
                  Confirm Password
                  <input
                    type="password"
                    value={passwordConfirm}
                    className="form-control"
                    onChange={handlePasswordConfirmChange}
                  />
                </label>
              </div>
              <button type="submit" className="btn btn-primary mb-2">Sign Up</button>
            </form>
            <p className="">
              <Link to="/log_in" style={{ textDecoration: 'none' }}>
                Already have an account ? Login
              </Link>
            </p>
          </>
        )
    }
    </div>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.userReducer.loggedIn,
  error: state.userReducer.error,
  credentialError: state.userReducer.credentialError,
});

const mapDispatchToProps = (dispatch) => ({
  handleSignUpUser: (data) => {
    dispatch(signUpUserAction(data));
  },
});

SignUpForm.propTypes = {
  credentialError: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  handleSignUpUser: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

// SignUpForm.defaultProps = {
//   handleSignUpUser: () => {},
// };

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
