import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { signUpUser } from '../../redux/actions/userAction';

const SignUpForm = (props) => {
  const {
    handleSignUpUser, signupError, loggedIn,
  } = props;

  if (loggedIn) {
    return <Redirect to="/" />;
  }

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
    handleSignUpUser(data);
    setName('');
    setUserName('');
    setPassword('');
    setPasswordConfirm('');
  };

  return (
    <div className="container w-75 d-flex flex-column justify-content-center align-items-left">
      <p className="row justify-content-center text-danger pt-3">
        {
          signupError !== ''
          && <span className="d-block m-auto">{signupError}</span>
        }
      </p>

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
              required
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
              placeholder="password"
              onChange={handlePasswordChange}
              required
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
              required
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary mb-2">Sign Up</button>
      </form>
      <p className="">
        <span className="inline-block">Already have an account ? </span>
        <span className="inline-block">
          <Link to="/log_in" style={{ textDecoration: 'none' }}>
            log in
          </Link>
        </span>
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.userReducer.loggedIn,
  signupError: state.userReducer.signupError,
});

const mapDispatchToProps = (dispatch) => ({
  handleSignUpUser: (data) => {
    dispatch(signUpUser(data));
  },
});

SignUpForm.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  signupError: PropTypes.string.isRequired,
  handleSignUpUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
