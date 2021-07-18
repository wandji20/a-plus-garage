import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
    handleLogIn(details);
  };
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <form
        className=" d-flex flex-column col-sm-8 col-md-6"
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
        <button type="submit" className="btn btn-primary mb-2 w-25">log in</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleLogIn: (details) => {
    dispatch(getLogInDetails(details));
  },
});

LogInForm.propTypes = {
  handleLogIn: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(LogInForm);
