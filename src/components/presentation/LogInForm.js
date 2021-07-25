import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import FormError from './FormError';

import getLogInDetails from '../../redux/actions/logInAction';

const LogInForm = (props) => {
  const { handleLogIn, response } = props;
  const [userID, setUserID] = useState('');

  const handleUserIDChange = (e) => {
    setUserID(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const details = { userID };
    setUserID('');
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
                  (!response.success && response.errors)
                  && <FormError errors={response.errors} />
                }
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
