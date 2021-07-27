import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import FormError from './FormError';

import getLogInDetails from '../../redux/actions/logInAction';

const LogInForm = (props) => {
  const { handleLogIn, response } = props;
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
    console.log(details);
    setUserName('');
    setPassword('');
    handleLogIn(details);
  };
  return (
    <div className="container w-75 d-flex flex-column justify-content-center align-items-start">
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
              <Link to="/sign_up" style={{ color: 'black', textDecoration: 'none' }}>
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
  response: state.userReducer.response,
});

LogInForm.propTypes = {
  response: PropTypes.objectOf(PropTypes.any).isRequired,
  handleLogIn: PropTypes.func.isRequired,
};

// export default connect(null, mapDispatchToProps)(withRouter(LogInForm));
export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
