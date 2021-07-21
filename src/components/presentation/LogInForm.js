import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import getLogInDetails from '../../redux/actions/logInAction';

const LogInForm = (props) => {
  const { handleLogIn } = props;
  const [userID, setUserID] = useState('');

  const handleUserIDChange = (e) => {
    setUserID(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const details = { userID };
    console.log(details);
    setUserID('');
    props.history.push('/details');
    handleLogIn(details);
  };
  return (
    <div className="container w-75 d-flex flex-column justify-content-center align-items-start">
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
          {/* {
            (!response.status && response.errors && response.errors.userID) &&
            <FormError column="UserID" errors={response.errors.userID} />
          } */}
        </div>
        <button type="submit" className="btn btn-info mb-2">log in</button>
      </form>
      <p className="align-self-start">
        <Link to="/sign_up" style={{ color: 'black', textDecoration: 'none' }}>
          Create Account
        </Link>
      </p>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleLogIn: (details) => {
    dispatch(getLogInDetails(details));
  },
});

LogInForm.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  handleLogIn: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(withRouter(LogInForm));
