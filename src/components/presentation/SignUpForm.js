/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import signUpUserAction from '../../redux/actions/signUpAction';
import { Link } from 'react-router-dom';
import FormError from './FormError';

const SignUpForm = (props) => {
  const { handleSignUpUser, response } = props;
  // console.log(response);
  const [name, setName] = useState('');
  const [userID, setUserID] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUserIDChange = (e) => {
    setUserID(e.target.value);
  };

  const handleFormSubmit = (e) => {
    const data = { name, userID };
    e.preventDefault();
    console.log(handleSignUpUser);
    console.log(data);
    setName('');
    setUserID('');
    handleSignUpUser(data);
  };

  return (
    <div className="container w-75 d-flex flex-column justify-content-center align-items-left">
      <form
        className=" d-flex flex-column align-items-start col-sm-8 col-md-6"
        onSubmit={handleFormSubmit}
      >
        <div className="form-group my-3">
          <label htmlFor="name">
            User Name
            <input
              type="text"
              id="name"
              value={name}
              className="form-control"
              placeholder="...name"
              onChange={handleNameChange}
            />
          </label>
          {
            (!response.success && response.errors && response.errors.name) && <FormError column="User name" errors={response.errors.name} />
          }

        </div>
        <div className="form-group my-3">
          <label htmlFor="formGroupExampleInput2">
            UserID
            <input
              type="text"
              value={userID}
              className="form-control"
              placeholder="@username"
              onChange={handleUserIDChange}
            />
          </label>
          {
            (!response.success && response.errors && response.errors.userID) && <FormError column="UserID" errors={response.errors.userID} />
          }
        </div>
        <button type="submit" className="btn btn-primary mb-2">Sign Up</button>
      </form>
      <p className="">
        <Link to="/log_in" style={{ color: 'black', textDecoration: 'none' }}>
          Already have an account
        </Link>
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  response: state.userReducer.response,
});

const mapDispatchToProps = (dispatch) => ({
  handleSignUpUser: (data) => {
    dispatch(signUpUserAction(data));
  },
});

SignUpForm.propTypes = {
  handleSignUpUser: PropTypes.func,
};

SignUpForm.defaultProps = {
  handleSignUpUser: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
