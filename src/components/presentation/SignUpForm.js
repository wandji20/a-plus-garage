import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import FormError from './FormError';
import signUpUserAction from '../../redux/actions/signUpAction';

const SignUpForm = (props) => {
  const { handleSignUpUser, response } = props;
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const handleFormSubmit = (e) => {
    const data = {
      name, user_name: userName, email, password, password_confirmation: passwordConfirm,
    };
    e.preventDefault();
    setName('');
    setUserName('');
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
    console.log(data);
    handleSignUpUser(data);
  };

  return (
    <div className="container w-75 d-flex flex-column justify-content-center align-items-left">
      {
      response.success
        ? <Redirect to="/" />
        : (
          <>
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
              (!response.success && response.errors && response.errors.name)
                && <FormError column="User name" errors={response.errors.name} />
            }

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
                {
              (!response.success && response.errors && response.errors.userName) && <FormError column="UserName" errors={response.errors.userName} />
            }
              </div>

              <div className="form-group my-3">
                <label htmlFor="formGroupExampleInput2">
                  Email
                  <input
                    type="email"
                    value={email}
                    className="form-control"
                    placeholder="example@email"
                    onChange={handleEmailChange}
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
              <Link to="/log_in" style={{ color: 'black', textDecoration: 'none' }}>
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
  response: state.userReducer.response,
});

const mapDispatchToProps = (dispatch) => ({
  handleSignUpUser: (data) => {
    dispatch(signUpUserAction(data));
  },
});

SignUpForm.propTypes = {
  // history: PropTypes.objectOf(PropTypes.any).isRequired,
  response: PropTypes.objectOf(PropTypes.any).isRequired,
  handleSignUpUser: PropTypes.func,
};

SignUpForm.defaultProps = {
  handleSignUpUser: () => {},
};

// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUpForm));
export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
